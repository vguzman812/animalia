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

            // Handle empty or whitespace-only search terms
            const trimmedAnimal = animal.trim();
            if (!trimmedAnimal) {
                return {
                    data: [],
                    page,
                    pages: 0,
                    total: 0,
                };
            }

            // Normalize search term: remove diacritcs and special characters
            const normalizedSearch = trimmedAnimal
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
                .replace(/[^a-zA-Z0-9\s]/g, "") // Remove punctuation completely (only keep letters, numbers, and spaces)
                .replace(/\s+/g, " ") // Normalize multiple spaces to single space
                .trim();

            if (!normalizedSearch) {
                return {
                    data: [],
                    page,
                    pages: 0,
                    total: 0,
                };
            }

            // Split into words and handle differently based on word count
            const searchWords = normalizedSearch
                .split(/\s+/)
                .filter((word) => word.length > 0);

            if (searchWords.length === 0) {
                return {
                    data: [],
                    page,
                    pages: 0,
                    total: 0,
                };
            }

            let regexPattern: string;
            if (searchWords.length === 1) {
                // Single word - should match as substring but respect word boundaries
                const word = searchWords[0];
                regexPattern = word;
            } else {
                // Multi-word search - words must appear in sequence with actual spaces between them
                regexPattern = searchWords.join("\\s+");
            }

            // Create the MongoDB query
            const query = {
                animal: {
                    $regex: regexPattern,
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
