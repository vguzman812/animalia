import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import express from "express";
import request from "supertest";
import factRoutes from "../../routes/factRoutes.js";
import * as factController from "../../controllers/factController.js";
import type { Request, Response, NextFunction } from "express";

vi.mock("../../controllers/factController.js");
vi.mock("../../middleware/authMiddleware.js", () => ({
    protect: vi.fn((req: Request, res: Response, next: NextFunction) => next()),
}));
vi.mock("../../middleware/asyncHandler.js", () => ({
    default: vi.fn((fn: (req: Request, res: Response) => void) => fn),
}));

describe("Fact Routes", () => {
    let app: express.Application;

    beforeEach(() => {
        app = express();
        app.use(express.json());
        app.use("/api/facts", factRoutes);
        vi.clearAllMocks();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe("GET /api/facts/search", () => {
        it("should call searchFacts controller", async () => {
            vi.mocked(factController.searchFacts).mockImplementation(
                (req: Request, res: Response) => {
                    res.status(200).json({ facts: [] });
                    return Promise.resolve();
                }
            );

            await request(app).get("/api/facts/search?animal=lion");

            expect(factController.searchFacts).toHaveBeenCalled();
        });
    });
});
