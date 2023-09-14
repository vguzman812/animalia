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

router.route("/").get(getFacts);

router.route("/create").post(protect, createFact);

router.route("/top").get(getTopFacts);

router
	.route("/:id")
	.get(getFactById)
	.put(protect, updateFact)
	.delete(protect, deleteFact);

router.route("/:id/like").post(protect, likeFact);

router.route("/user/:id").get(getFactsByUser);

export default router;
