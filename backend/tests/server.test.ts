import {
    describe,
    it,
    expect,
    vi,
    beforeEach,
    afterEach,
    type MockedFunction,
} from "vitest";

describe("Server Startup", () => {
    let originalEnv: typeof process.env;
    let importDataMock: MockedFunction<() => Promise<void>>;
    let connectMock: MockedFunction<() => Promise<void>>;

    beforeEach(() => {
        originalEnv = { ...process.env };
        importDataMock = vi.fn(() => Promise.resolve());
        connectMock = vi.fn(() => Promise.resolve());
        vi.doMock("../seeder.ts", () => ({
            importData: importDataMock,
        }));
        vi.doMock("../config/db.ts", () => ({
            default: {
                getInstance: vi.fn(() => ({
                    connect: connectMock,
                })),
            },
        }));
    });

    afterEach(() => {
        vi.restoreAllMocks();
        process.env = originalEnv;
    });

    it("should call importData when DATABASE_TYPE is memory during server startup", async () => {
        // Test that importData is called whenever the DATABASE_TYPE is memory
        process.env.DATABASE_TYPE = "memory";
        await import("../server.js");
        expect(importDataMock).toHaveBeenCalled();
    });

    it("should not call importData when DATABASE_TYPE is not memory", async () => {
        // Test that importData is NOT called whenever the DATABASE_TYPE is not memory
        process.env.DATABASE_TYPE = "mongodb";
        await import("../server.js");
        expect(importDataMock).not.toHaveBeenCalled();
    });
});
