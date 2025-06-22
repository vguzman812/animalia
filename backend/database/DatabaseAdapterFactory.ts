import type { IDatabaseAdapter, DatabaseConfig } from "../types/index.ts";
import { MongoDBAdapter } from "./adapters/MongoDBAdapter.ts";
import { PostgreSQLAdapter } from "./adapters/PostgreSQLAdapter.ts";
import { MemoryAdapter } from "./adapters/MemoryAdapter.ts";

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

            case "memory":
                return new MemoryAdapter();

            default:
                throw new Error("Unsupported database type");
        }
    }
}
