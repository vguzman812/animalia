import mongoose from "mongoose";
import "dotenv/config";
import colors from "colors";
import sampleUsers from "./data/users.js";
import sampleFacts from "./data/facts.js";
import User from "./models/userModel.js";
import Fact from "./models/factModel.js";
import connectDb from "./config/db.js";

connectDb();

const importData = async () => {
    try {
        await User.deleteMany();
        await Fact.deleteMany();

        const createdUsers = await User.insertMany(sampleUsers);
        const adminUser = createdUsers[0]._id;

        const createdFacts = sampleFacts.map((fact) => {
            return { ...fact, user: adminUser };
        });

        await Fact.insertMany(createdFacts);

        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Fact.deleteMany();
        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv.includes("-D") || process.argv.includes("-d")) {
    destroyData();
} else {
    importData();
}
