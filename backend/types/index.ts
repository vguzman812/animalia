import type { Request } from "express";
import type { Document, Types } from "mongoose";

// User interfaces

export interface User {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface IUser extends Document, IUserMethods, User {
    _id: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

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

export interface IFact extends Document, Fact {
    _id: Types.ObjectId;
    user: Types.ObjectId | IUser;
    likes: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
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
    _id: string;
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
