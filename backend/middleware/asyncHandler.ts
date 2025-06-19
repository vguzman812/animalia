import type { Request, Response, NextFunction, RequestHandler } from "express";

/**
 * @description Higher-order function that wraps asynchronous route handlers.
 *              It captures any promise rejections and forwards them to the next middleware,
 *              which is usually an error-handling middleware.
 *
 * @param fn - Asynchronous route handler function
 * @returns A new function that wraps the original route handler
 */
type AsyncRequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void>;

const asyncHandler = (fn: AsyncRequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Resolve the original asynchronous function.
        // If a promise rejection occurs, it will be caught and passed to the 'next' middleware.
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default asyncHandler;
