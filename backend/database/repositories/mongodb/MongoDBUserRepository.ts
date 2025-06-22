import type { IUser, IUserRepository, PaginationOptions, IPaginatedResult } from "../../../../../../taskA/backend/types/index.ts";
import { MongoUser, type IMongoUser } from "../../../../../../taskA/backend/database/models/mongodb/UserModel.ts";

export class MongoDBUserRepository implements IUserRepository {

    private convertToUser(mongoUser: IMongoUser): IUser {
        return {
            id: mongoUser._id.toString(),
            name: mongoUser.name,
            email: mongoUser.email,
            password: mongoUser.password,
            isAdmin: mongoUser.isAdmin,
            createdAt: mongoUser.createdAt,
            updatedAt: mongoUser.updatedAt,
        };
    }

    async findById(id: string): Promise<IUser | null> {
        try {
            const user = await MongoUser.findById(id);
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error finding user by id:", error);
            return null;
        }
    }

    async findByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await MongoUser.findOne({ email });
            return user ? this.convertToUser(user) : null;
        } catch (error) {
            console.error("Error finding user by email:", error);
            return null;
        }
    }

    async create(userData: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser> {
        try {
            const user = new MongoUser(userData);
            const savedUser = await user.save();
            return this.convertToUser(savedUser);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    async update(id: string, userData: Partial<Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>>): Promise<IUser | null> {
        try {
            const user = await MongoUser.findById(id);
            if (!user) return null;

            Object.assign(user, userData);
            const savedUser = await user.save();
            return this.convertToUser(savedUser);
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const result = await MongoUser.deleteOne({ _id: id });
            return result.deletedCount === 1;
        } catch (error) {
            console.error("Error deleting user:", error);
            return false;
        }
    }

    async findAll(options: PaginationOptions = {}): Promise<IPaginatedResult<IUser>> {
        try {
            const page = options.page || 1;
            const limit = options.limit || 10;
            const skip = (page - 1) * limit;

            const [users, total] = await Promise.all([
                MongoUser.find().skip(skip).limit(limit),
                MongoUser.countDocuments()
            ]);

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
            return await MongoUser.countDocuments();
        } catch (error) {
            console.error("Error counting users:", error);
            return 0;
        }
    }
}
