import { describe, it, expect, beforeEach } from "vitest";
import { MemoryFactRepository } from "../../../../database/repositories/memory/MemoryFactRepository.js";
import type { IFact } from "../../../../types/index.js";

describe("MemoryFactRepository Search Functionality", () => {
    let repository: MemoryFactRepository;
    let sampleFacts: IFact[];

    beforeEach(() => {
        repository = new MemoryFactRepository();

        sampleFacts = [
            {
                id: "1",
                animal: "African Lion",
                text: "Lions are powerful predators",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date("2023-01-01"),
                updatedAt: new Date("2023-01-01"),
            },
            {
                id: "2",
                animal: "Mountain Lion",
                text: "Mountain lions are solitary cats",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date("2023-01-02"),
                updatedAt: new Date("2023-01-02"),
            },
            {
                id: "3",
                animal: "Elephant",
                text: "Elephants have excellent memory",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date("2023-01-03"),
                updatedAt: new Date("2023-01-03"),
            },
            {
                id: "4",
                animal: "African Lion",
                text: "Another lion fact",
                source: "test",
                userId: "user1",
                likes: [],
                createdAt: new Date("2023-01-04"),
                updatedAt: new Date("2023-01-04"),
            },
        ];

        // Populate repository with sample data
        sampleFacts.forEach(async (fact) => {
            await repository.create({
                animal: fact.animal,
                text: fact.text,
                source: fact.source,
                userId: fact.userId,
                likes: fact.likes,
                media: fact.media,
                wiki: fact.wiki,
            });
        });
    });

    describe("search method", () => {
        describe("matching", () => {
            it("should find facts by exact animal name match", async () => {
                const result = await repository.search({ animal: "Elephant" });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Elephant");
            });

            it("should find facts by case-insensitive search", async () => {
                const result = await repository.search({ animal: "ELEPHANT" });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Elephant");
            });

            it("should find facts by partial substring match", async () => {
                const result = await repository.search({ animal: "li" });

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
                const result = await repository.search({ animal: "tiger" });

                expect(result.data).toHaveLength(0);
                expect(result.total).toBe(0);
                expect(result.pages).toBe(0);
            });

            it("should normalize/remove punctuation and special characters", async () => {
                const result1 = await repository.search({ animal: "l.i.o.n" });
                const result2 = await repository.search({ animal: "l-ion" });
                const result3 = await repository.search({ animal: "l,io,n" });
                const result4 = await repository.search({
                    animal: "l!@#$%ion",
                });
                const result5 = await repository.search({ animal: "l_i_o_n" });

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

            it("should handle diacritics/accents (e.g. 'éléphant' → 'elephant')", async () => {
                const result1 = await repository.search({ animal: "éléphánt" });
                const result2 = await repository.search({ animal: "liön" });
                const result3 = await repository.search({ animal: "àfrican" });

                expect(result1.data).toHaveLength(1);
                expect(result1.data[0].animal).toBe("Elephant");

                expect(result2.data).toHaveLength(3);
                expect(
                    result2.data.some((f) => f.animal === "African Lion")
                ).toBe(true);

                expect(result3.data).toHaveLength(2);
                expect(
                    result3.data.some((f) => f.animal === "African Lion")
                ).toBe(true);
            });

            it("should trim whitespace", async () => {
                const result = await repository.search({ animal: "  lion  " });

                expect(result.data).toHaveLength(3);
            });

            it("should allow for spaces between words", async () => {
                const result = await repository.search({ animal: "mountain lion" });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should trim whitespace but allow for spaces between words", async () => {
                const result = await repository.search({ animal: "  mountain lion  " });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            });

            it("should allow for multiple spaces between words", async () =>{
                const result = await repository.search({ animal: "mountain    lion" });

                expect(result.data).toHaveLength(1);
                expect(result.data[0].animal).toBe("Mountain Lion");
            } )

            it("should not match concatenated animal names without spaces", () =>{
                const result = await repository.search({ animal: "mountainlion" });

                expect(result.data).toHaveLength(0);
            });

            it("should handle empty animal parameter", async () => {
                const result = await repository.search({ animal: "" });

                expect(result.data).toHaveLength(0);
            });

            it("should handle very long search terms", async () => {
                const longTerm = "lion".repeat(100);
                const result = await repository.search({ animal: longTerm });

                expect(result.data).toHaveLength(0);
            });

            it("treats whitespace-only terms as invalid", async () => {
                const result = await repository.search({ animal: "   " });

                expect(result.data).toHaveLength(0);
            });
        });

        describe("sorting", () => {
            it("should sort results alphabetically A -> Z by name", async () => {
                const result = await repository.search({ animal: "lion" });

                expect(result.data).toHaveLength(3);
                expect(result.data[0].animal).toBe("African Lion");
                expect(result.data[1].animal).toBe("African Lion");
                expect(result.data[2].animal).toBe("Mountain Lion");
            });
            it("should sort by createdAt desc for same-named animals", async () => {
                const result = await repository.search({ animal: "lion" });

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
                const result = await repository.search({
                    animal: "lion",
                    limit: 2,
                });

                expect(result.data).toHaveLength(2);
                expect(result.pages).toBe(2);
                expect(result.total).toBe(3);
            });

            it("should handle pagination options", async () => {
                const result = await repository.search({
                    animal: "lion",
                    page: 2,
                    limit: 2,
                });

                expect(result.data).toHaveLength(1);
                expect(result.page).toBe(2);
                expect(result.pages).toBe(2);
                expect(result.total).toBe(3);
            });

            it("should sort results while paginating", async () => {
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
                const result = await repository.search({
                    animal: "lion",
                    page: 10,
                    limit: 1,
                });

                expect(result.data).toHaveLength(0);
                expect(result.page).toBe(10);
            });
        });
    });

    describe("findAll method", () => {
        describe("basic functionality", () => {
            it("should return all facts", async () => {
                const result = await repository.findAll({});

                expect(result.data).toHaveLength(4);
                expect(result.total).toBe(4);
            });

            it("should work on an empty repository", async () => {
                const emptyRepo = new MemoryFactRepository();
                const result = await emptyRepo.findAll({});
                expect(result.total).toBe(0);
                expect(result.pages).toBe(0);
                expect(result.data).toEqual([]);
            });
        });

        describe("sorting", () => {
            it("should sort results by creation date desc", async () => {
                const result = await repository.findAll({});

                expect(result.data).toHaveLength(4);
                expect(result.data[0].id).toBe("4");
                expect(result.data[1].id).toBe("3");
                expect(result.data[2].id).toBe("2");
                expect(result.data[3].id).toBe("1");
            });

            it("should sort results while paginating", async () => {
                const result = await repository.findAll({ page: 2, limit: 2 });

                expect(result.data).toHaveLength(2);
                expect(result.page).toBe(2);
                expect(result.data[0].id).toBe("2");
                expect(result.data[1].id).toBe("1");
            });
        });

        describe("pagination", () => {
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

            it("should return an empty array if page is beyond range", async () => {
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
                const result = await repository.findAll({ keyword: "lion" });

                expect(result.data).toHaveLength(4);
                expect(result.total).toBe(4);
            });

            it("should ignore keyword while paginating and sorting properly", async () => {
                const page1 = await repository.findAll({
                    limit: 2,
                    keyword: "lion",
                });
                expect(page1.total).toBe(4);
                expect(page1.pages).toBe(2);
                expect(page1.data).toHaveLength(2);
                // page1 should be the two newest:
                expect(page1.data.map((f) => f.id)).toEqual(["4", "3"]);

                const page2 = await repository.findAll({
                    page: 2,
                    limit: 2,
                    keyword: "elephant",
                });
                expect(page2.page).toBe(2);
                // Page 2 should be the next two oldest
                expect(page2.data.map((f) => f.id)).toEqual(["2", "1"]);
            });
        });
    });
});
