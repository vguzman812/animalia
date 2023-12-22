import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

/**
 * @description Middleware to protect routes. It verifies the JWT token
 *              and adds the user object to the request.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const protect = asyncHandler(async (req, res, next) => {
  // Read the JWT from the cookie
  let token = req.cookies.jwt;

  if (token) {
    try {
      // Verify the token and decode its payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user corresponding to the decoded userId
      // and attach it to the request object
      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized, token failed.');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token.');
  }
});

/**
 * @description Middleware to check if the user is an admin.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as admin.');
  }
};

export { admin, protect };
