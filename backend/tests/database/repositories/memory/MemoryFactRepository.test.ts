import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { MemoryFactRepository } from "../../../../database/repositories/memory/MemoryFactRepository.js";
import type { IFact } from "../../../../types/index.js";

describe("MemoryFactRepository Search Functionality", () => {
    let repository: MemoryFactRepository;
    let sampleFacts: IFact[];

    beforeEach(async () => {
        vi.useFakeTimers();

        repository = new MemoryFactRepository();

        sampleFacts = [
            {
                id: "1",
                animal: "African Lion",
                text: "Lions are powerful predators",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "2",
                animal: "Mountain Lion",
                text: "Mountain lions are solitary cats",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "3",
                animal: "Elephant",
                text: "Elephants have excellent memory",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "4",
                animal: "African Lion",
                text: "Another lion fact",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        // Populate repository with sample data
        for (const fact of sampleFacts) {
            await repository.create({
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
                /** Test that search finds facts when given query matches animal name exactly */
                const result = await repository.search("Elephant");

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Elephant");
            });

            it("should find facts by case-insensitive search", async () => {
                /** Test that search ignores case differences in animal names */
                const result = await repository.search("ELEPHANT");

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Elephant");
            });

            it("should find facts by partial substring match", async () => {
                /** Test that search matches animal names with only partial substrings (assumes case-insensitivity)s */
                const result = await repository.search("li");

                expect(result.data).toHaveLength(3);
                expect(
                    result.data.some((f) => f.animal === "African Lion")
                ).toBe(true);
                expect(
                    result.data.some((f) => f.animal === "Mountain Lion")
                ).toBe(true);
                expect(result.data.some((f) => f.animal === "Elephant")).toBe(
                    false
                );
            });

            it("should return empty results for non-matching search", async () => {
                // Test that the search doesn't return irrelevant results
                const result = await repository.search("tiger");

                expect(result.data).toHaveLength(0);
                expect(result.total).toBe(0);
                expect(result.pages).toBe(0);
            });

            it("should normalize/remove punctuation and special characters", async () => {
                /** Test that punctuation and special characters are removed/ignored. */
                const result1 = await repository.search("l.i.o.n");
                const result2 = await repository.search("l-ion");
                const result3 = await repository.search("l,io,n");
                const result4 = await repository.search("l!@#$%ion");
                const result5 = await repository.search("l_i_o_n");

                expect(result1.data).toHaveLength(3);
                expect(result2.data).toHaveLength(3);
                expect(result3.data).toHaveLength(3);
                expect(result4.data).toHaveLength(3);
                expect(result5.data).toHaveLength(3);
                for (const result of [
                    result1,
                    result2,
                    result3,
                    result4,
                    result5,
                ]) {
                    expect(
                        result.data.some((f) => f.animal === "Elephant")
                    ).toBe(false);
                }
            });

            it("should handle diacritics/accents (e.g. 'éléphant' -> 'elephant')", async () => {
                /** Test that search normalizes accented characters to their base forms */
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
                /** Test that search ignores leading and trailing whitespace */
                const result = await repository.search("  lion  ");

                expect(result.data).toHaveLength(3);
            });

            it("should allow for spaces between words", async () => {
                /** Test that search handles multi-word animal names with spaces */
                const result = await repository.search("mountain lion");

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should trim whitespace but allow for spaces between words", async () => {
                /** Test that search trims external whitespace while preserving internal spaces */
                const result = await repository.search("  mountain lion  ");

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should allow for multiple spaces between words", async () => {
                /** Test that search normalizes multiple consecutive spaces to single spaces */
                const result = await repository.search("mountain    lion");

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should not match concatenated animal names without spaces", async () => {
                /** Test that search requires spacing between words in multi-word names */
                const result = await repository.search("mountainlion");

                expect(result.data).toHaveLength(0);
            });

            it("should handle empty animal parameter", async () => {
                /** Test that search returns empty results for empty search strings */
                const result = await repository.search("");

                expect(result.data).toHaveLength(0);
            });

            it("should handle very long search terms", async () => {
                // test that partial substrings of a relevant animal ('lion') do not return false-positives in extremely long search terms
                const longTerm = "lion".repeat(100);
                const result = await repository.search(longTerm);

                expect(result.data).toHaveLength(0);
            });

            it("treats whitespace-only terms as invalid", async () => {
                // Test that whitespace-only terms are invalid
                const result = await repository.search("   ");

                expect(result.data).toHaveLength(0);
            });
        });

        describe("sorting", () => {
            it("should sort results alphabetically A -> Z by name", async () => {
                /** Test that search results are sorted alphabetically by animal name */
                const result = await repository.search("lion");

                expect(result.data).toHaveLength(3);
                expect(result.data[0].animal).toBe("African Lion");
                expect(result.data[1].animal).toBe("African Lion");
                expect(result.data[2].animal).toBe("Mountain Lion");
            });
            it("should sort by createdAt desc for same-named animals", async () => {
                /** Test that facts with same animal name are sorted by creation date (newest first) */
                const result = await repository.search("lion");

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
                const result = await repository.search("lion", {
                    limit: 2,
                });

                expect(result.data).toHaveLength(2);
                expect(result.pages).toBe(2);
                expect(result.total).toBe(3);
            });

            it("should handle pagination options", async () => {
                /** Test that search correctly implements page navigation */
                const result = await repository.search("lion", {
                    page: 2,
                    limit: 2,
                });

                expect(result.data).toHaveLength(1);
                expect(result.page).toBe(2);
                expect(result.pages).toBe(2);
                expect(result.total).toBe(3);
            });

            it("should sort results while paginating", async () => {
                /** Test that search maintains proper sorting across paginated results */
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
                /** Test that search handles requests for pages beyond available data */
                const result = await repository.search("lion", {
                    page: 10,
                    limit: 1,
                });

                expect(result.data).toHaveLength(0);
                expect(result.page).toBe(10);
            });
        });
    });

    describe("findAll method", () => {
        // Checks that original functionality of the findAll method is preserved
        describe("basic functionality", () => {
            it("should return all facts", async () => {
                /** Test that findAll still returns all facts */
                const result = await repository.findAll({});

                expect(result.data).toHaveLength(4);
                expect(result.total).toBe(4);
            });

            it("should work on an empty repository", async () => {
                /** Test that an empty repository still returns no results*/
                const emptyRepo = new MemoryFactRepository();
                const result = await emptyRepo.findAll({});
                expect(result.total).toBe(0);
                expect(result.pages).toBe(0);
                expect(result.data).toEqual([]);
            });
        });

        describe("sorting", () => {
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
        });

        describe("pagination", () => {
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

            it("should return an empty array if page is beyond range", async () => {
                /** Test that findAll handles out-of-range page requests gracefully */
                const result = await repository.findAll({
                    page: 99,
                    limit: 10,
                });
                expect(result.total).toBe(4);
                expect(result.pages).toBe(1);
                expect(result.data).toEqual([]);
            });
        });

        describe("keyword parameter removal", () => {
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
});
