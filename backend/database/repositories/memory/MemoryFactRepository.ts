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
        options: PaginationOptions & { keyword?: string } = {}
    ): Promise<IPaginatedResult<IFact>> {
        const page = options.page ?? 1;
        const limit = options.limit ?? 10;
        const offset = (page - 1) * limit;

        let allFacts = Array.from(this.facts.values());

        // Apply keyword filter if provided
        if (options.keyword) {
            allFacts = allFacts.filter((fact) =>
                fact.animal
                    .toLowerCase()
                    .includes(options.keyword!.toLowerCase())
            );
        }

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
