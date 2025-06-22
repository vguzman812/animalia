import type { Request } from "express";

// Base entity interface
export interface BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

// User interfaces
export interface User {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface IUser extends BaseEntity, User {}

export interface IUserMethods {
    matchPassword(enteredPassword: string): Promise<boolean>;
}

export interface IUserInput {
    name: string;
    email: string;
    password: string;
}

// Fact interfaces
export interface Fact {
    animal: string;
    source: string;
    text: string;
    media?: string;
    wiki?: string;
}

export interface IFact extends BaseEntity, Fact {
    userId: string;
    likes: string[];
}

// Request interfaces with user
export interface IAuthRequest extends Request {
    user?: IUser;
}

// Pagination interfaces
export interface IPaginationQuery {
    pageNumber?: string;
    keyword?: string;
}

// Response interfaces
export interface IUserResponse {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
}

export interface IPaginatedResponse<T> {
    data: T[];
    page: number;
    pages: number;
}

// Token payload
export interface ITokenPayload {
    userId: string;
}

// Repository interfaces
export interface IUserRepository {
    findById(id: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    create(
        userData: Omit<IUser, "id" | "createdAt" | "updatedAt">
    ): Promise<IUser>;
    update(
        id: string,
        userData: Partial<Omit<IUser, "id" | "createdAt" | "updatedAt">>
    ): Promise<IUser | null>;
    delete(id: string): Promise<boolean>;
    findAll(options?: PaginationOptions): Promise<IPaginatedResult<IUser>>;
    count(): Promise<number>;
}

export interface IFactRepository {
    findById(id: string): Promise<IFact | null>;
    findAll(
        options?: PaginationOptions & { keyword?: string }
    ): Promise<IPaginatedResult<IFact>>;
    findByUserId(
        userId: string,
        options?: PaginationOptions
    ): Promise<IPaginatedResult<IFact>>;
    create(
        factData: Omit<IFact, "id" | "createdAt" | "updatedAt">
    ): Promise<IFact>;
    update(
        id: string,
        factData: Partial<Omit<IFact, "id" | "createdAt" | "updatedAt">>
    ): Promise<IFact | null>;
    delete(id: string): Promise<boolean>;
    getTopLiked(limit: number): Promise<IFact[]>;
    count(keyword?: string): Promise<number>;
}

export interface PaginationOptions {
    page?: number;
    limit?: number;
}

export interface IPaginatedResult<T> {
    data: T[];
    page: number;
    pages: number;
    total: number;
}

// Database configuration
export type DatabaseType = "mongodb" | "postgresql" | "sqlite" | "memory" ;

export interface DatabaseConfig {
    type: DatabaseType;
    mongodb?: {
        connectionString?: string;
        username?: string;
        password?: string;
    };
    postgresql?: {
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
    };
    sqlite?: {
        path: string;
    };
}

// Database adapter interface
export interface IDatabaseAdapter {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getUserRepository(): IUserRepository;
    getFactRepository(): IFactRepository;
}
