import type {
    DatabaseConfig,
    DatabaseType,
    IDatabaseAdapter,
} from "../types/index.js";
import { DatabaseAdapterFactory } from "../database/DatabaseAdapterFactory.js";

export class DatabaseManager {
    private static instance: DatabaseManager;
    private adapter: IDatabaseAdapter | null = null;

    private constructor() {}

    static getInstance(): DatabaseManager {
        if (!DatabaseManager.instance) {
            DatabaseManager.instance = new DatabaseManager();
        }
        return DatabaseManager.instance;
    }

    private getConfig(): DatabaseConfig {
        const {DATABASE_TYPE} = process.env
        const databaseType: DatabaseType = DATABASE_TYPE ? DATABASE_TYPE as DatabaseType : "memory"

        const config: DatabaseConfig = { type: databaseType };

        switch (databaseType) {
            case "mongodb":
                config.mongodb = {
                    connectionString: process.env.MONGO_CONN_STRING,
                    username: process.env.MONGO_USERNAME,
                    password: process.env.MONGO_PASSWORD,
                };
                break;

            case "postgresql":
                config.postgresql = {
                    host: process.env.POSTGRES_HOST || "localhost",
                    port: parseInt(process.env.POSTGRES_PORT || "5432"),
                    database: process.env.POSTGRES_DB || "animalia",
                    username: process.env.POSTGRES_USER || "",
                    password: process.env.POSTGRES_PASSWORD || "",
                };
                break;
                
            case "memory":
                // No additional config needed for memory adapter
                break;

            default:
                throw new Error(`Unsupported database type.`);
        }

        return config;
    }

    async connect(): Promise<void> {
        if (this.adapter) {
            console.log("Database already connected");
            return;
        }

        const config = this.getConfig();
        this.adapter = DatabaseAdapterFactory.createAdapter(config);
        await this.adapter.connect();

        // Setup cleanup on process termination
        process.on("SIGINT", () => {
            this.disconnect()
                .then(() => {
                    console.log(
                        "Database connection closed due to app termination"
                    );
                    process.exit(0);
                })
                .catch((err) => {
                    console.error("Error closing database connection:", err);
                    process.exit(1);
                });
        });
    }

    async disconnect(): Promise<void> {
        if (this.adapter) {
            await this.adapter.disconnect();
            this.adapter = null;
        }
    }

    getAdapter(): IDatabaseAdapter {
        if (!this.adapter) {
            throw new Error("Database not connected. Call connect() first.");
        }
        return this.adapter;
    }

    getUserRepository() {
        return this.getAdapter().getUserRepository();
    }

    getFactRepository() {
        return this.getAdapter().getFactRepository();
    }
}

export default DatabaseManager;
