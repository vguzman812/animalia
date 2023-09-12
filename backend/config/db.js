import mongoose from "mongoose";

async function connectDb() {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDb;