import express from "express";
import { createFact, getFactById, getFacts, getFactsByUser } from "../controllers/factController.js";
import {protect} from "../middleware/authMiddleware.js"

const router = express.Router();

router.route("/").get(getFacts).post(protect, createFact);

router.route("/:id").get(getFactById);

router.route("/user/:id").get(getFactsByUser)


export default router;
