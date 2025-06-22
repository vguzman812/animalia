import type { Knex } from "knex";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import type { IUser, IUserRepository, PaginationOptions, IPaginatedResult } from "../../../../../../taskA/backend/types/index.ts";

interface SQLiteUser {
    id: string;
    name: string;
    email: string;
    password: string;
    is_admin: number; // SQLite uses 0/1 for boolean
    created_at: string;
    updated_at: string;
}

export class SQLiteUserRepository implements IUserRepository {
    private readonly tableName = 'users';

    constructor(private knex: Knex) {}

    private convertToUser(sqliteUser: SQLiteUser): IUser {
        return {
            id: sqliteUser.id,
            name: sqliteUser.name,
            email: sqliteUser.email,
            password: sqliteUser.password,
            isAdmin: Boolean(sqliteUser.is_admin),
            createdAt: new Date(sqliteUser.created_at),
            updatedAt: new Date(sqliteUser.updated_at),
        };
    }

    private convertFromUser(user: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Partial<SQLiteUser> {
        return {
            name: user.name,
            email: user.email,
            password: user.password,
            is_admin: user.isAdmin ? 1 : 0,
        };
    }

    async findById(id: string): Promise<IUser | null> {
        try {
            const user = await this.knex(this.tableName).where({ id }).first();
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error finding user by id:", error);
            return null;
        }
    }

    async findByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await this.knex(this.tableName).where({ email }).first();
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error finding user by email:", error);
            return null;
        }
    }

    async create(userData: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser> {
        try {
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(userData.password, salt);

            const now = new Date().toISOString();
            const sqliteUserData: SQLiteUser = {
                ...this.convertFromUser(userData),
                id: uuidv4(),
                password: hashedPassword,
                created_at: now,
                updated_at: now,
            } as SQLiteUser;

            await this.knex(this.tableName).insert(sqliteUserData);

            const user = await this.knex(this.tableName).where({ id: sqliteUserData.id }).first();
            return this.convertToUser(user);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    async update(id: string, userData: Partial<Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>>): Promise<IUser | null> {
        try {
            const updateData: Partial<SQLiteUser> = {};

            if (userData.name) updateData.name = userData.name;
            if (userData.email) updateData.email = userData.email;
            if (userData.isAdmin !== undefined) updateData.is_admin = userData.isAdmin ? 1 : 0;

            if (userData.password) {
                const salt = await bcrypt.genSalt(10);
                updateData.password = await bcrypt.hash(userData.password, salt);
            }

            updateData.updated_at = new Date().toISOString();

            const updatedCount = await this.knex(this.tableName)
                .where({ id })
                .update(updateData);

            if (updatedCount === 0) return null;

            const user = await this.knex(this.tableName).where({ id }).first();
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedCount = await this.knex(this.tableName).where({ id }).del();
            return deletedCount === 1;
        } catch (error) {
            console.error("Error deleting user:", error);
            return false;
        }
    }

    async findAll(options: PaginationOptions = {}): Promise<IPaginatedResult<IUser>> {
        try {
            const page = options.page || 1;
            const limit = options.limit || 10;
            const offset = (page - 1) * limit;

            const [users, countResult] = await Promise.all([
                this.knex(this.tableName)
                    .select('*')
                    .limit(limit)
                    .offset(offset),
                this.knex(this.tableName).count('* as count').first()
            ]);

            const total = parseInt(countResult?.count as string || '0');

            return {
                data: users.map(user => this.convertToUser(user)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error finding all users:", error);
            throw error;
        }
    }

    async count(): Promise<number> {
        try {
            const result = await this.knex(this.tableName).count('* as count').first();
            return parseInt(result?.count as string || '0');
        } catch (error) {
            console.error("Error counting users:", error);
            return 0;
        }
    }
}
