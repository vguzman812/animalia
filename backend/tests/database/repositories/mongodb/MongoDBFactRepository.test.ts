import {
    describe,
    it,
    expect,
    beforeAll,
    afterAll,
    beforeEach,
    afterEach,
} from "vitest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoDBFactRepository } from "../../../../database/repositories/mongodb/MongoDBFactRepository.ts";
import { MongoFact } from "../../../../database/models/mongodb/factModel.ts";
import type { IFact } from "../../../../types/index.ts";

describe("MongoDBFactRepository Search & findAll", () => {
    let mongoServer: MongoMemoryServer;
    let repository: MongoDBFactRepository;
    let sampleFacts: IFact[];
    let testUserId: string;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();

        await mongoose.connect(mongoUri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        repository = new MongoDBFactRepository();
        // clear collection
        await MongoFact.deleteMany({});

        // Generate a valid ObjectId for testing

        testUserId = new mongoose.Types.ObjectId().toString();

        sampleFacts = [
            {
                id: "",
                animal: "African Lion",
                text: "Lions are powerful predators",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date("2023-01-01"),
                updatedAt: new Date("2023-01-01"),
            },
            {
                id: "",
                animal: "Mountain Lion",
                text: "Mountain lions are solitary cats",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date("2023-01-02"),
                updatedAt: new Date("2023-01-02"),
            },
            {
                id: "",
                animal: "Elephant",
                text: "Elephants have excellent memory",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date("2023-01-03"),
                updatedAt: new Date("2023-01-03"),
            },
            {
                id: "",
                animal: "African Lion",
                text: "Another lion fact",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date("2023-01-04"),
                updatedAt: new Date("2023-01-04"),
            },
        ];

        for (const fact of sampleFacts) {
            const created = await repository.create({
                animal: fact.animal,
                text: fact.text,
                source: fact.source,
                userId: fact.userId,
                likes: fact.likes,
                media: fact.media,
                wiki: fact.wiki,
            });
            // override timestamps so sorting tests are deterministic
            await MongoFact.findByIdAndUpdate(
                created.id,
                { createdAt: fact.createdAt, updatedAt: fact.updatedAt },
                { new: true, timestamps: false }
            );
        }
    });

    describe("search method", () => {
        describe("matching", () => {
            it("should find facts by exact animal name match", async () => {
                const res = await repository.search("Elephant");
                expect(res.data).toHaveLength(1);
                expect(res.data[0].animal).toBe("Elephant");
            });

            it("should find facts by case-insensitive search", async () => {
                const res = await repository.search("ELEPHANT");
                expect(res.data).toHaveLength(1);
                expect(res.data[0].animal).toBe("Elephant");
            });

            it("should find facts by partial substring match", async () => {
                const res = await repository.search("li");
                expect(res.data).toHaveLength(3);
                // assert that _every_ animal contains "li" (case-insensitive)
                expect(res.data.every((f) => /li/i.test(f.animal))).toBe(true);
            });

            it("should return empty results for non-matching search", async () => {
                const res = await repository.search("tiger");
                expect(res.data).toHaveLength(0);
                expect(res.total).toBe(0);
                expect(res.pages).toBe(0);
            });

            it("should normalize/remove punctuation and special characters", async () => {
                const variants = [
                    "l.i.o.n",
                    "l-ion",
                    "l,io,n",
                    "l!@#$%^&*()_+=ion",
                    "{}[]|;lion",
                    "lion:<>/?~`",
                ];
                const clean = await repository.search("lion");

                for (const term of variants) {
                    const dusty = await repository.search(term);

                    // same number of hits
                    expect(dusty.data).toHaveLength(clean.data.length);

                    // same records, irrespective of order
                    expect(dusty.data).toEqual(
                        expect.arrayContaining(clean.data)
                    );
                }
            });
            it("should handle diacritics/accents (e.g. 'éléphant' → 'elephant')", async () => {
                const cases = [
                    { variant: "éléphánt", normalized: "elephant" },
                    { variant: "liön", normalized: "lion" },
                    { variant: "àfrican", normalized: "african" },
                ];

                for (const { variant, normalized } of cases) {
                    const [cleanRes, dirtyRes] = await Promise.all([
                        repository.search(normalized),
                        repository.search(variant),
                    ]);

                    expect(dirtyRes.data).toHaveLength(cleanRes.data.length);

                    // same set of records (order‐insensitive)
                    expect(dirtyRes.data).toEqual(
                        expect.arrayContaining(cleanRes.data)
                    );
                }
            });

            it("should trim whitespace", async () => {
                const res = await repository.search("  lion  ");
                expect(res.data).toHaveLength(3);
            });

            it("should allow for spaces between words", async () => {
                const res = await repository.search("mountain lion");
                expect(res.data).toHaveLength(1);
                expect(res.data[0].animal).toBe("Mountain Lion");
            });

            it("should trim whitespace but allow for spaces between words", async () => {
                const result = await repository.search("  mountain lion  ");

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should not match concatenated animal names without spaces", async () => {
                const result = await repository.search("mountainlion");

                expect(result.data).toHaveLength(0);
            });

            it("should handle empty animal parameter", async () => {
                const result = await repository.search("");

                expect(result.data).toHaveLength(0);
            });

            it("should handle whitespace-only terms", async () => {
                const result = await repository.search("   ");

                expect(result.data).toHaveLength(0);
            });

            it("should handle very long search terms", async () => {
                const longTerm = "lion".repeat(100);
                const res = await repository.search(longTerm);
                expect(res.data).toHaveLength(0);
            });
        });

        describe("sorting", () => {
            it("should sort results alphabetically A -> Z by name", async () => {
                const result = await repository.search("lion");

                expect(result.data).toHaveLength(3);
                expect(result.data[0].animal).toBe("African Lion");
                expect(result.data[1].animal).toBe("African Lion");
                expect(result.data[2].animal).toBe("Mountain Lion");
            });

            it("should sort by createdAt desc for same-named animals", async () => {
                const result = await repository.search("lion");

                expect(result.data).toHaveLength(3);
                expect(result.data[0].animal).toBe("African Lion");
                expect(result.data[1].animal).toBe("African Lion");
                expect(result.data[2].animal).toBe("Mountain Lion");

                // Verify creation date sorting for same animal names (newer first)
                expect(result.data[0].createdAt.getTime()).toBeGreaterThan(
                    result.data[1].createdAt.getTime()
                );
            });
        });

        describe("pagination", () => {
            it("should limit number of results per page", async () => {
                const res = await repository.search("lion", {
                    limit: 2,
                });
                expect(res.data).toHaveLength(2);
                expect(res.pages).toBe(2);
                expect(res.total).toBe(3);
            });

            it("should handle pagination options", async () => {
                const res = await repository.search("lion", {
                    page: 2,
                    limit: 2,
                });
                expect(res.data).toHaveLength(1);
                expect(res.page).toBe(2);
                expect(res.pages).toBe(2);
            });

            it("should sort results while paginating", async () => {
                const result = await repository.search("lion", {
                    page: 2,
                    limit: 2,
                });

                expect(result.data).toHaveLength(1);
                expect(result.page).toBe(2);
                expect(result.pages).toBe(2);
                expect(result.total).toBe(3);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should return an empty array if page is beyond range", async () => {
                const res = await repository.search("lion", {
                    page: 10,
                    limit: 1,
                });
                expect(res.data).toHaveLength(0);
                expect(res.page).toBe(10);
            });
        });
    });

    describe("findAll method", () => {
        it("should return all facts", async () => {
            const result = await repository.findAll({});

            expect(result.data).toHaveLength(4);
            expect(result.total).toBe(4);
        });

        it("should work on an empty repository", async () => {
            await MongoFact.deleteMany({});
            const result = await repository.findAll({});
            expect(result.total).toBe(0);
            expect(result.pages).toBe(0);
            expect(result.data).toEqual([]);
        });

        it("should sort results by creation date desc", async () => {
            const result = await repository.findAll({});

            expect(result.data).toHaveLength(4);
            expect(result.data[0].createdAt.getTime()).toBeGreaterThan(
                result.data[1].createdAt.getTime()
            );
            expect(result.data[1].createdAt.getTime()).toBeGreaterThan(
                result.data[2].createdAt.getTime()
            );
            expect(result.data[2].createdAt.getTime()).toBeGreaterThan(
                result.data[3].createdAt.getTime()
            );
        });

        it("should sort results while paginating", async () => {
            const result = await repository.findAll({ page: 2, limit: 2 });

            expect(result.data).toHaveLength(2);
            expect(result.page).toBe(2);
            // Should be the two oldest facts (by creation date)
            expect(result.data[0].createdAt.getTime()).toBeGreaterThan(
                result.data[1].createdAt.getTime()
            );
        });

        it("should limit number of results", async () => {
            const result = await repository.findAll({ limit: 2 });

            expect(result.data).toHaveLength(2);
        });

        it("should handle pagination options", async () => {
            const result = await repository.findAll({ page: 2, limit: 2 });

            expect(result.data).toHaveLength(2);
            expect(result.page).toBe(2);
            expect(result.pages).toBe(2);
            expect(result.total).toBe(4);
        });

        it("should ignore keyword", async () => {
            // @ts-ignore
            const result = await repository.findAll({ keyword: "lion" });

            expect(result.data).toHaveLength(4);
            expect(result.total).toBe(4);
        });

        it("should ignore keyword while paginating and sorting properly", async () => {
            const page1 = await repository.findAll({
                limit: 2,
                // @ts-ignore
                keyword: "lion",
            });
            expect(page1.total).toBe(4);
            expect(page1.pages).toBe(2);
            expect(page1.data).toHaveLength(2);
            // page1 should be the two newest (by creation date)
            expect(page1.data[0].createdAt.getTime()).toBeGreaterThan(
                page1.data[1].createdAt.getTime()
            );

            const page2 = await repository.findAll({
                page: 2,
                limit: 2,
                // @ts-ignore
                keyword: "elephant",
            });
            expect(page2.page).toBe(2);
            // Page 2 should be the next two oldest
            expect(page2.data[0].createdAt.getTime()).toBeGreaterThan(
                page2.data[1].createdAt.getTime()
            );
        });

    });
});
