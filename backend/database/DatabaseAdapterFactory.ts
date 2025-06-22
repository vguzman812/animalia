import type { IDatabaseAdapter, DatabaseConfig } from "../types/index.js";
import { MongoDBAdapter } from "./adapters/MongoDBAdapter.js";
import { PostgreSQLAdapter } from "./adapters/PostgreSQLAdapter.js";
import { SQLiteAdapter } from "./adapters/SQLiteAdapter.js";
import { MemoryAdapter } from "./adapters/MemoryAdapter.js";

export class DatabaseAdapterFactory {
    static createAdapter(config: DatabaseConfig): IDatabaseAdapter {
        switch (config.type) {
            case "mongodb":
                if (!config.mongodb) {
                    throw new Error("MongoDB configuration is required");
                }
                return new MongoDBAdapter(config.mongodb);

            case "postgresql":
                if (!config.postgresql) {
                    throw new Error("PostgreSQL configuration is required");
                }
                return new PostgreSQLAdapter(config.postgresql);

            case "sqlite":
                if (!config.sqlite) {
                    throw new Error("SQLite configuration is required");
                }
                return new SQLiteAdapter(config.sqlite);

            case "memory":
                return new MemoryAdapter();

            default:
                throw new Error(`Unsupported database type: ${config.type}`);
        }
    }
}
