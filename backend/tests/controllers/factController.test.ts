import {
    describe,
    it,
    expect,
    vi,
    beforeEach,
    afterEach,
    type MockedFunction,
} from "vitest";
import type { Request, Response } from "express";
import type {
    IFactRepository,
    IPaginatedResult,
    IFact,
} from "../../types/index.js";

describe("Fact Controller", () => {
    let originalEnv: typeof process.env;
    let mockFactRepository: {
        findAll: MockedFunction<IFactRepository["findAll"]>;
        search: MockedFunction<IFactRepository["search"]>;
    };
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let getFacts: (req: Request, res: Response) => Promise<void>;
    let searchFacts: (req: Request, res: Response) => Promise<void>;

    beforeEach(async () => {
        originalEnv = { ...process.env };
        process.env.PAGINATION_LIMIT = "10";

        mockFactRepository = {
            findAll: vi.fn(),
            search: vi.fn(),
        };

        mockRequest = {
            query: {},
        };

        mockResponse = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        };

        vi.doMock("../../config/db.js", () => ({
            default: {
                getInstance: vi.fn(() => ({
                    getFactRepository: () => mockFactRepository,
                })),
            },
        }));

        const factController = await import(
            "../../controllers/factController.js"
        );
        getFacts = factController.getFacts;
        searchFacts = factController.searchFacts;
    });

    afterEach(() => {
        vi.restoreAllMocks();
        process.env = originalEnv;
    });

    describe("getFacts", () => {
        it("should ignore keyword query parameter", async () => {
            // Test that getFacts ignores the keyword parameter and uses default pagination
            mockRequest.query = { keyword: "lion" };
            const mockResult: IPaginatedResult<IFact> = {
                data: [],
                page: 1,
                pages: 1,
                total: 0,
            };

            mockFactRepository.findAll.mockResolvedValue(mockResult);

            await getFacts(mockRequest as Request, mockResponse as Response);

            expect(mockFactRepository.findAll).toHaveBeenCalledWith({
                page: 1,
                limit: 10,
            });
        });

        it("should paginate correctly", async () => {
            // Test that getFacts properly handles pageNumber query parameter for pagination
            mockRequest.query = { pageNumber: "2" };
            const mockResult: IPaginatedResult<IFact> = {
                data: [],
                page: 2,
                pages: 2,
                total: 15,
            };

            mockFactRepository.findAll.mockResolvedValue(mockResult);

            await getFacts(mockRequest as Request, mockResponse as Response);

            expect(mockFactRepository.findAll).toHaveBeenCalledWith({
                page: 2,
                limit: 10,
            });
        });
    });

    describe("searchFacts", () => {
        it("should take animal as query parameter", async () => {
            /** Test that searchFacts accepts and uses the animal query parameter */
            mockRequest.query = { animal: "Tiger" };
            const mockResult: IPaginatedResult<IFact> = {
                data: [],
                page: 1,
                pages: 1,
                total: 0,
            };

            mockFactRepository.search.mockResolvedValue(mockResult);

            await searchFacts(mockRequest as Request, mockResponse as Response);

            expect(mockFactRepository.search).toHaveBeenCalledWith({
                animal: "Tiger",
                page: 1,
                limit: 10,
            });
        });

        it("should return 400 and message when no animal parameter provided", async () => {
            /** Test that searchFacts returns 400 error when required animal parameter is missing and that the specified message is included */
            mockRequest.query = {};

            await expect(
                searchFacts(mockRequest as Request, mockResponse as Response)
            ).rejects.toThrow(
                "At least one search parameter (e.g., 'animal') is required"
            );
            expect(mockResponse.status).toHaveBeenCalledWith(400);
        });

        it("should call search method from fact repository", async () => {
            /** Test that searchFacts calls the search method on the fact repository */
            mockRequest.query = { animal: "Lion" };
            const mockResult: IPaginatedResult<IFact> = {
                data: [],
                page: 1,
                pages: 1,
                total: 0,
            };

            mockFactRepository.search.mockResolvedValue(mockResult);

            await searchFacts(mockRequest as Request, mockResponse as Response);

            expect(mockFactRepository.search).toHaveBeenCalled();
        });

        it("should call search method with animal and pagination options", async () => {
            /** Test that searchFacts passes correct animal name and pagination options to the search method */
            mockRequest.query = { animal: "Elephant", pageNumber: "2" };
            const mockResult: IPaginatedResult<IFact> = {
                data: [],
                page: 2,
                pages: 3,
                total: 15,
            };

            mockFactRepository.search.mockResolvedValue(mockResult);

            await searchFacts(mockRequest as Request, mockResponse as Response);

            expect(mockFactRepository.search).toHaveBeenCalledWith({
                animal: "Elephant",
                page: 2,
                limit: 10,
            });
        });

        it("should return 200 when animal parameter is provided", async () => {
            /** Test that searchFacts returns success when necessary query param is provided */
            mockRequest.query = { animal: "Bear" };
            const mockResult: IPaginatedResult<IFact> = {
                data: [],
                page: 1,
                pages: 1,
                total: 0,
            };

            mockFactRepository.search.mockResolvedValue(mockResult);

            await searchFacts(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
        });
    });
});
