import knex, { Knex } from "knex";
import type { IDatabaseAdapter, IUserRepository, IFactRepository } from "../../../../../taskA/backend/types/index.ts";
import { SQLiteUserRepository } from "../repositories/sqlite/SQLiteUserRepository.js";
import { SQLiteFactRepository } from "../repositories/sqlite/SQLiteFactRepository.js";

interface SQLiteConfig {
    path: string;
}

export class SQLiteAdapter implements IDatabaseAdapter {
    private knexInstance: Knex;
    private userRepository: SQLiteUserRepository;
    private factRepository: SQLiteFactRepository;
    private config: SQLiteConfig

    constructor(config: SQLiteConfig) {
        this.config = config;
        this.knexInstance = knex({
            client: 'sqlite3',
            connection: {
                filename: config.path,
            },
            useNullAsDefault: true,
            pool: {
                min: 1,
                max: 1
            }
        });

        this.userRepository = new SQLiteUserRepository(this.knexInstance);
        this.factRepository = new SQLiteFactRepository(this.knexInstance);
    }

    async connect(): Promise<void> {
        try {
            // Test the connection
            await this.knexInstance.raw('SELECT 1');
            console.log('Connected to SQLite');

            // Run migrations to create tables
            await this.createTables();
        } catch (error) {
            console.error('SQLite connection error:', error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        await this.knexInstance.destroy();
        console.log('SQLite connection closed');
    }

    private async createTables(): Promise<void> {
        // Create users table
        const usersExists = await this.knexInstance.schema.hasTable('users');
        if (!usersExists) {
            await this.knexInstance.schema.createTable('users', (table) => {
                table.string('id').primary().notNullable();
                table.string('name').notNullable();
                table.string('email').notNullable().unique();
                table.string('password').notNullable();
                table.boolean('is_admin').defaultTo(false);
                table.datetime('created_at').defaultTo(this.knexInstance.fn.now());
                table.datetime('updated_at').defaultTo(this.knexInstance.fn.now());
            });
            console.log('Created users table');
        }

        // Create facts table
        const factsExists = await this.knexInstance.schema.hasTable('facts');
        if (!factsExists) {
            await this.knexInstance.schema.createTable('facts', (table) => {
                table.string('id').primary().notNullable();
                table.string('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
                table.string('animal').notNullable();
                table.text('source').notNullable();
                table.text('text').notNullable();
                table.string('media');
                table.string('wiki');
                table.text('likes'); // Store as JSON string in SQLite
                table.datetime('created_at').defaultTo(this.knexInstance.fn.now());
                table.datetime('updated_at').defaultTo(this.knexInstance.fn.now());
            });
            console.log('Created facts table');
        }
    }

    getUserRepository(): IUserRepository {
        return this.userRepository;
    }

    getFactRepository(): IFactRepository {
        return this.factRepository;
    }
}
