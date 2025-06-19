// Import jwt for token generation
import jwt from "jsonwebtoken";
import type { Response } from "express";
import type { Types } from "mongoose";

// Function to generate a JWT token and set it as an HTTP-only cookie
const generateToken = (res: Response, userId: string | Types.ObjectId) => {
    // Make sure our secret is actually set
    const secret = process.env["JWT_SECRET"];
    if (!secret) {
        throw new Error("JWT_SECRET environment variable is not configured");
    }

    // Create a JWT token
    const token = jwt.sign(
        { userId: userId.toString() },
        secret,
        { expiresIn: "1d" } // Token expires in 1 day
    );

    // Set the JWT as an HTTP-only cookie
    // This prevents client-side JavaScript from accessing the token, improving security
    res.cookie("jwt", token, {
        httpOnly: true, // Cookie can't be accessed by client-side script
        secure: process.env["NODE_ENV"] !== "development", // Use HTTPS in production
        sameSite: "strict", // Strict same-site policy for cookie
        maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours (in milliseconds)
    });
};

// Export the function for use in other parts of the application
export default generateToken;
