import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import type {
    IFact,
    IFactRepository,
    PaginationOptions,
    IPaginatedResult,
} from "../../../types/index.ts";

interface PostgreSQLFact {
    id: string;
    user_id: string;
    animal: string;
    source: string;
    text: string;
    media?: string | null;
    wiki?: string | null;
    likes: string[];
    created_at: Date;
    updated_at: Date;
}

export class PostgreSQLFactRepository implements IFactRepository {
    private readonly tableName = "facts";
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex;
    }

    private convertToFact(pgFact: PostgreSQLFact): IFact {
        return {
            id: pgFact.id,
            userId: pgFact.user_id,
            animal: pgFact.animal,
            source: pgFact.source,
            text: pgFact.text,
            media: pgFact.media ?? undefined,
            wiki: pgFact.wiki ?? undefined,
            likes: pgFact.likes ?? [],
            createdAt: pgFact.created_at,
            updatedAt: pgFact.updated_at,
        };
    }

    private convertFromFact(
        fact: Omit<IFact, "id" | "createdAt" | "updatedAt">
    ): Partial<PostgreSQLFact> {
        return {
            user_id: fact.userId,
            animal: fact.animal,
            source: fact.source,
            text: fact.text,
            media: fact.media ?? null,
            wiki: fact.wiki ?? null,
            likes: fact.likes,
        };
    }

    async findById(id: string): Promise<IFact | null> {
        try {
            const fact = await this.knex<PostgreSQLFact>(this.tableName)
                .where({ id })
                .first();
            return fact ? this.convertToFact(fact) : null;
        } catch (error) {
            console.error("Error finding fact by id:", error);
            return null;
        }
    }

    async findAll(
        options: PaginationOptions & { keyword?: string } = {}
    ): Promise<IPaginatedResult<IFact>> {
        try {
            const page = options.page ?? 1;
            const limit = options.limit ?? 10;
            const offset = (page - 1) * limit;

            let query = this.knex<PostgreSQLFact>(this.tableName);
            let countQuery = this.knex<PostgreSQLFact>(this.tableName);

            if (options.keyword) {
                query = query.whereRaw("animal ILIKE ?", [
                    `%${options.keyword}%`,
                ]);
                countQuery = countQuery.whereRaw("animal ILIKE ?", [
                    `%${options.keyword}%`,
                ]);
            }

            const [facts, countResult] = await Promise.all([
                query
                    .select("*")
                    .orderBy("created_at", "desc")
                    .limit(limit)
                    .offset(offset),
                countQuery.count<{ count: string }[]>("* as count").first(),
            ]);

            const total = countResult ? parseInt(countResult.count, 10) : 0;

            return {
                data: facts.map((f) => this.convertToFact(f)),
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
            const offset = (page - 1) * limit;

            const [facts, countResult] = await Promise.all([
                this.knex<PostgreSQLFact>(this.tableName)
                    .where({ user_id: userId })
                    .orderBy("created_at", "desc")
                    .limit(limit)
                    .offset(offset),
                this.knex<PostgreSQLFact>(this.tableName)
                    .where({ user_id: userId })
                    .count<{ count: string }[]>("* as count")
                    .first(),
            ]);

            const total = countResult ? parseInt(countResult.count, 10) : 0;

            return {
                data: facts.map((f) => this.convertToFact(f)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error finding facts by user id:", error);
            throw error;
        }
    }

    async create(
        factData: Omit<IFact, "id" | "createdAt" | "updatedAt">
    ): Promise<IFact> {
        try {
            const pgFactData = {
                ...this.convertFromFact(factData),
                id: uuidv4(),
                created_at: new Date(),
                updated_at: new Date(),
            } as Partial<PostgreSQLFact>;

            const [fact] = await this.knex<PostgreSQLFact>(this.tableName)
                .insert(pgFactData)
                .returning("*");

            return this.convertToFact(fact);
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
            const updateData: Partial<PostgreSQLFact> = {};

            if (factData.userId) updateData.user_id = factData.userId;
            if (factData.animal) updateData.animal = factData.animal;
            if (factData.source) updateData.source = factData.source;
            if (factData.text) updateData.text = factData.text;
            if (factData.media !== undefined) updateData.media = factData.media;
            if (factData.wiki !== undefined) updateData.wiki = factData.wiki;
            if (factData.likes) updateData.likes = factData.likes;

            updateData.updated_at = new Date();

            const [fact] = await this.knex<PostgreSQLFact>(this.tableName)
                .where({ id })
                .update(updateData)
                .returning("*");

            return fact ? this.convertToFact(fact) : null;
        } catch (error) {
            console.error("Error updating fact:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedCount = await this.knex<PostgreSQLFact>(this.tableName)
                .where({ id })
                .del();
            return deletedCount === 1;
        } catch (error) {
            console.error("Error deleting fact:", error);
            return false;
        }
    }

    async getTopLiked(limit: number): Promise<IFact[]> {
        try {
            const facts = await this.knex<PostgreSQLFact>(this.tableName)
                .select("*")
                .orderByRaw("array_length(likes, 1) DESC")
                .limit(limit);

            return facts.map((f) => this.convertToFact(f));
        } catch (error) {
            console.error("Error getting top liked facts:", error);
            throw error;
        }
    }

    async count(keyword?: string): Promise<number> {
        try {
            let query = this.knex<PostgreSQLFact>(this.tableName);

            if (keyword) {
                query = query.whereRaw("animal ILIKE ?", [`%${keyword}%`]);
            }

            const result = await query
                .count<{ count: string }[]>("* as count")
                .first();
            return result ? parseInt(result.count, 10) : 0;
        } catch (error) {
            console.error("Error counting facts:", error);
            return 0;
        }
    }
}
