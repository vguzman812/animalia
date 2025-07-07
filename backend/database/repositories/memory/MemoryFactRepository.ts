import { v4 as uuidv4 } from "uuid";
import type {
    IFact,
    IFactRepository,
    PaginationOptions,
    IPaginatedResult,
} from "../../../types/index.ts";

export class MemoryFactRepository implements IFactRepository {
    private facts = new Map<string, IFact>();

    async findById(id: string): Promise<IFact | null> {
        const fact = this.facts.get(id) ?? null;
        return Promise.resolve(fact);
    }

    async findAll(
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IFact>> {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;
        const offset = (page - 1) * limit;

        const allFacts = Array.from(this.facts.values());

        // Sort by creation date (newest first)
        allFacts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        const paginatedFacts = allFacts.slice(offset, offset + limit);

        return Promise.resolve({
            data: paginatedFacts,
            page,
            pages: Math.ceil(allFacts.length / limit),
            total: allFacts.length,
        });
    }

    async search(
        animal: string,
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IFact>> {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;
        const offset = (page - 1) * limit;

        // Handle empty or whitespace-only search terms
        const trimmedAnimal = animal.trim();
        if (!trimmedAnimal) {
            return Promise.resolve({
                data: [],
                page,
                pages: 0,
                total: 0,
            });
        }

        // Normalize search term: remove diacritics and special characters
        const normalizedSearch = trimmedAnimal
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
            .replace(/[^a-zA-Z0-9\s]/g, "") // Remove punctuation completely (only keep letters, numbers, and spaces)
            .replace(/\s+/g, " ") // Normalize multiple spaces to single space
            .trim();

        if (!normalizedSearch) {
            return Promise.resolve({
                data: [],
                page,
                pages: 0,
                total: 0,
            });
        }

        // Split into words and create search pattern
        const searchWords = normalizedSearch
            .split(/\s+/)
            .filter((word) => word.length > 0);

        if (searchWords.length === 0) {
            return Promise.resolve({
                data: [],
                page,
                pages: 0,
                total: 0,
            });
        }

        let searchPattern: string;
        if (searchWords.length === 1) {
            // Single word - should match as substring
            searchPattern = searchWords[0].toLowerCase();
        } else {
            // Multi-word search - words must appear in sequence with spaces between them
            searchPattern = searchWords.join("\\s+");
        }

        // Filter facts by normalized animal name
        const filteredFacts = Array.from(this.facts.values()).filter((fact) => {
            const normalizedFactAnimal = fact.animal
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
                .replace(/[^a-zA-Z0-9\s]/g, "") // Remove punctuation completely
                .replace(/\s+/g, " ") // Normalize multiple spaces to single space
                .trim()
                .toLowerCase();

            if (searchWords.length === 1) {
                return normalizedFactAnimal.includes(searchPattern);
            } else {
                // For multi-word search, use regex pattern
                const regex = new RegExp(searchPattern, "i");
                return regex.test(normalizedFactAnimal);
            }
        });

        // Sort alphabetically by animal name (A-Z), then by creation date (newest first)
        filteredFacts.sort((a, b) => {
            const animalComparison = a.animal.localeCompare(b.animal);
            if (animalComparison !== 0) {
                return animalComparison;
            }
            return b.createdAt.getTime() - a.createdAt.getTime();
        });

        const data = filteredFacts.slice(offset, offset + limit);
        const total = filteredFacts.length;
        const pages = total ? Math.ceil(total / limit) : 0;

        return Promise.resolve({
            data,
            page,
            pages,
            total
        });
    }


    async findByUserId(
        userId: string,
        options: PaginationOptions = {}
    ): Promise<IPaginatedResult<IFact>> {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;
        const offset = (page - 1) * limit;

        const userFacts = Array.from(this.facts.values()).filter(
            (fact) => fact.userId === userId
        );

        // Sort by creation date (newest first)
        userFacts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        const paginatedFacts = userFacts.slice(offset, offset + limit);

        return Promise.resolve({
            data: paginatedFacts,
            page,
            pages: Math.ceil(userFacts.length / limit),
            total: userFacts.length,
        });
    }

    async create(
        factData: Omit<IFact, "id" | "createdAt" | "updatedAt">
    ): Promise<IFact> {
        const now = new Date();
        const fact: IFact = {
            id: uuidv4(),
            ...factData,
            likes: factData.likes || [],
            createdAt: now,
            updatedAt: now,
        };

        this.facts.set(fact.id, fact);
        return Promise.resolve(fact);
    }

    async update(
        id: string,
        factData: Partial<Omit<IFact, "id" | "createdAt" | "updatedAt">>
    ): Promise<IFact | null> {
        const fact = this.facts.get(id);
        if (!fact) return null;

        const updatedFact: IFact = {
            ...fact,
            ...factData,
            updatedAt: new Date(),
        };

        this.facts.set(id, updatedFact);
        return Promise.resolve(updatedFact);
    }

    async delete(id: string): Promise<boolean> {
        return Promise.resolve(this.facts.delete(id));
    }

    async getTopLiked(limit: number): Promise<IFact[]> {
        const allFacts = Array.from(this.facts.values());

        // Sort by number of likes (descending)
        allFacts.sort((a, b) => b.likes.length - a.likes.length);

        return Promise.resolve(allFacts.slice(0, limit));
    }

    async count(keyword?: string): Promise<number> {
        if (!keyword) {
            return this.facts.size;
        }

        let allFacts = Array.from(this.facts.values());
        allFacts = allFacts.filter((fact) =>
            fact.animal.toLowerCase().includes(keyword.toLowerCase())
        );

        return Promise.resolve(allFacts.length);
    }

    clear(): void {
        this.facts.clear();
    }
}
