import express from "express";
import {
	createFact,
	deleteFact,
	getFactById,
	getFacts,
	getFactsByUser,
	updateFact,
} from "../controllers/factController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getFacts);

router.route("/:id").get(getFactById).put(protect, updateFact).delete(protect, deleteFact);

router.route("/user/:id").get(getFactsByUser);

router.route("/create").post(protect, createFact);

export default router;
