import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const { MONGO_CONN_STRING, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

let mongoServer: MongoMemoryServer | null = null;

const getUri = async (): Promise<string> => {
    // 1) Use the literal connection string if set
    if (MONGO_CONN_STRING) return MONGO_CONN_STRING;

    // 2) Build one from creds if both are set
    if (MONGO_USERNAME && MONGO_PASSWORD) {
        return `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.wr9zgdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    }
    // 3) Fall back to in-memory
    console.log("No connection string found, starting in-memory instance...");
    mongoServer = await MongoMemoryServer.create();
    return mongoServer.getUri();
};

const connectDB = async (): Promise<void> => {
    try {
        const uri = await getUri();
        await mongoose.connect(uri);
        console.log(`Connected to MongoDB${mongoServer ? " (in-memory)" : ""}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

// Cleanup function
export const closeDB = async () => {
    await mongoose.connection.close();
    if (mongoServer) {
        await mongoServer.stop();
    }
};

// Handle MongoDB connection errors after initial connection
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

process.on("SIGINT", () => {
    closeDB()
        .then(() => {
            console.log("MongoDB connection closed due to app termination");
            process.exit(0);
        })
        .catch((err) => {
            console.error("Error closing MongoDB connection:", err);
            process.exit(1);
        });
});

export default connectDB;