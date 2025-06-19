import jwt from "jsonwebtoken";
import type { Response, NextFunction } from "express";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
import type { IAuthRequest, ITokenPayload } from "../types/index.js";

/**
 * @description Middleware to protect routes. It verifies the JWT token
 *              and adds the user object to the request.
 */
export const protect = asyncHandler(
    async (req: IAuthRequest, res: Response, next: NextFunction) => {
        // Read the JWT from the cookie
        const token = req.cookies["jwt"] as string | undefined;

        if (token) {
            try {
                // Verify the token and decode its payload
                const jwtSecret = process.env["JWT_SECRET"];
                if (!jwtSecret) {
                    res.status(500);
                    throw new Error("JWT_SECRET is not configured");
                }

                const decoded = jwt.verify(token, jwtSecret) as ITokenPayload;

                // Find the user corresponding to the decoded userId
                // and attach it to the request object
                const user = await User.findById(decoded.userId).select(
                    "-password"
                );

                if (!user) {
                    res.status(401);
                    throw new Error("Not authorized, user not found.");
                }

                req.user = user;
                next();
            } catch (error) {
                console.error(error);
                res.status(401);
                throw new Error("Not authorized, token failed.");
            }
        } else {
            res.status(401);
            throw new Error("Not authorized, no token.");
        }
    }
);

/**
 * @description Middleware to check if the user is an admin.
 */
export const admin = (req: IAuthRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as admin.");
    }
};
