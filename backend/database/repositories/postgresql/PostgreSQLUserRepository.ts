import type { Knex } from "knex";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import type {
    IUser,
    IUserRepository,
    PaginationOptions,
    IPaginatedResult,
} from "../../../types/index.ts";

interface PostgreSQLUser {
    id: string;
    name: string;
    email: string;
    password: string;
    is_admin: boolean;
    created_at: Date;
    updated_at: Date;
}

export class PostgreSQLUserRepository implements IUserRepository {
    private readonly tableName = "users";
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex;
    }

    private convertToUser(pgUser: PostgreSQLUser): IUser {
        return {
            id: pgUser.id,
            name: pgUser.name,
            email: pgUser.email,
            password: pgUser.password,
            isAdmin: pgUser.is_admin,
            createdAt: pgUser.created_at,
            updatedAt: pgUser.updated_at,
        };
    }

    private convertFromUser(
        user: Omit<IUser, "id" | "createdAt" | "updatedAt">
    ): Partial<PostgreSQLUser> {
        return {
            name: user.name,
            email: user.email,
            password: user.password,
            is_admin: user.isAdmin,
        };
    }

    async findById(id: string): Promise<IUser | null> {
        try {
            const user = await this.knex<PostgreSQLUser>(this.tableName)
                .where({ id })
                .first();
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error finding user by id:", error);
            return null;
        }
    }

    async findByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await this.knex<PostgreSQLUser>(this.tableName)
                .where({ email })
                .first();
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error finding user by email:", error);
            return null;
        }
    }

    async create(
        userData: Omit<IUser, "id" | "createdAt" | "updatedAt">
    ): Promise<IUser> {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(userData.password, salt);

            const pgUserData: Partial<PostgreSQLUser> = {
                ...this.convertFromUser(userData),
                id: uuidv4(),
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date(),
            };

            const [user] = await this.knex<PostgreSQLUser>(
                this.tableName
            ).insert(pgUserData, "*");

            return this.convertToUser(user);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    async update(
        id: string,
        userData: Partial<Omit<IUser, "id" | "createdAt" | "updatedAt">>
    ): Promise<IUser | null> {
        try {
            const updateData: Partial<PostgreSQLUser> = {};

            if (userData.name) updateData.name = userData.name;
            if (userData.email) updateData.email = userData.email;
            if (userData.isAdmin !== undefined)
                updateData.is_admin = userData.isAdmin;

            if (userData.password) {
                const salt = await bcrypt.genSalt(10);
                updateData.password = await bcrypt.hash(
                    userData.password,
                    salt
                );
            }

            updateData.updated_at = new Date();

            const [user] = await this.knex<PostgreSQLUser>(this.tableName)
                .where({ id })
                .update(updateData, "*");

            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedCount = await this.knex<PostgreSQLUser>(this.tableName)
                .where({ id })
                .del();
            return deletedCount === 1;
        } catch (error) {
            console.error("Error deleting user:", error);
            return false;
        }
    }

    async findAll(
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IUser>> {
        try {
            const page = options.page ?? 1;
            const limit = options.limit ?? 10;
            const offset = (page - 1) * limit;

            const [users, countResult] = await Promise.all([
                this.knex<PostgreSQLUser>(this.tableName)
                    .select("*")
                    .orderBy("created_at", "desc")
                    .limit(limit)
                    .offset(offset),
                this.knex<PostgreSQLUser>(this.tableName)
                    .count<{ count: string }[]>("* as count")
                    .first(),
            ]);

            const total = countResult ? parseInt(countResult.count, 10) : 0;

            return {
                data: users.map((u) => this.convertToUser(u)),
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
            const result = await this.knex<PostgreSQLUser>(this.tableName)
                .count<{ count: string }[]>("* as count")
                .first();
            return result ? parseInt(result.count, 10) : 0;
        } catch (error) {
            console.error("Error counting users:", error);
            return 0;
        }
    }
}
