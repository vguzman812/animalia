import {
    describe,
    it,
    expect,
    vi,
    beforeEach,
    afterEach,
    type MockedFunction,
} from "vitest";
import DatabaseManager from "../config/db.ts";
import type {
    IUserRepository,
    IFactRepository,
    IUser,
    IFact,
} from "../types/index.ts";
import { importData, destroyData, parseArgs } from "../seeder.ts";
import sampleFacts from "../data/facts.ts";
import sampleUsers from "../data/users.ts";

const sampleMockFacts = [
    {
        animal: "Cat",
        source: "source1",
        text: "fact1",
        media: "media1",
        wiki: "wiki1",
    },
    {
        animal: "Dog",
        source: "source2",
        text: "fact2",
        media: "media2",
        wiki: "wiki2",
    },
    {
        animal: "Bird",
        source: "source3",
        text: "fact3",
        media: "media2",
        wiki: "wiki3",
    },
];

export const sampleMockUsers = [
    {
        name: "Admin User",
        email: "admin@test.com",
        password: "password123",
        isAdmin: true,
    },
    {
        name: "Regular User",
        email: "user@test.com",
        password: "password123",
        isAdmin: false,
    },
];

vi.mock("../data/users.ts", () => ({
    default: [
        {
            name: "Admin User",
            email: "admin@test.com",
            password: "password123",
            isAdmin: true,
        },
        {
            name: "Regular User",
            email: "user@test.com",
            password: "password123",
            isAdmin: false,
        },
    ],
}));
vi.mock("../data/facts.ts", () => ({
    default: [
        {
            animal: "Cat",
            source: "source1",
            text: "fact1",
            media: "media1",
            wiki: "wiki1",
        },
        {
            animal: "Dog",
            source: "source2",
            text: "fact2",
            media: "media2",
            wiki: "wiki2",
        },
        {
            animal: "Bird",
            source: "source3",
            text: "fact3",
            media: "media2",
            wiki: "wiki3",
        },
    ],
}));
vi.mock("../config/db.js");

describe("Database Seeder", () => {
    let mockDbManager: {
        connect: MockedFunction<() => Promise<void>>;
        disconnect: MockedFunction<() => Promise<void>>;
        getUserRepository: MockedFunction<() => IUserRepository>;
        getFactRepository: MockedFunction<() => IFactRepository>;
    };
    let mockUserRepo: IUserRepository;
    let mockFactRepo: IFactRepository;

    beforeEach(() => {
        vi.clearAllMocks();

        mockUserRepo = {
            count: vi.fn(),
            findAll: vi.fn(),
            delete: vi.fn(),
            create: vi.fn(),
            findById: vi.fn(),
            findByEmail: vi.fn(),
            update: vi.fn(),
        };

        mockFactRepo = {
            count: vi.fn(),
            findAll: vi.fn(),
            delete: vi.fn(),
            create: vi.fn(),
            findById: vi.fn(),
            findByUserId: vi.fn(),
            update: vi.fn(),
            getTopLiked: vi.fn(),
        };

        mockDbManager = {
            connect: vi.fn().mockResolvedValue(undefined),
            disconnect: vi.fn().mockResolvedValue(undefined),
            getUserRepository: vi.fn().mockReturnValue(mockUserRepo),
            getFactRepository: vi.fn().mockReturnValue(mockFactRepo),
        };

        const mockedDatabaseManager = vi.mocked(DatabaseManager);
        mockedDatabaseManager.getInstance.mockReturnValue(mockDbManager as any);
    });

    describe("Module Usage", () => {
        describe("importData Function", () => {
            describe("Basic Seeding Operations", () => {
                it("should seed users and facts successfully when db is initially empty", async () => {
                    // Verifies that importData() calls the `create` methods for the users and facts repos when the db is initially empty.
                    // db initially empty
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);

                    vi.mocked(mockUserRepo.create).mockImplementation(
                        (userData) => {
                            const index = sampleMockUsers.findIndex(
                                (u) => u.email === userData.email
                            );
                            return Promise.resolve({
                                ...userData,
                                id: `user${index + 1}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IUser);
                        }
                    );

                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `fact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(undefined, true);

                    expect(mockUserRepo.count).toHaveBeenCalledOnce();
                    expect(mockFactRepo.count).toHaveBeenCalledOnce();
                    expect(mockUserRepo.create).toHaveBeenCalledTimes(
                        sampleMockUsers.length
                    );
                    expect(mockFactRepo.create).toHaveBeenCalledTimes(
                        sampleMockFacts.length
                    );
                });

                it("should seed users and facts successfully when db is initially populated", async () => {
                    // Checks that importData deletes existing users and facts before seeding new ones
                    const existingUsers = [
                        {
                            id: "existing1",
                            name: "Old User",
                            email: "old@test.com",
                            password: "pass",
                            isAdmin: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];
                    const existingFacts = [
                        {
                            id: "existingFact1",
                            animal: "Lion",
                            text: "Old fact",
                            source: "old",
                            userId: "existing1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];

                    // Mock populated database with 1 fact and 1 user
                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);
                    // mock populated db with full sample set of users and facts (2 and 3 respectively at the time of this comment).
                    let userCounter = 0;
                    vi.mocked(mockUserRepo.create).mockImplementation(
                        (userData) =>
                            Promise.resolve({
                                ...userData,
                                id: `newUser${++userCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IUser)
                    );
                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `newFact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(undefined, true);

                    expect(mockFactRepo.delete).toHaveBeenCalledTimes(
                        existingFacts.length
                    );
                    expect(mockUserRepo.delete).toHaveBeenCalledTimes(
                        existingUsers.length
                    );
                    expect(mockUserRepo.create).toHaveBeenCalledTimes(
                        sampleMockUsers.length
                    );
                    expect(mockFactRepo.create).toHaveBeenCalledTimes(
                        sampleMockFacts.length
                    );
                });

                it("should seed users and facts successfully when db is initially partially populated with users", async () => {
                    // Check that importData deletes existing users but leaves facts untouched, then seeds both sets.

                    const existingUsers = [
                        {
                            id: "existing1",
                            name: "Old User",
                            email: "old@test.com",
                            password: "pass",
                            isAdmin: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];

                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);
                    let userCounter = 0;
                    vi.mocked(mockUserRepo.create).mockImplementation(
                        (userData) =>
                            Promise.resolve({
                                ...userData,
                                id: `newUser${++userCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IUser)
                    );
                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `newFact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(undefined, true);

                    expect(mockUserRepo.delete).toHaveBeenCalledTimes(
                        existingUsers.length
                    );
                    expect(mockFactRepo.delete).not.toHaveBeenCalled();
                    expect(mockUserRepo.create).toHaveBeenCalledTimes(
                        sampleMockUsers.length
                    );
                    expect(mockFactRepo.create).toHaveBeenCalledTimes(
                        sampleMockFacts.length
                    );
                });

                it("should seed users and facts successfully when db is initially partially populated with facts", async () => {
                    // Validate that importData deletes existing facts but leaves users untouched, then seeds both sets.
                    const existingFacts = [
                        {
                            id: "existingFact1",
                            animal: "Lion",
                            text: "Old fact",
                            source: "old",
                            userId: "existing1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];

                    // Mock partially populated database (only facts)
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);
                    let userCounter = 0;
                    vi.mocked(mockUserRepo.create).mockImplementation(
                        (userData) =>
                            Promise.resolve({
                                ...userData,
                                id: `newUser${++userCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IUser)
                    );
                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `newFact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(undefined, true);

                    expect(mockFactRepo.delete).toHaveBeenCalledTimes(
                        existingFacts.length
                    );
                    expect(mockUserRepo.delete).not.toHaveBeenCalled();
                    expect(mockUserRepo.create).toHaveBeenCalledTimes(
                        sampleMockUsers.length
                    );
                    expect(mockFactRepo.create).toHaveBeenCalledTimes(
                        sampleMockFacts.length
                    );
                });

                it("should create facts with different timestamps", async () => {
                    // Confirm that each seeded fact has a distinct createdAt timestamp spaced ~500 ms apart.
                    const mockUser = {
                        id: "user1",
                        name: "Admin User",
                        email: "admin@test.com",
                        password: "password123",
                        isAdmin: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(mockUser);

                    const createdFacts: IFact[] = [];
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) => {
                            const fact = {
                                ...factData,
                                id: `fact${createdFacts.length + 1}`,
                                // Use the current time when the mock is called
                                // This will capture the actual time when importData calls create
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact;
                            createdFacts.push(fact);
                            return Promise.resolve(fact);
                        }
                    );

                    // allow delays to occur if that is the current implementation in seeder
                    const importPromise = importData(undefined, true);
                    await importPromise;

                    // Verify that each fact has a different timestamp
                    const timestamps = createdFacts.map((fact) =>
                        fact.createdAt.getTime()
                    );
                    const uniqueTimestamps = new Set(timestamps);
                    expect(uniqueTimestamps.size).toBe(timestamps.length);

                    // Verify that timestamps are ~ 500ms apart for current implementation
                    for (let i = 1; i < timestamps.length; i++) {
                        const timeDiff = timestamps[i] - timestamps[i - 1];
                        expect(timeDiff).toBeGreaterThanOrEqual(500);
                        expect(timeDiff).toBeLessThan(600); // Allow some small variance
                    }
                });

                it("should assign seed facts to admin user", async () => {
                    // Make sure all seeded facts get the first (admin) user’s ID

                    const mockAdminUser = {
                        id: "admin1",
                        name: "Admin User",
                        email: "admin@test.com",
                        password: "password123",
                        isAdmin: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValueOnce(
                        mockAdminUser
                    );
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: "fact1",
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(undefined, true);

                    const factCreationCalls = vi.mocked(mockFactRepo.create)
                        .mock.calls;
                    // for each fact, check that the userId matches the id provided in `mockAdminUser` above
                    // Likes must be included to avoid failing the test
                    factCreationCalls.forEach((call) => {
                        expect(call[0]).toMatchObject({
                            userId: mockAdminUser.id,
                            likes: [],
                        });
                    });
                });
            });

            describe("Fact Limiting", () => {
                it("should limit facts seeded when maxFacts is specified", async () => {
                    // Test that importData only creates up to maxFacts facts when a limit is provided.
                    const maxFacts = 2;
                    const mockUser: IUser = {
                        id: "user1",
                        name: "Admin User",
                        email: "admin@test.com",
                        password: "password123",
                        isAdmin: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(mockUser);
                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `fact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(maxFacts, true);

                    expect(mockFactRepo.create).toHaveBeenCalledTimes(maxFacts);
                });

                it("should use all available facts when maxFacts is not specified", async () => {
                    // Verify that importData defaults to seeding every fact if no limit is given.
                    const mockUser: IUser = {
                        id: "user1",
                        name: "Admin User",
                        email: "admin@test.com",
                        password: "password123",
                        isAdmin: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(mockUser);
                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `fact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData();

                    expect(mockFactRepo.create).toHaveBeenCalledTimes(
                        sampleMockFacts.length
                    );
                });

                it("should not exceed available facts when maxFacts is larger than available", async () => {
                    // Ensure importData caps seeding at the total number of sample facts, even if maxFacts is higher.
                    const maxFacts = sampleMockFacts.length + 5;
                    const mockUser: IUser = {
                        id: "user1",
                        name: "Admin User",
                        email: "admin@test.com",
                        password: "password123",
                        isAdmin: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(mockUser);
                    let factCounter = 0;
                    vi.mocked(mockFactRepo.create).mockImplementation(
                        (factData) =>
                            Promise.resolve({
                                ...factData,
                                id: `fact${++factCounter}`,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            } as IFact)
                    );

                    await importData(maxFacts, true);

                    expect(mockFactRepo.create).toHaveBeenCalledTimes(
                        sampleMockFacts.length
                    );
                });
            });

            describe("Data Cleanup", () => {
                it("should delete existing data successfully when db is initially populated", async () => {
                    // Check that importData deletes the correct data when the db is initially populated
                    const existingUsers: IUser[] = [
                        {
                            id: "user1",
                            name: "User 1",
                            email: "user1@test.com",
                            password: "pass",
                            isAdmin: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: "user2",
                            name: "User 2",
                            email: "user2@test.com",
                            password: "pass",
                            isAdmin: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];
                    const existingFacts: IFact[] = [
                        {
                            id: "fact1",
                            animal: "Lion",
                            text: "Fact 1",
                            source: "source1",
                            userId: "user1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                        {
                            id: "fact2",
                            animal: "Tiger",
                            text: "Fact 2",
                            source: "source2",
                            userId: "user2",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];

                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        existingUsers[0]
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        existingFacts[0]
                    );

                    await importData(undefined, true);

                    expect(mockFactRepo.delete).toHaveBeenCalledTimes(
                        existingFacts.length
                    );
                    expect(mockUserRepo.delete).toHaveBeenCalledTimes(
                        existingUsers.length
                    );
                    existingFacts.forEach((fact) => {
                        expect(mockFactRepo.delete).toHaveBeenCalledWith(
                            fact.id
                        );
                    });
                    existingUsers.forEach((user) => {
                        expect(mockUserRepo.delete).toHaveBeenCalledWith(
                            user.id
                        );
                    });
                });

                it("should delete existing data successfully when db is initially partially populated with users", async () => {
                    // Checks that only existing users are deleted (and no fact operations are invoked) when there are no pre-existing facts.
                    const existingUsers: IUser[] = [
                        {
                            id: "user1",
                            name: "User 1",
                            email: "user1@test.com",
                            password: "pass",
                            isAdmin: false,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];

                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        existingUsers[0]
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData(undefined, true);

                    expect(mockUserRepo.delete).toHaveBeenCalledTimes(
                        existingUsers.length
                    );
                    expect(mockFactRepo.delete).not.toHaveBeenCalled();
                    expect(mockUserRepo.delete).toHaveBeenCalledWith(
                        existingUsers[0].id
                    );
                });

                it("should delete existing data successfully when db is initially partially populated with facts", async () => {
                    // Confirms that only existing facts are deleted (and no user operations are invoked) when there are no pre-existing users.
                    const existingFacts: IFact[] = [
                        {
                            id: "fact1",
                            animal: "Lion",
                            text: "Fact 1",
                            source: "source1",
                            userId: "user1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    ];

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData(undefined, true);

                    expect(mockFactRepo.delete).toHaveBeenCalledTimes(
                        existingFacts.length
                    );
                    expect(mockUserRepo.delete).not.toHaveBeenCalled();
                    expect(mockFactRepo.delete).toHaveBeenCalledWith(
                        existingFacts[0].id
                    );
                });

                it("should not try to delete facts or users when no initial data exists", async () => {
                    // Ensures no delete or find operations occur when both counts are zero.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData(undefined, true);

                    expect(mockFactRepo.delete).not.toHaveBeenCalled();
                    expect(mockUserRepo.delete).not.toHaveBeenCalled();
                    expect(mockFactRepo.findAll).not.toHaveBeenCalled();
                    expect(mockUserRepo.findAll).not.toHaveBeenCalled();
                });
            });

            describe("Error Handling", () => {
                it("should handle no users created scenario", async () => {
                    // Ensure importData throws “No users were created” if userRepository.create returns undefined.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        undefined as any
                    );

                    await expect(importData(undefined, true)).rejects.toThrow(
                        "No users were created"
                    );
                });

                it("should handle user creation failures", async () => {
                    // Checks that errors thrown by userRepository.create bubble up as expected.
                    const createError = new Error("User creation failed");
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockRejectedValue(
                        createError
                    );

                    await expect(importData(undefined, true)).rejects.toThrow(
                        "User creation failed"
                    );
                });

                it("should handle fact creation failures", async () => {
                    // Verify errors thrown by factRepository.create after users exist bubble up as expected
                    const factError = new Error("Fact creation failed");
                    const mockUser: IUser = {
                        id: "user1",
                        name: "Admin User",
                        email: "admin@test.com",
                        password: "password123",
                        isAdmin: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    };

                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(mockUser);
                    vi.mocked(mockFactRepo.create).mockRejectedValue(factError);

                    await expect(importData(undefined, true)).rejects.toThrow(
                        "Fact creation failed"
                    );
                });
            });

            describe("Progress and Logging", () => {
                let consoleSpy: ReturnType<typeof vi.spyOn>;

                beforeEach(() => {
                    consoleSpy = vi
                        .spyOn(console, "log")
                        .mockImplementation(() => {});
                });

                afterEach(() => {
                    consoleSpy.mockRestore();
                });

                it("should log when existing data is being cleared", async () => {
                    // Check console.log prints “Clearing existing data...” when deletions start.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(1);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(1);
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: [{ id: "fact1" } as IFact],
                        page: 1,
                        pages: 1,
                        total: 1,
                    });
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: [{ id: "user1" } as IUser],
                        page: 1,
                        pages: 1,
                        total: 1,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Clearing existing data..."
                    );
                });

                it("should log when existing data is finished clearing", async () => {
                    // Check console.log prints “Existing data cleared.” after all deletions.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Existing data cleared."
                    );
                });

                it("should log that sample users are being created", async () => {
                    // Check console.log prints “Creating sample users...” before user creation.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Creating sample users..."
                    );
                });

                it("should log the correct number of users created", async () => {
                    // Verify console.log reports Created ${n} users matching the sample size.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        `Created ${sampleMockUsers.length} users`
                    );
                });

                it("should log the correct number of facts created", async () => {
                    // Verify console.log reports "Seeding ${n} facts. Please be patient...." with the correct number
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        `Seeding ${sampleMockFacts.length} facts. Please be patient...`
                    );
                });

                it("should log success when data is successfully seeded", async () => {
                    // Checks for the green-inverse “Data Imported!” message after seeding completes.
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.create).mockResolvedValue(
                        {} as IUser
                    );
                    vi.mocked(mockFactRepo.create).mockResolvedValue(
                        {} as IFact
                    );

                    await importData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Data Imported!".green.inverse
                    );
                });
            });
        });
        describe("destroyData Function", () => {
            describe("Basic Destroy Operations", () => {
                it("should delete all facts and users when db is initially populated", async () => {
                    // Verifies that destroyData() removes every fact and every user when both exist.
                    const existingUsers: IUser[] = sampleMockUsers.map(
                        (user, index) => ({
                            ...user,
                            id: `user${index + 1}`,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );
                    const existingFacts: IFact[] = sampleMockFacts.map(
                        (fact, index) => ({
                            ...fact,
                            id: `fact${index + 1}`,
                            userId: existingUsers[0].id,
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);

                    await destroyData();

                    expect(mockFactRepo.delete).toHaveBeenCalledTimes(
                        existingFacts.length
                    );
                    expect(mockUserRepo.delete).toHaveBeenCalledTimes(
                        existingUsers.length
                    );
                    existingFacts.forEach((fact) => {
                        expect(mockFactRepo.delete).toHaveBeenCalledWith(
                            fact.id
                        );
                    });
                    existingUsers.forEach((user) => {
                        expect(mockUserRepo.delete).toHaveBeenCalledWith(
                            user.id
                        );
                    });
                });

                it("should delete all users when db is initially partially populated with users", async () => {
                    // Confirm destroyData skips facts and deletes only users when no facts exist.
                    const existingUsers: IUser[] = sampleMockUsers.map(
                        (user, index) => ({
                            ...user,
                            id: `user${index + 1}`,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);

                    await destroyData();

                    expect(mockFactRepo.delete).not.toHaveBeenCalled();
                    expect(mockUserRepo.delete).toHaveBeenCalledTimes(
                        existingUsers.length
                    );
                    existingUsers.forEach((user) => {
                        expect(mockUserRepo.delete).toHaveBeenCalledWith(
                            user.id
                        );
                    });
                });

                it("should delete all facts when db is initially partially populated with facts", async () => {
                    // Confirm destroyData skips users and deletes only facts when no users exist.
                    const existingFacts: IFact[] = sampleMockFacts.map(
                        (fact, index) => ({
                            ...fact,
                            id: `fact${index + 1}`,
                            userId: "user1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);

                    await destroyData();

                    expect(mockFactRepo.delete).toHaveBeenCalledTimes(
                        existingFacts.length
                    );
                    expect(mockUserRepo.delete).not.toHaveBeenCalled();
                    existingFacts.forEach((fact) => {
                        expect(mockFactRepo.delete).toHaveBeenCalledWith(
                            fact.id
                        );
                    });
                });
            });

            describe("Destroy Logging", () => {
                let consoleSpy: ReturnType<typeof vi.spyOn>;

                beforeEach(() => {
                    consoleSpy = vi
                        .spyOn(console, "log")
                        .mockImplementation(() => {});
                });

                afterEach(() => {
                    consoleSpy.mockRestore();
                });

                it("should log when deleting all facts", async () => {
                    // Ensure destroyData logs “Deleting all facts...” before fact deletions.
                    const existingFacts: IFact[] = sampleMockFacts.map(
                        (fact, index) => ({
                            ...fact,
                            id: `fact${index + 1}`,
                            userId: "user1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockResolvedValue(true);

                    await destroyData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Deleting all facts..."
                    );
                });

                it("should log when deleting all users", async () => {
                    // Ensure destroyData logs “Deleting all users...” before user deletions.
                    const existingUsers: IUser[] = sampleMockUsers.map(
                        (user, index) => ({
                            ...user,
                            id: `user${index + 1}`,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockUserRepo.delete).mockResolvedValue(true);

                    await destroyData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Deleting all users..."
                    );
                });

                it("should log success when data is successfully destroyed", async () => {
                    // Checks for the red-inverse “Data Destroy operation completed!” message after deletion.
                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);

                    await destroyData();

                    expect(consoleSpy).toHaveBeenCalledWith(
                        "Data Destroy operation completed!".red.inverse
                    );
                });
            });

            describe("Destroy Error Handling", () => {
                it("should handle errors during fact deletion", async () => {
                    // Verify destroyData throws if factRepository.delete rejects.
                    const factError = new Error("Fact deletion failed");
                    const existingFacts: IFact[] = [sampleMockFacts[0]].map(
                        (fact, index) => ({
                            ...fact,
                            id: `fact${index + 1}`,
                            userId: "user1",
                            likes: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(
                        existingFacts.length
                    );
                    vi.mocked(mockUserRepo.count).mockResolvedValue(0);
                    vi.mocked(mockFactRepo.findAll).mockResolvedValue({
                        data: existingFacts,
                        page: 1,
                        pages: 1,
                        total: existingFacts.length,
                    });
                    vi.mocked(mockFactRepo.delete).mockRejectedValue(factError);

                    await expect(destroyData()).rejects.toThrow(
                        "Fact deletion failed"
                    );
                });

                it("should handle errors during user deletion", async () => {
                    // Verify destroyData throws if userRepository.delete rejects.
                    const userError = new Error("User deletion failed");
                    const existingUsers: IUser[] = [sampleMockUsers[0]].map(
                        (user, index) => ({
                            ...user,
                            id: `user${index + 1}`,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    );

                    vi.mocked(mockFactRepo.count).mockResolvedValue(0);
                    vi.mocked(mockUserRepo.count).mockResolvedValue(
                        existingUsers.length
                    );
                    vi.mocked(mockUserRepo.findAll).mockResolvedValue({
                        data: existingUsers,
                        page: 1,
                        pages: 1,
                        total: existingUsers.length,
                    });
                    vi.mocked(mockUserRepo.delete).mockRejectedValue(userError);

                    await expect(destroyData()).rejects.toThrow(
                        "User deletion failed"
                    );
                });
            });
        });
    });

    describe("CLI Script Usage", () => {
        let originalArgv: string[];

        beforeEach(() => {
            originalArgv = process.argv;
        });

        afterEach(() => {
            process.argv = originalArgv;
        });

        describe("parseArgs Function", () => {
            describe("Basic Flag Parsing", () => {
                it("should parse no arguments as default behavior", () => {
                    // Test parseArgs returns { shouldDestroy: false, maxFacts: undefined } with no flags.
                    process.argv = ["node", "tsx", "seeder.ts"];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(false);
                    expect(result.maxFacts).toBeUndefined();
                });

                it("should ignore unknown flags but process known ones", () => {
                    // Checks that unrecognized arguments are skipped while --limit is still respected.
                    process.argv = [
                        "node",
                        "tsx",
                        "seeder.ts",
                        "--limit",
                        "10",
                        "--unknown",
                        "-p",
                    ];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(false);
                    expect(result.maxFacts).toBe(10);
                });
            });
            describe("Destroy Flag Parsing", () => {
                it("should parse -D flag as destroy operation", () => {
                    // Verifies that -D sets shouldDestroy to true.
                    process.argv = ["node", "tsx", "seeder.ts", "-D"];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(true);
                    expect(result.maxFacts).toBeUndefined();
                });

                it("should parse -d flag as destroy operation (case insensitive)", () => {
                    // Confirm parseArgs treats -d same as -D.
                    process.argv = ["node", "tsx", "seeder.ts", "-d"];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(true);
                    expect(result.maxFacts).toBeUndefined();
                });
            });

            describe("Limit Flag Parsing", () => {
                it("should parse -l flag with numeric value", () => {
                    // Checks that -l <N> correctly sets maxFacts = N.
                    process.argv = ["node", "tsx", "seeder.ts", "-l", "5"];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(false);
                    expect(result.maxFacts).toBe(5);
                });

                it("should parse --limit flag with numeric value", () => {
                    // Ensures --limit <N> correctly sets maxFacts = N.
                    process.argv = [
                        "node",
                        "tsx",
                        "seeder.ts",
                        "--limit",
                        "10",
                    ];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(false);
                    expect(result.maxFacts).toBe(10);
                });

                it("should parse --limit=value format", () => {
                    // Ensures --limit==<N> correctly sets maxFacts = N.
                    process.argv = ["node", "tsx", "seeder.ts", "--limit=15"];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(false);
                    expect(result.maxFacts).toBe(15);
                });

                it("should handle limit of 0", () => {
                    // Confirms that --limit 0 results in maxFacts = 0.
                    process.argv = ["node", "tsx", "seeder.ts", "--limit", "0"];

                    const result = parseArgs();

                    expect(result.shouldDestroy).toBe(false);
                    expect(result.maxFacts).toBe(0);
                });

                describe("Error Handling", () => {
                    it("should exit with error when --limit flag has no value", () => {
                        // Checks that omitting a value after --limit logs an error and exits.
                        const exitSpy = vi
                            .spyOn(process, "exit")
                            .mockImplementation(() => undefined as never);
                        const consoleErrorSpy = vi
                            .spyOn(console, "error")
                            .mockImplementation(() => {});

                        process.argv = ["node", "tsx", "seeder.ts", "--limit"];

                        parseArgs();

                        expect(consoleErrorSpy).toHaveBeenCalledWith(
                            "Error: --limit requires a number".red
                        );
                        expect(exitSpy).toHaveBeenCalledWith(1);

                        exitSpy.mockRestore();
                        consoleErrorSpy.mockRestore();
                    });

                    it("should exit with error when --limit flag has non-numeric value", () => {
                        // Verifies that `--limit abc` logs an error and calls process.exit(1).
                        const exitSpy = vi
                            .spyOn(process, "exit")
                            .mockImplementation(() => undefined as never);
                        const consoleErrorSpy = vi
                            .spyOn(console, "error")
                            .mockImplementation(() => {});

                        process.argv = [
                            "node",
                            "tsx",
                            "seeder.ts",
                            "--limit",
                            "abc",
                        ];

                        parseArgs();

                        expect(consoleErrorSpy).toHaveBeenCalledWith(
                            "Error: --limit requires a number".red
                        );
                        expect(exitSpy).toHaveBeenCalledWith(1);

                        exitSpy.mockRestore();
                        consoleErrorSpy.mockRestore();
                    });

                    it("should exit with error when -l flag has no value", () => {
                        // Confirms -l argument without a following number triggers the same error/exit behavior.
                        const exitSpy = vi
                            .spyOn(process, "exit")
                            .mockImplementation(() => undefined as never);
                        const consoleErrorSpy = vi
                            .spyOn(console, "error")
                            .mockImplementation(() => {});

                        process.argv = ["node", "tsx", "seeder.ts", "-l"];

                        parseArgs();

                        expect(consoleErrorSpy).toHaveBeenCalledWith(
                            "Error: --limit requires a number".red
                        );
                        expect(exitSpy).toHaveBeenCalledWith(1);

                        exitSpy.mockRestore();
                        consoleErrorSpy.mockRestore();
                    });

                    it("should exit with error when -l flag has non-numeric value", () => {
                        // Verifies that `-l xyz` logs an error and calls process.exit(1).
                        const exitSpy = vi
                            .spyOn(process, "exit")
                            .mockImplementation(() => undefined as never);
                        const consoleErrorSpy = vi
                            .spyOn(console, "error")
                            .mockImplementation(() => {});

                        process.argv = [
                            "node",
                            "tsx",
                            "seeder.ts",
                            "-l",
                            "xyz",
                        ];

                        parseArgs();

                        expect(consoleErrorSpy).toHaveBeenCalledWith(
                            "Error: --limit requires a number".red
                        );
                        expect(exitSpy).toHaveBeenCalledWith(1);

                        exitSpy.mockRestore();
                        consoleErrorSpy.mockRestore();
                    });

                    it("should exit with error when --limit= has no value", () => {
                        // Checks that --limit= (empty value) triggers error logging and exit.
                        const exitSpy = vi
                            .spyOn(process, "exit")
                            .mockImplementation(() => undefined as never);
                        const consoleErrorSpy = vi
                            .spyOn(console, "error")
                            .mockImplementation(() => {});

                        process.argv = ["node", "tsx", "seeder.ts", "--limit="];

                        parseArgs();

                        expect(consoleErrorSpy).toHaveBeenCalledWith(
                            "Error: --limit requires a number".red
                        );
                        expect(exitSpy).toHaveBeenCalledWith(1);

                        exitSpy.mockRestore();
                        consoleErrorSpy.mockRestore();
                    });

                    it("should exit with error when --limit= has non-numeric value", () => {
                        // Confirms --limit=notanumber logs the correct error and exits.
                        const exitSpy = vi
                            .spyOn(process, "exit")
                            .mockImplementation(() => undefined as never);
                        const consoleErrorSpy = vi
                            .spyOn(console, "error")
                            .mockImplementation(() => {});

                        process.argv = [
                            "node",
                            "tsx",
                            "seeder.ts",
                            "--limit=notanumber",
                        ];

                        parseArgs();

                        expect(consoleErrorSpy).toHaveBeenCalledWith(
                            "Error: --limit requires a number".red
                        );
                        expect(exitSpy).toHaveBeenCalledWith(1);

                        exitSpy.mockRestore();
                        consoleErrorSpy.mockRestore();
                    });
                });
            });

            describe("Complex Flag Combinations", () => {
                it("should handle flags with destroy and limit in various combinations", () => {
                    // Verifies that combinations of -D/--limit flags correctly set both shouldDestroy and maxFacts.
                    process.argv = [
                        "node",
                        "tsx",
                        "seeder.ts",
                        "--limit",
                        "5",
                        "-D",
                    ];
                    let result = parseArgs();
                    expect(result.shouldDestroy).toBe(true);
                    expect(result.maxFacts).toBe(5);

                    process.argv = [
                        "node",
                        "tsx",
                        "seeder.ts",
                        "-l",
                        "10",
                        "-D",
                    ];
                    result = parseArgs();
                    expect(result.shouldDestroy).toBe(true);
                    expect(result.maxFacts).toBe(10);

                    process.argv = [
                        "node",
                        "tsx",
                        "seeder.ts",
                        "-D",
                        "--limit=7",
                    ];
                    result = parseArgs();
                    expect(result.shouldDestroy).toBe(true);
                    expect(result.maxFacts).toBe(7);

                    process.argv = [
                        "node",
                        "tsx",
                        "seeder.ts",
                        "-D",
                        "-l",
                        "7",
                    ];
                    result = parseArgs();
                    expect(result.shouldDestroy).toBe(true);
                    expect(result.maxFacts).toBe(7);
                });
            });
        });
    });
});
