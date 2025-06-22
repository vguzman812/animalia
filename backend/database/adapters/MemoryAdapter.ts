import type {
    IDatabaseAdapter,
    IUserRepository,
    IFactRepository,
} from "../../types/index.ts";
import { MemoryUserRepository } from "../repositories/memory/MemoryUserRepository.js";
import { MemoryFactRepository } from "../repositories/memory/MemoryFactRepository.js";

export class MemoryAdapter implements IDatabaseAdapter {
    private userRepository: MemoryUserRepository;
    private factRepository: MemoryFactRepository;

    constructor() {
        this.userRepository = new MemoryUserRepository();
        this.factRepository = new MemoryFactRepository();
    }

    async connect(): Promise<void> {
        console.log("Connected to in-memory database");
        return Promise.resolve();
    }

    async disconnect(): Promise<void> {
        this.userRepository.clear();
        this.factRepository.clear();
        console.log("In-memory database cleared");
        return Promise.resolve();
    }

    getUserRepository(): IUserRepository {
        return this.userRepository;
    }

    getFactRepository(): IFactRepository {
        return this.factRepository;
    }
}
