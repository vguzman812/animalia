import knex, { type Knex } from "knex";
import type {
    IDatabaseAdapter,
    IUserRepository,
    IFactRepository,
} from "../../types/index.ts";
import { PostgreSQLUserRepository } from "../repositories/postgresql/PostgreSQLUserRepository.js";
import { PostgreSQLFactRepository } from "../repositories/postgresql/PostgreSQLFactRepository.js";

interface PostgreSQLConfig {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
}

export class PostgreSQLAdapter implements IDatabaseAdapter {
    private knexInstance: Knex;
    private userRepository: PostgreSQLUserRepository;
    private factRepository: PostgreSQLFactRepository;
    private config: PostgreSQLConfig;

    constructor(config: PostgreSQLConfig) {
        this.config = config;
        this.knexInstance = knex({
            client: "pg",
            connection: {
                host: config.host,
                port: config.port,
                database: config.database,
                user: config.username,
                password: config.password,
            },
            pool: {
                min: 2,
                max: 10,
            },
        });

        this.userRepository = new PostgreSQLUserRepository(this.knexInstance);
        this.factRepository = new PostgreSQLFactRepository(this.knexInstance);
    }

    async connect(): Promise<void> {
        try {
            // Test the connection
            await this.knexInstance.raw("SELECT 1");
            console.log("Connected to PostgreSQL");

            // Run migrations to create tables
            await this.createTables();
        } catch (error) {
            console.error("PostgreSQL connection error:", error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        await this.knexInstance.destroy();
        console.log("PostgreSQL connection closed");
    }

    private async createTables(): Promise<void> {
        // Create users table
        const usersExists = await this.knexInstance.schema.hasTable("users");
        if (!usersExists) {
            await this.knexInstance.schema.createTable("users", (table) => {
                table
                    .uuid("id")
                    .primary()
                    .defaultTo(this.knexInstance.raw("gen_random_uuid()"));
                table.string("name").notNullable();
                table.string("email").notNullable().unique();
                table.string("password").notNullable();
                table.boolean("is_admin").defaultTo(false);
                table.timestamps(true, true);
            });
            console.log("Created users table");
        }

        // Create facts table
        const factsExists = await this.knexInstance.schema.hasTable("facts");
        if (!factsExists) {
            await this.knexInstance.schema.createTable("facts", (table) => {
                table
                    .uuid("id")
                    .primary()
                    .defaultTo(this.knexInstance.raw("gen_random_uuid()"));
                table
                    .uuid("user_id")
                    .notNullable()
                    .references("id")
                    .inTable("users")
                    .onDelete("CASCADE");
                table.string("animal").notNullable();
                table.text("source").notNullable();
                table.text("text").notNullable();
                table.text("media");
                table.text("wiki");
                table.specificType("likes", "uuid[]").defaultTo("{}");
                table.timestamps(true, true);
            });
            console.log("Created facts table");
        }
    }

    getUserRepository(): IUserRepository {
        return this.userRepository;
    }

    getFactRepository(): IFactRepository {
        return this.factRepository;
    }
}
