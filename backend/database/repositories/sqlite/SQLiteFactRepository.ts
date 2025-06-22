import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import type { IFact, IFactRepository, PaginationOptions, IPaginatedResult } from "../../../../../../taskA/backend/types/index.ts";

interface SQLiteFact {
    id: string;
    user_id: string;
    animal: string;
    source: string;
    text: string;
    media?: string;
    wiki?: string;
    likes: string; // JSON string in SQLite
    created_at: string;
    updated_at: string;
}

export class SQLiteFactRepository implements IFactRepository {
    private readonly tableName = 'facts';

    constructor(private knex: Knex) {}

    private convertToFact(sqliteFact: SQLiteFact): IFact {
        let likes: string[] = [];
        try {
            likes = sqliteFact.likes ? JSON.parse(sqliteFact.likes) : [];
        } catch (error) {
            console.warn("Error parsing likes JSON:", error);
            likes = [];
        }

        return {
            id: sqliteFact.id,
            userId: sqliteFact.user_id,
            animal: sqliteFact.animal,
            source: sqliteFact.source,
            text: sqliteFact.text,
            media: sqliteFact.media,
            wiki: sqliteFact.wiki,
            likes,
            createdAt: new Date(sqliteFact.created_at),
            updatedAt: new Date(sqliteFact.updated_at),
        };
    }

    private convertFromFact(fact: Omit<IFact, 'id' | 'createdAt' | 'updatedAt'>): Partial<SQLiteFact> {
        return {
            user_id: fact.userId,
            animal: fact.animal,
            source: fact.source,
            text: fact.text,
            media: fact.media,
            wiki: fact.wiki,
            likes: JSON.stringify(fact.likes || []),
        };
    }

    async findById(id: string): Promise<IFact | null> {
        try {
            const fact = await this.knex(this.tableName).where({ id }).first();
            return fact ? this.convertToFact(fact) : null;
        } catch (error) {
            console.error("Error finding fact by id:", error);
            return null;
        }
    }

    async findAll(options: PaginationOptions & { keyword?: string } = {}): Promise<IPaginatedResult<IFact>> {
        try {
            const page = options.page || 1;
            const limit = options.limit || 10;
            const offset = (page - 1) * limit;

            let query = this.knex(this.tableName);
            let countQuery = this.knex(this.tableName);

            if (options.keyword) {
                const keywordFilter = `%${options.keyword}%`;
                query = query.where('animal', 'like', keywordFilter);
                countQuery = countQuery.where('animal', 'like', keywordFilter);
            }

            const [facts, countResult] = await Promise.all([
                query.select('*')
                    .orderBy('created_at', 'desc')
                    .limit(limit)
                    .offset(offset),
                countQuery.count('* as count').first()
            ]);

            const total = parseInt(countResult?.count as string || '0');

            return {
                data: facts.map(fact => this.convertToFact(fact)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error finding all facts:", error);
            throw error;
        }
    }

    async findByUserId(userId: string, options: PaginationOptions = {}): Promise<IPaginatedResult<IFact>> {
        try {
            const page = options.page || 1;
            const limit = options.limit || 10;
            const offset = (page - 1) * limit;

            const [facts, countResult] = await Promise.all([
                this.knex(this.tableName)
                    .where({ user_id: userId })
                    .orderBy('created_at', 'desc')
                    .limit(limit)
                    .offset(offset),
                this.knex(this.tableName)
                    .where({ user_id: userId })
                    .count('* as count')
                    .first()
            ]);

            const total = parseInt(countResult?.count as string || '0');

            return {
                data: facts.map(fact => this.convertToFact(fact)),
                page,
                pages: Math.ceil(total / limit),
                total,
            };
        } catch (error) {
            console.error("Error finding facts by user id:", error);
            throw error;
        }
    }

    async create(factData: Omit<IFact, 'id' | 'createdAt' | 'updatedAt'>): Promise<IFact> {
        try {
            const now = new Date().toISOString();
            const sqliteFactData: SQLiteFact = {
                ...this.convertFromFact(factData),
                id: uuidv4(),
                created_at: now,
                updated_at: now,
            } as SQLiteFact;

            await this.knex(this.tableName).insert(sqliteFactData);

            const fact = await this.knex(this.tableName).where({ id: sqliteFactData.id }).first();
            return this.convertToFact(fact);
        } catch (error) {
            console.error("Error creating fact:", error);
            throw error;
        }
    }

    async update(id: string, factData: Partial<Omit<IFact, 'id' | 'createdAt' | 'updatedAt'>>): Promise<IFact | null> {
        try {
            const updateData: Partial<SQLiteFact> = {};

            if (factData.userId) updateData.user_id = factData.userId;
            if (factData.animal) updateData.animal = factData.animal;
            if (factData.source) updateData.source = factData.source;
            if (factData.text) updateData.text = factData.text;
            if (factData.media !== undefined) updateData.media = factData.media;
            if (factData.wiki !== undefined) updateData.wiki = factData.wiki;
            if (factData.likes) updateData.likes = JSON.stringify(factData.likes);

            updateData.updated_at = new Date().toISOString();

            const updatedCount = await this.knex(this.tableName)
                .where({ id })
                .update(updateData);

            if (updatedCount === 0) return null;

            const fact = await this.knex(this.tableName).where({ id }).first();
            return fact ? this.convertToFact(fact) : null;
        } catch (error) {
            console.error("Error updating fact:", error);
            throw error;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const deletedCount = await this.knex(this.tableName).where({ id }).del();
            return deletedCount === 1;
        } catch (error) {
            console.error("Error deleting fact:", error);
            return false;
        }
    }

    async getTopLiked(limit: number): Promise<IFact[]> {
        try {
            const facts = await this.knex(this.tableName)
                .select('*')
                .orderBy(this.knex.raw('json_array_length(likes)'), 'desc')
                .limit(limit);

            return facts.map(fact => this.convertToFact(fact));
        } catch (error) {
            console.error("Error getting top liked facts:", error);
            throw error;
        }
    }

    async count(keyword?: string): Promise<number> {
        try {
            let query = this.knex(this.tableName);

            if (keyword) {
                query = query.where('animal', 'like', `%${keyword}%`);
            }

            const result = await query.count('* as count').first();
            return parseInt(result?.count as string || '0');
        } catch (error) {
            console.error("Error counting facts:", error);
            return 0;
        }
    }
}
