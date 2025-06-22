import jwt from "jsonwebtoken";
import DatabaseManager from "../config/database.js";
import type { Request, Response, NextFunction } from "express";
import type { IAuthRequest, ITokenPayload } from "../types/index.js";

// User must be authenticated
const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;

    // Read the token from the cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(
                token,
                process.env["JWT_SECRET"] || ""
            ) as ITokenPayload;
            const userRepository =
                DatabaseManager.getInstance().getUserRepository();
            const user = await userRepository.findById(decoded.userId);

            if (user) {
                (req as IAuthRequest).user = user;
                next();
            } else {
                res.status(401);
                throw new Error("Not authorized, user not found");
            }
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
};

// User must be an admin
const admin = (req: Request, res: Response, next: NextFunction) => {
    const authReq = req as IAuthRequest;
    if (authReq.user && authReq.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
};

export { protect, admin };
