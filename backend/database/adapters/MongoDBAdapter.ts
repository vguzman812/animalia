import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import type {
    IDatabaseAdapter,
    IUserRepository,
    IFactRepository,
} from "../../types/index.ts";
import { MongoDBUserRepository } from "../repositories/mongodb/MongoDBUserRepository.js";
import { MongoDBFactRepository } from "../repositories/mongodb/MongoDBFactRepository.js";

interface MongoDBConfig {
    connectionString?: string;
    username?: string;
    password?: string;
}

export class MongoDBAdapter implements IDatabaseAdapter {
    private mongoServer: MongoMemoryServer | null = null;
    private userRepository: MongoDBUserRepository;
    private factRepository: MongoDBFactRepository;
    private config: MongoDBConfig;

    constructor(config: MongoDBConfig) {
        this.config = config;
        this.userRepository = new MongoDBUserRepository();
        this.factRepository = new MongoDBFactRepository();
    }

    private async getUri(): Promise<string> {
        // 1) Use the literal connection string if set
        if (this.config.connectionString) return this.config.connectionString;

        // 2) Build one from creds if both are set
        if (this.config.username && this.config.password) {
            return `mongodb+srv://${this.config.username}:${this.config.password}@cluster0.wr9zgdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        }

        // 3) Fall back to in-memory
        console.log(
            "No connection string found, starting in-memory MongoDB instance..."
        );
        this.mongoServer = await MongoMemoryServer.create();
        return this.mongoServer.getUri();
    }

    async connect(): Promise<void> {
        try {
            const uri = await this.getUri();
            await mongoose.connect(uri);
            console.log(
                `Connected to MongoDB${this.mongoServer ? " (in-memory)" : ""}`
            );

            // Setup connection event listeners
            mongoose.connection.on("error", (err) => {
                console.error("MongoDB connection error:", err);
            });

            mongoose.connection.on("disconnected", () => {
                console.log("MongoDB disconnected");
            });
        } catch (error) {
            console.error("MongoDB connection error:", error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        await mongoose.connection.close();
        if (this.mongoServer) {
            await this.mongoServer.stop();
        }
    }

    getUserRepository(): IUserRepository {
        return this.userRepository;
    }

    getFactRepository(): IFactRepository {
        return this.factRepository;
    }
}
