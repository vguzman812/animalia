import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import type { IUser, IUserRepository, PaginationOptions, IPaginatedResult } from "../../../types/index.ts";

export class MemoryUserRepository implements IUserRepository {
    private users: Map<string, IUser> = new Map();

    async findById(id: string): Promise<IUser | null> {
        return this.users.get(id) || null;
    }

    async findByEmail(email: string): Promise<IUser | null> {
        for (const user of this.users.values()) {
            if (user.email === email) {
                return user;
            }
        }
        return null;
    }

    async create(userData: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser> {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        const now = new Date();
        const user: IUser = {
            id: uuidv4(),
            ...userData,
            password: hashedPassword,
            createdAt: now,
            updatedAt: now,
        };

        this.users.set(user.id, user);
        return user;
    }

    async update(id: string, userData: Partial<Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>>): Promise<IUser | null> {
        const user = this.users.get(id);
        if (!user) return null;

        const updatedData: Partial<IUser> = { ...userData };

        if (userData.password) {
            const salt = await bcrypt.genSalt(10);
            updatedData.password = await bcrypt.hash(userData.password, salt);
        }

        const updatedUser: IUser = {
            ...user,
            ...updatedData,
            updatedAt: new Date(),
        };

        this.users.set(id, updatedUser);
        return updatedUser;
    }

    async delete(id: string): Promise<boolean> {
        return this.users.delete(id);
    }

    async findAll(options: PaginationOptions = {}): Promise<IPaginatedResult<IUser>> {
        const page = options.page || 1;
        const limit = options.limit || 10;
        const offset = (page - 1) * limit;

        const allUsers = Array.from(this.users.values());
        const paginatedUsers = allUsers.slice(offset, offset + limit);

        return {
            data: paginatedUsers,
            page,
            pages: Math.ceil(allUsers.length / limit),
            total: allUsers.length,
        };
    }

    async count(): Promise<number> {
        return this.users.size;
    }

    clear(): void {
        this.users.clear();
    }
}
