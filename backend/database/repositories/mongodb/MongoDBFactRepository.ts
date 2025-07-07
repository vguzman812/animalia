import type {
    IFact,
    IFactRepository,
    PaginationOptions,
    IPaginatedResult,
} from "../../../types/index.ts";
import { MongoFact, type IMongoFact } from "../../models/mongodb/factModel.ts";

export class MongoDBFactRepository implements IFactRepository {
    private convertToFact(mongoFact: IMongoFact): IFact {
        return {
            id: mongoFact._id.toString(),
            userId: mongoFact.user.toString(),
            animal: mongoFact.animal,
            source: mongoFact.source,
            text: mongoFact.text,
            media: mongoFact.media,
            wiki: mongoFact.wiki,
            likes: mongoFact.likes.map((like) => like.toString()),
            createdAt: mongoFact.createdAt,
            updatedAt: mongoFact.updatedAt,
        };
    }

    async findById(id: string): Promise<IFact | null> {
        try {
            const fact = await MongoFact.findById(id);
            return fact ? this.convertToFact(fact) : null;
        } catch (error) {
            console.error("Error finding fact by id:", error);
            return null;
        }
    }

    async findAll(
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IFact>> {
        try {
            const page = options.page ?? 1;
            const limit = options.limit ?? 10;
            const skip = (page - 1) * limit;

            const [facts, total] = await Promise.all([
                MongoFact.find()
                    .skip(skip)
                    .limit(limit)
                    .sort({ createdAt: -1 }),
                MongoFact.countDocuments(),
            ]);

            return {
                data: facts.map((fact) => this.convertToFact(fact)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error finding all facts:", error);
            throw error;
        }
    }

    async findByUserId(
        userId: string,
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IFact>> {
        try {
            const page = options.page ?? 1;
            const limit = options.limit ?? 10;
            const skip = (page - 1) * limit;

            const [facts, total] = await Promise.all([
                MongoFact.find({ user: userId })
                    .skip(skip)
                    .limit(limit)
                    .sort({ createdAt: -1 }),
                MongoFact.countDocuments({ user: userId }),
            ]);

            return {
                data: facts.map((fact) => this.convertToFact(fact)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error finding facts by user id:", error);
            throw error;
        }
    }

    async search(
        animal: string,
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IFact>> {
        try {
            const page = options.page ?? 1;
            const limit = options.limit ?? 10;
            const skip = (page - 1) * limit;

            // Create a regex pattern that removes all punctuation and special characters
            // This allows flexible matching like "l.i.o.n" to match "African Lion"
            const sanitized = animal.replace(/[^a-zA-Z0-9 ]/g, "");
            if (!sanitized.trim()) {
                // you could also throw here, but controller handles bad-request
                return { data: [], page, pages: 0, total: 0 };
            }
            const regex = new RegExp(sanitized, "i");

            const query = {
                animal: {
                    $regex: regex,
                    $options: "i",
                },
            };

            const [facts, total] = await Promise.all([
                MongoFact.find(query).skip(skip).limit(limit).sort({
                    animal: 1, // Alphabetical first (A-Z)
                    createdAt: -1, // Then by creation date descending
                }),
                MongoFact.countDocuments(query),
            ]);

            return {
                data: facts.map((fact) => this.convertToFact(fact)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error searching facts:", error);
            throw error;
        }
    }

    async create(
        factData: Omit<IFact, "id" | "createdAt" | "updatedAt">
    ): Promise<IFact> {
        try {
            const mongoFactData = {
                user: factData.userId,
                animal: factData.animal,
                source: factData.source,
                text: factData.text,
                media: factData.media,
                wiki: factData.wiki,
                likes: factData.likes,
            };

            const fact = new MongoFact(mongoFactData);
            const savedFact = await fact.save();
            return this.convertToFact(savedFact);
        } catch (error) {
            console.error("Error creating fact:", error);
            throw error;
        }
    }

    async update(
        id: string,
        factData: Partial<Omit<IFact, "id" | "createdAt" | "updatedAt">>
    ): Promise<IFact | null> {
        try {
            const fact = await MongoFact.findById(id);
            if (!fact) return null;

            // Map the update data to MongoDB structure
            const updateData: Record<string, unknown> = {};
            if (factData.userId) updateData.user = factData.userId;
            if (factData.animal) updateData.animal = factData.animal;
            if (factData.source) updateData.source = factData.source;
            if (factData.text) updateData.text = factData.text;
            if (factData.media !== undefined) updateData.media = factData.media;
            if (factData.wiki !== undefined) updateData.wiki = factData.wiki;
            if (factData.likes) updateData.likes = factData.likes;

            Object.assign(fact, updateData);
            const savedFact = await fact.save();
            return this.convertToFact(savedFact);
        } catch (error) {
            console.error("Error updating fact:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const result = await MongoFact.deleteOne({ _id: id });
            return result.deletedCount === 1;
        } catch (error) {
            console.error("Error deleting fact:", error);
            return false;
        }
    }

    async getTopLiked(limit: number): Promise<IFact[]> {
        try {
            const facts = await MongoFact.find({})
                .sort({ likes: -1 })
                .limit(limit);

            return facts.map((fact) => this.convertToFact(fact));
        } catch (error) {
            console.error("Error getting top liked facts:", error);
            throw error;
        }
    }

    async count(keyword?: string): Promise<number> {
        try {
            let query = {};
            if (keyword) {
                query = {
                    animal: {
                        $regex: keyword,
                        $options: "i",
                    },
                };
            }
            return await MongoFact.countDocuments(query);
        } catch (error) {
            console.error("Error counting facts:", error);
            return 0;
        }
    }
}
