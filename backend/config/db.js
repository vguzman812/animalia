import mongoose from 'mongoose';

const MONGO_URI = process.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI;
// Define an asynchronous function to connect to MongoDB
async function connectDb() {
  try {
    // Try connecting to MongoDB using the connection URI stored in an environment variable
    // The await keyword waits for the operation to complete and stores the result in the variable 'conn'
    let conn = await mongoose.connect(process.env.MONGO_URI);

    // Log a success message to the console, including the MongoDB host to which we've connected
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    // If the connection fails, log the error message to the console
    console.error(`Error: ${error.message}`);

    // Terminate the Node.js process with a failure status (1)
    process.exit(1);
  }
}

// Export the connectDb function to be used in other parts of the application
export default connectDb;
