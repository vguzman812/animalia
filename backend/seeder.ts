import "dotenv/config";
import "colors";
import sampleUsers from "./data/users.js";
import sampleFacts from "./data/facts.js";
import DatabaseManager from "./config/db.js";

const updateProgressBar = (
    current: number,
    total: number,
    barLength = 40
) => {
    const progress = current / total;
    const filledLength = Math.round(barLength * progress);
    const bar = "█".repeat(filledLength) + "░".repeat(barLength - filledLength);
    const percentage = Math.round(progress * 100);

    process.stdout.write(`\r[${bar}] ${percentage}% (${current}/${total})`);

    if (current === total) {
        process.stdout.write("\n");
    }
};

// Function to populate the database with sample data
const importData = async (maxFacts?: number) => {
    // function to allow for different creation times in the db of seeded data
    const sleep = (milliseconds: number) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    try {
        const dbManager = DatabaseManager.getInstance();
        await dbManager.connect();

        const userRepository = dbManager.getUserRepository();
        const factRepository = dbManager.getFactRepository();

        console.log("Clearing existing data...");

        // Facts first
        const totalFacts = await factRepository.count();
        if (totalFacts > 0) {
            const { data: allFacts } = await factRepository.findAll({
                page: 1,
                limit: totalFacts,
            });
            for (const fact of allFacts) {
                await factRepository.delete(fact.id);
            }
        }

        // Then users
        const totalUsers = await userRepository.count();
        if (totalUsers > 0) {
            const { data: allUsers } = await userRepository.findAll({
                page: 1,
                limit: totalUsers,
            });
            for (const user of allUsers) {
                await userRepository.delete(user.id);
            }
        }
        console.log("Existing data cleared.");

        console.log("Creating sample users...");
        const createdUsers = [];
        for (const userData of sampleUsers) {
            const user = await userRepository.create(userData);
            createdUsers.push(user);
        }

        const firstUser = createdUsers[0];
        if (!firstUser) {
            throw new Error("No users were created");
        }

        console.log(`Created ${createdUsers.length} users`);

        // Determine how many facts to create
        const factsToCreate = maxFacts
            ? Math.min(maxFacts, sampleFacts.length)
            : sampleFacts.length;
        const selectedFacts = sampleFacts.slice(0, factsToCreate);
        console.log(`Seeding ${factsToCreate} facts. Please be patient...`);

        // Create facts and assign them to the first user (admin)
        for (let i = 0; i < selectedFacts.length; i++) {
            const factData = selectedFacts[i];
            await factRepository.create({
                ...factData,
                userId: firstUser.id,
                likes: [],
            });

            // Update progress bar
            updateProgressBar(i + 1, selectedFacts.length);

            await sleep(500); // wait for .5 second in between facts population
        }

        // Log a success message
        console.log("Data Imported!".green.inverse);

        await dbManager.disconnect();
        process.exit();
    } catch (error) {
        // Log any errors
        if (error instanceof Error) {
            console.error(`Error: ${error}`.red.inverse);
        } else {
            console.error("something went wrong seeding the db: ");
            console.error(error);
        }
        process.exit(1);
    }
};

// Function to delete all data from the database
const destroyData = async () => {
    try {
        const dbManager = DatabaseManager.getInstance();
        await dbManager.connect();

        const userRepository = dbManager.getUserRepository();
        const factRepository = dbManager.getFactRepository();

        // actually delete everything
        console.log("Deleting all facts...");
        const factCount = await factRepository.count();
        if (factCount > 0) {
            const { data: facts } = await factRepository.findAll({
                page: 1,
                limit: factCount,
            });
            for (const f of facts) {
                await factRepository.delete(f.id);
            }
        }

        console.log("Deleting all users...");
        const userCount = await userRepository.count();
        if (userCount > 0) {
            const { data: users } = await userRepository.findAll({
                page: 1,
                limit: userCount,
            });
            for (const u of users) {
                await userRepository.delete(u.id);
            }
        }

        // Log a success message
        console.log("Data Destroy operation completed!".red.inverse);

        await dbManager.disconnect();
        process.exit();
    } catch (error) {
        // Log any errors
        if (error instanceof Error) {
            console.error(`Error: ${error}`.red.inverse);
        } else {
            console.error("something went wrong deleting db data: ");
            console.error(error);
        }
        process.exit(1);
    }
};

const parseArgs = () => {
    const args = process.argv.slice(2);
    let maxFacts: number | undefined;
    let shouldDestroy = false;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === "-D" || arg === "-d") {
            shouldDestroy = true;
        } else if (arg === "--limit" || arg === "-l") {
            const nextArg = args[i + 1];
            if (nextArg && !isNaN(Number(nextArg))) {
                maxFacts = Number(nextArg);
                i++; // Skip the next argument since we've used it
            } else {
                console.error("Error: --limit requires a number".red);
                process.exit(1);
            }
        } else if (arg.startsWith("--limit=")) {
            const value = arg.split("=")[1];
            if (value && !isNaN(Number(value))) {
                maxFacts = Number(value);
            } else {
                console.error("Error: --limit requires a number".red);
                process.exit(1);
            }
        }
    }

    return { shouldDestroy, maxFacts };
};

void (async (): Promise<void> => {
    try {
        const { shouldDestroy, maxFacts } = parseArgs();

        if (shouldDestroy) {
            await destroyData();
        } else {
            await importData(maxFacts);
        }
    } catch (err: unknown) {
        // turn whatever we got into a string
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`Error in seeder: ${msg}`.red.inverse);
        process.exit(1);
    }
})();
