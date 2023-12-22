/**
 * @description Higher-order function that wraps asynchronous route handlers.
 *              It captures any promise rejections and forwards them to the next middleware,
 *              which is usually an error-handling middleware.
 *
 * @param {Function} fn - Asynchronous route handler function
 *
 * @returns {Function} - A new function that wraps the original route handler
 */
const asyncHandler = (fn) => (req, res, next) => {
  // Resolve the original asynchronous function.
  // If a promise rejection occurs, it will be caught and passed to the 'next' middleware.
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
