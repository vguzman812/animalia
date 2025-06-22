import express from 'express';
import {
  createFact,
  deleteFact,
  getFactById,
  getFacts,
  getFactsByUser,
  getTopFacts,
  likeFact,
  updateFact,
} from '../controllers/factController.js';
import { protect } from '../middleware/authMiddleware.js';
import asyncHandler from '../middleware/asyncHandler.js';

const router = express.Router();

// Route to get all facts
// Access: Public
router.route('/').get(asyncHandler(getFacts));

// Route to create a new fact
// Access: Private (only authenticated users)
router.route('/create').post(asyncHandler(protect), asyncHandler(createFact));

// Route to get top facts
// Access: Public
router.route('/top').get(asyncHandler(getTopFacts));

// Route to perform various operations on a fact by its ID
// Access: Varies depending on operation
router
  .route('/:id')
  .get(asyncHandler(getFactById)) // Public
  .put(asyncHandler(protect), asyncHandler(updateFact)) // Private
  .delete(asyncHandler(protect), asyncHandler(deleteFact)); // Private

// Route to like a fact by its ID
// Access: Private (only authenticated users)
router.route('/:id/like').post(asyncHandler(protect), asyncHandler(likeFact));

// Route to get facts by a user's ID
// Access: Public
router.route('/user/:userId').get(asyncHandler(getFactsByUser));

export default router;
