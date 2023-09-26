import mongoose from "mongoose";
import "dotenv/config";
import colors from "colors";
import sampleUsers from "./data/users.js";
import sampleFacts from "./data/facts.js";
import User from "./models/userModel.js";
import Fact from "./models/factModel.js";
import connectDb from "./config/db.js";

// Connect to the MongoDB database
connectDb();

// Function to populate the database with sample data
const importData = async () => {

	// function to allow for different creation times in the db of seeded data
	const sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	try {
		// Delete all existing users and facts
		await User.deleteMany();
		await Fact.deleteMany();

		// Insert the sample users into the User collection
		const createdUsers = await User.insertMany(sampleUsers);

		// Get the admin user ID
		const adminUser = createdUsers[0]._id;

		// Map sample facts to include the admin user's ID
		const createdFacts = sampleFacts.map((fact) => {
			return { ...fact, user: adminUser };
		});

		// Insert the mapped facts into the Fact collection
		console.log("Seeding db. Please be patient...")
		let count = 1;
		for (let i = 0; i < createdFacts.length; i++) {
			console.log(`Adding fact ${count} of ${createdFacts.length}`)
			await Fact.create(createdFacts[i]);
			await sleep(500); // wait for .5 second in between facts population
			count++
		}
		// Log a success message
		console.log("Data Imported!".green.inverse);
		process.exit();
	} catch (error) {
		// Log any errors
		console.error(`Error: ${error}`.red.inverse);
		process.exit(1);
	}
};

// Function to delete all data from the database
const destroyData = async () => {
	try {
		// Delete all existing users and facts
		await User.deleteMany();
		await Fact.deleteMany();

		// Log a success message
		console.log("Data Destroyed!".red.inverse);
		process.exit();
	} catch (error) {
		// Log any errors
		console.error(`Error: ${error}`.red.inverse);
		process.exit(1);
	}
};

// Check command-line arguments to determine which function to run
if (process.argv.includes("-D") || process.argv.includes("-d")) {
	destroyData();
} else {
	importData();
}
