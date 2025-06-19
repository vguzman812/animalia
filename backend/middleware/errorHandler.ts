import type {
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler,
} from "express";
import mongoose from "mongoose";

/**
 * @description Middleware for handling "Not Found" errors.
 */
export const notFound = (req: Request, res: Response, next: NextFunction) => {
    // Create a new Error object with a message containing the requested URL
    const error = new Error(`Not Found - ${req.originalUrl}`);

    // Set the response status code to 404 (Not Found)
    res.status(404);

    // Pass the error object to the next middleware
    next(error);
};

interface ErrorWithName extends Error {
    name: string;
    kind?: string;
}

/**
 * @description Global error handler middleware.
 */
export const errorHandler: ErrorRequestHandler = (
    err: ErrorWithName,
    _req: Request,
    res: Response
) => {
    // Determine the status code. Default to 500 if the current status code is 200
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Check for a Mongoose CastError related to ObjectId
    if (err instanceof mongoose.Error.CastError && err.kind === "ObjectId") {
        message = "Resource not found.";
        statusCode = 404;
    }

    // Send the response with the determined status code, error message,
    // and optionally the error stack if not in production
    res.status(statusCode).json({
        message,
        stack:
            process.env["NODE_ENV"] === "production"
                ? "Pancake Stack"
                : err.stack,
    });
};
