import {
    describe,
    it,
    expect,
    beforeAll,
    afterAll,
    beforeEach,
    afterEach,
    vi,
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
        mongoServer = await MongoMemoryServer.create({
            binary: {
                version: "4.4.18",
            },
        });
        const mongoUri = mongoServer.getUri();

        await mongoose.connect(mongoUri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        vi.useFakeTimers();

        repository = new MongoDBFactRepository();
        await MongoFact.deleteMany({});

        testUserId = new mongoose.Types.ObjectId().toString();

        sampleFacts = [
            {
                id: "",
                animal: "African Lion",
                text: "Lions are powerful predators",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "",
                animal: "Mountain Lion",
                text: "Mountain lions are solitary cats",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "",
                animal: "Elephant",
                text: "Elephants have excellent memory",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "",
                animal: "African Lion",
                text: "Another lion fact",
                source: "test",
                userId: testUserId,
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
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
            // Advance time by 100ms to ensure different timestamps
            vi.advanceTimersByTime(100);
        }
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe("search method", () => {
        describe("matching", () => {
            it("should find facts by exact animal name match", async () => {
                /** Test that search finds facts when animal name matches exactly */
                const res = await repository.search({ animal: "Elephant" });
                expect(res.data).toHaveLength(1);
                expect(res.data[0].animal).toBe("Elephant");
            });

            it("should find facts by case-insensitive search", async () => {
                /** Test that search ignores case differences in animal names */
                const res = await repository.search({ animal: "ELEPHANT" });
                expect(res.data).toHaveLength(1);
                expect(res.data[0].animal).toBe("Elephant");
            });

            it("should find facts by partial substring match", async () => {
                /** Test that search finds facts by partial substring matching within animal name */
                const res = await repository.search({ animal: "li" });
                expect(res.data).toHaveLength(3);
                expect(res.data.every((f) => /li/i.test(f.animal))).toBe(true);
            });

            it("should return empty results for non-matching search", async () => {
                /** Test that search returns no results when no documents match the query*/
                const res = await repository.search({ animal: "tiger" });
                expect(res.data).toHaveLength(0);
                expect(res.total).toBe(0);
                expect(res.pages).toBe(0);
            });

            it("should normalize/remove punctuation and special characters", async () => {
                /** Test that punctuation and special characters are removed/ignored. */
                const variants = [
                    "l.i.o.n",
                    "l-ion",
                    "l,io,n",
                    "l!@#$%^&*()_+=ion",
                    "{}[]|;lion",
                    "lion:<>/?~`",
                ];
                const clean = await repository.search({ animal: "lion" });

                for (const term of variants) {
                    const dusty = await repository.search({ animal: term });

                    // same number of hits
                    expect(dusty.data).toHaveLength(clean.data.length);

                    // same records, irrespective of order
                    expect(dusty.data).toEqual(
                        expect.arrayContaining(clean.data)
                    );
                }
            });
            it("should handle diacritics/accents (e.g. 'éléphant' → 'elephant')", async () => {
                /** Test that search normalizes accented characters to their base forms */
                const cases = [
                    { variant: "éléphánt", normalized: "elephant" },
                    { variant: "liön", normalized: "lion" },
                    { variant: "àfrican", normalized: "african" },
                ];

                for (const { variant, normalized } of cases) {
                    const [cleanRes, dirtyRes] = await Promise.all([
                        repository.search({ animal: normalized }),
                        repository.search({ animal: variant }),
                    ]);

                    expect(dirtyRes.data).toHaveLength(cleanRes.data.length);

                    // same set of records (order‐insensitive)
                    expect(dirtyRes.data).toEqual(
                        expect.arrayContaining(cleanRes.data)
                    );
                }
            });

            it("should trim whitespace", async () => {
                /** Test that search ignores leading and trailing whitespace */
                const res = await repository.search({ animal: "  lion  " });
                expect(res.data).toHaveLength(3);
            });

            it("should allow for spaces between words", async () => {
                /** Test that search handles multi-word animal names with spaces */
                const res = await repository.search({
                    animal: "mountain lion",
                });
                expect(res.data).toHaveLength(1);
                expect(res.data[0].animal).toBe("Mountain Lion");
            });

            it("should allow for multiple spaces between words", async () => {
                /** Test that search normalizes multiple consecutive spaces to single spaces */
                const result = await repository.search({
                    animal: "mountain    lion",
                });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should trim whitespace but allow for spaces between words", async () => {
                /** Test that search trims external whitespace while preserving internal spaces */
                const result = await repository.search({
                    animal: "  mountain lion  ",
                });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should not match concatenated animal names without spaces", async () => {
                /** Test that search requires spacing between words in multi-word names */
                const result = await repository.search({
                    animal: "mountainlion",
                });

                expect(result.data).toHaveLength(0);
            });

            it("should handle empty animal parameter", async () => {
                /** Test that search returns empty results for empty search strings */
                const result = await repository.search({ animal: "" });

                expect(result.data).toHaveLength(0);
            });

            it("should handle whitespace-only terms", async () => {
                // Test that whitespace-only terms are invalid
                const result = await repository.search({ animal: "   " });

                expect(result.data).toHaveLength(0);
            });

            it("should handle very long search terms", async () => {
                // test that partial substrings of a relevant animal ('lion') do not return false-positives in extremely long search terms
                const longTerm = "lion".repeat(100);
                const res = await repository.search({ animal: longTerm });
                expect(res.data).toHaveLength(0);
            });
        });

        describe("sorting", () => {
            it("should sort results alphabetically A -> Z by name", async () => {
                /** Test that search results are sorted alphabetically by animal name */
                const result = await repository.search({ animal: "lion" });

                expect(result.data).toHaveLength(3);
                expect(result.data[0].animal).toBe("African Lion");
                expect(result.data[1].animal).toBe("African Lion");
                expect(result.data[2].animal).toBe("Mountain Lion");
            });

            it("should sort by createdAt desc for same-named animals", async () => {
                /** Test that facts with same animal name are sorted by creation date (newest first) */
                const result = await repository.search({ animal: "lion" });

                expect(result.data).toHaveLength(3);
                expect(result.data[0].animal).toBe("African Lion");
                expect(result.data[1].animal).toBe("African Lion");
                expect(result.data[2].animal).toBe("Mountain Lion");

                expect(result.data[0].createdAt.getTime()).toBeGreaterThan(
                    result.data[1].createdAt.getTime()
                );
            });
        });

        describe("pagination", () => {
            it("should limit number of results per page", async () => {
                // Test that we can limit the number of results per page
                const res = await repository.search({
                    animal: "lion",
                    limit: 2,
                });
                expect(res.data).toHaveLength(2);
                expect(res.pages).toBe(2);
                expect(res.total).toBe(3);
            });

            it("should handle pagination options", async () => {
                /** Test that search correctly implements page navigation */
                const res = await repository.search({
                    animal: "lion",
                    page: 2,
                    limit: 2,
                });
                expect(res.data).toHaveLength(1);
                expect(res.page).toBe(2);
                expect(res.pages).toBe(2);
            });

            it("should sort results while paginating", async () => {
                /** Test that search maintains proper sorting across paginated results */
                const result = await repository.search({
                    animal: "lion",
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
                /** Test that search handles requests for pages beyond available data */
                const res = await repository.search({
                    animal: "lion",
                    page: 10,
                    limit: 1,
                });
                expect(res.data).toHaveLength(0);
                expect(res.page).toBe(10);
            });
        });
    });

    describe("findAll method", () => {
        // Checks that original functionality of the findAll method is preserved
        it("should return all facts", async () => {
            /** Test that findAll still returns all facts */
            const result = await repository.findAll({});

            expect(result.data).toHaveLength(4);
            expect(result.total).toBe(4);
        });

        it("should work on an empty repository", async () => {
            /** Test that an empty repository still returns no results*/
            await MongoFact.deleteMany({});
            const result = await repository.findAll({});
            expect(result.total).toBe(0);
            expect(result.pages).toBe(0);
            expect(result.data).toEqual([]);
        });

        it("should sort results by creation date desc", async () => {
            /** Test that findAll sorts all facts by creation date in descending order */
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
            /** Test that findAll maintains sorting when pagination is applied */
            const result = await repository.findAll({ page: 2, limit: 2 });

            expect(result.data).toHaveLength(2);
            expect(result.page).toBe(2);
            // Should be the two oldest facts (by creation date)
            expect(result.data[0].createdAt.getTime()).toBeGreaterThan(
                result.data[1].createdAt.getTime()
            );
        });

        it("should limit number of results", async () => {
            /** Test that findAll still limits the number of results */
            const result = await repository.findAll({ limit: 2 });

            expect(result.data).toHaveLength(2);
        });

        it("should handle pagination options", async () => {
            /** Test that findAll correctly implements page-based navigation */
            const result = await repository.findAll({ page: 2, limit: 2 });

            expect(result.data).toHaveLength(2);
            expect(result.page).toBe(2);
            expect(result.pages).toBe(2);
            expect(result.total).toBe(4);
        });

        it("should ignore keyword", async () => {
            /** Test that findAll ignores the keyword parameter and returns all facts */
            // @ts-ignore
            const result = await repository.findAll({ keyword: "lion" });

            expect(result.data).toHaveLength(4);
            expect(result.total).toBe(4);
        });

        it("should ignore keyword while paginating and sorting properly", async () => {
            /** Test that findAll maintains pagination and sorting behavior even when keyword is provided */
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
