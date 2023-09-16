import express from "express";
import {
	createFact,
	deleteFact,
	getFactById,
	getFacts,
	getFactsByUser,
	getTopFacts,
	likeFact,
	updateFact,
} from "../controllers/factController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to get all facts
// Access: Public
router.route("/").get(getFacts);

// Route to create a new fact
// Access: Private (only authenticated users)
router.route("/create").post(protect, createFact);

// Route to get top facts
// Access: Public
router.route("/top").get(getTopFacts);

// Route to perform various operations on a fact by its ID
// Access: Varies depending on operation
router
	.route("/:id")
	.get(getFactById) // Public
	.put(protect, updateFact) // Private
	.delete(protect, deleteFact); // Private

// Route to like a fact by its ID
// Access: Private (only authenticated users)
router.route("/:id/like").post(protect, likeFact);

// Route to get facts by a user's ID
// Access: Public
router.route("/user/:userId").get(getFactsByUser);

export default router;
