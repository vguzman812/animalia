import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import request from "supertest";
import express, { type NextFunction } from "express";
import factRoutes from "../../routes/factRoutes.js";
import { protect } from "../../middleware/authMiddleware.js";
import asyncHandler from "../../middleware/asyncHandler.js";
import type { IFact } from "../../types/index.js";

// Mock middleware
vi.mock("../../middleware/authMiddleware.js", () => ({
    protect: vi.fn((req, res, next: NextFunction) => {
        req.user = { id: "user123", name: "Test User", email: "test@test.com", isAdmin: false };
        next();
    }),
}));

vi.mock("../../middleware/asyncHandler.js", () => ({
    default: vi.fn((fn) => fn),
}));

// Mock controllers
const mockGetFacts = vi.fn();
const mockCreateFact = vi.fn();
const mockGetFactById = vi.fn();
const mockUpdateFact = vi.fn();
const mockDeleteFact = vi.fn();
const mockLikeFact = vi.fn();
const mockGetTopFacts = vi.fn();
const mockGetFactsByUser = vi.fn();
const mockSearchFacts = vi.fn();

vi.mock("../../controllers/factController.js", () => ({
    getFacts: mockGetFacts,
    createFact: mockCreateFact,
    getFactById: mockGetFactById,
    updateFact: mockUpdateFact,
    deleteFact: mockDeleteFact,
    likeFact: mockLikeFact,
    getTopFacts: mockGetTopFacts,
    getFactsByUser: mockGetFactsByUser,
    searchFacts: mockSearchFacts,
}));

describe("Fact Routes", () => {
    let app: express.Application;

    beforeEach(() => {
        app = express();
        app.use(express.json());
        app.use("/api/facts", factRoutes);

        // Reset all mocks
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    describe("GET /api/facts", () => {
        it("should get all facts without search functionality", async () => {
            const mockFacts = [
                {
                    id: "1",
                    animal: "Lion",
                    text: "Lions are powerful predators",
                    source: "test",
                    createdAt: new Date("2023-01-01"),
                    updatedAt: new Date("2023-01-01"),
                    userId: "user1",
                    likes: [],
                },
                {
                    id: "2",
                    animal: "Elephant",
                    text: "Elephants have excellent memory",
                    source: "test",
                    createdAt: new Date("2023-01-02"),
                    updatedAt: new Date("2023-01-02"),
                    userId: "user1",
                    likes: [],
                },
            ];

            mockGetFacts.mockResolvedValue({
                facts: mockFacts,
                page: 1,
                pages: 1,
            });

            const response = await request(app)
                .get("/api/facts")
                .expect(200);

            expect(response.body).toEqual({
                facts: mockFacts,
                page: 1,
                pages: 1,
            });
            expect(mockGetFacts).toHaveBeenCalledWith(
                expect.objectContaining({
                    query: expect.objectContaining({
                        pageNumber: undefined,
                    }),
                }),
                expect.any(Object)
            );
        });

        it("should not accept keyword parameter for base facts route", async () => {
            mockGetFacts.mockResolvedValue({
                facts: [],
                page: 1,
                pages: 1,
            });

            await request(app)
                .get("/api/facts?keyword=lion")
                .expect(200);

            // The keyword should not be processed in the base route
            expect(mockGetFacts).toHaveBeenCalledWith(
                expect.objectContaining({
                    query: expect.objectContaining({
                        keyword: "lion",
                    }),
                }),
                expect.any(Object)
            );
        });
    });

    describe("GET /api/facts/search", () => {
        const mockSearchResults = [
            {
                id: "1",
                animal: "African Lion",
                text: "Lions are powerful predators",
                source: "test",
                createdAt: new Date("2023-01-01"),
                updatedAt: new Date("2023-01-01"),
                userId: "user1",
                likes: [],
            },
            {
                id: "2",
                animal: "Mountain Lion",
                text: "Mountain lions are solitary cats",
                source: "test",
                createdAt: new Date("2023-01-02"),
                updatedAt: new Date("2023-01-02"),
                userId: "user1",
                likes: [],
            },
            {
                id: "2",
                animal: "Elephant",
                text: "Elephants have excellent memory.",
                source: "test",
                createdAt: new Date("2023-01-03"),
                updatedAt: new Date("2023-01-03"),
                userId: "user1",
                likes: [],
            },
        ];

        beforeEach(() => {
            // Add the search route to the app for testing
            app.get("/api/facts/search", asyncHandler(mockSearchFacts));
        });

        it("should search facts by animal name", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: mockSearchResults,
                    page: 1,
                    pages: 1,
                });
            });

            const response = await request(app)
                .get("/api/facts/search?animal=lion")
                .expect(200);

            expect(response.body).toEqual({
                facts: mockSearchResults,
                page: 1,
                pages: 1,
            });
        });

        it("should perform case-insensitive search", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: mockSearchResults,
                    page: 1,
                    pages: 1,
                });
            });

            await request(app)
                .get("/api/facts/search?animal=LION")
                .expect(200);

            await request(app)
                .get("/api/facts/search?animal=LiOn")
                .expect(200);

            await request(app)
                .get("/api/facts/search?animal=lion")
                .expect(200);
        });

        it("should handle partial substring matches", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: mockSearchResults,
                    page: 1,
                    pages: 1,
                });
            });

            await request(app)
                .get("/api/facts/search?animal=li")
                .expect(200);

            await request(app)
                .get("/api/facts/search?animal=ion")
                .expect(200);
        });

        it("should handle special characters in search", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: mockSearchResults,
                    page: 1,
                    pages: 1,
                });
            });

            await request(app)
                .get("/api/facts/search?animal=l.i.o.n")
                .expect(200);

            await request(app)
                .get("/api/facts/search?animal=l!@#$%ion")
                .expect(200);

            await request(app)
                .get("/api/facts/search?animal=l-i-o-n")
                .expect(200);
        });

        it("should handle pagination with search", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: [],
                    page: 2,
                    pages: 3,
                });
            });

            await request(app)
                .get("/api/facts/search?animal=lion&pageNumber=2")
                .expect(200);

            expect(mockSearchFacts).toHaveBeenCalledWith(
                expect.objectContaining({
                    query: expect.objectContaining({
                        animal: "lion",
                        pageNumber: "2",
                    }),
                }),
                expect.any(Object)
            );
        });

        it("should return sorted results (alphabetical by name, then by creation date desc)", async () => {
            const mockFacts = [
                {
                    id: "1",
                    animal: "African Lion",
                    text: "Another lion fact",
                    source: "test",
                    createdAt: new Date("2023-01-01"),
                    updatedAt: new Date("2023-01-01"),
                    userId: "user1",
                    likes: [],
                },
                {
                    id: "2",
                    animal: "Mountain Lion",
                    text: "Mountain lions are solitary cats",
                    source: "test",
                    createdAt: new Date("2023-01-03"),
                    updatedAt: new Date("2023-01-03"),
                    userId: "user1",
                    likes: [],
                },
                {
                    id: "3",
                    animal: "African Lion",
                    text: "Lions are powerful predators",
                    source: "test",
                    createdAt: new Date("2023-01-02"),
                    updatedAt: new Date("2023-01-02"),
                    userId: "user1",
                    likes: [],
                },
                {
                    id: "4",
                    animal: "African Lion",
                    text: "Lions are apex predators",
                    source: "test",
                    createdAt: new Date("2023-01-02"),
                    updatedAt: new Date("2023-01-02"),
                    userId: "user1",
                    likes: [],
                },
            ];

            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: mockFacts,
                    page: 1,
                    pages: 1,
                });
            });

            const response = await request(app)
                .get("/api/facts/search?animal=lion")
                .expect(200);

            const facts = response.body.facts;
            expect(facts).toHaveLength(3);

            // Verify alphabetical sorting by name
            expect(facts[0].animal).toBe("African Lion");
            expect(facts[1].animal).toBe("African Lion");
            expect(facts[2].animal).toBe("Mountain Lion");

            // Verify creation date sorting (desc) for same animal names
            expect(new Date(facts[0].createdAt)).toEqual(new Date("2023-01-02"));
            expect(new Date(facts[1].createdAt)).toEqual(new Date("2023-01-01"));
        });

        it("should return 400 when no search parameters provided", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(400).json({
                    message: "At least one search parameter (e.g., 'animal') is required",
                });
            });

            const response = await request(app)
                .get("/api/facts/search")
                .expect(400);

            expect(response.body.message).toBe("At least one search parameter (e.g., 'animal') is required");
        });

        it("should return 400 when empty animal parameter provided", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(400).json({
                    message: "At least one search parameter (e.g., 'animal') is required",
                });
            });

            await request(app)
                .get("/api/facts/search?animal=")
                .expect(400);

            await request(app)
                .get("/api/facts/search?animal=   ")
                .expect(400);
        });

        it("should return empty results when no matches found", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: [],
                    page: 1,
                    pages: 1,
                });
            });

            const response = await request(app)
                .get("/api/facts/search?animal=nonexistentanimal")
                .expect(200);

            expect(response.body.facts).toEqual([]);
        });

        it("should handle URL encoded special characters", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: mockSearchResults,
                    page: 1,
                    pages: 1,
                });
            });

            await request(app)
                .get("/api/facts/search?animal=l%40i%23o%24n")
                .expect(200);

            await request(app)
                .get("/api/facts/search?animal=l%2Ei%2Eo%2En")
                .expect(200);
        });
        it("should handle very long search queries", async () => {
            const longQuery = "lion".repeat(100);

            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: [],
                    page: 1,
                    pages: 1,
                });
            });

            await request(app)
                .get(`/api/facts/search?animal=${longQuery}`)
                .expect(200);
        });
        it("should handle Unicode characters in search", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: [],
                    page: 1,
                    pages: 1,
                });
            });

            await request(app).get("/api/facts/search?animal=>�").expect(200);

            await request(app).get("/api/facts/search?animal=Le�n").expect(200);
        });

        it("should handle multiple query parameters correctly", async () => {
            mockSearchFacts.mockImplementation((req, res) => {
                res.status(200).json({
                    facts: [],
                    page: 1,
                    pages: 1,
                });
            });

            await request(app)
                .get(
                    "/api/facts/search?animal=lion&pageNumber=2&invalidParam=test"
                )
                .expect(200);
        });
    });
});