import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import { getFactById, getFacts } from "../controllers/factController.js";

const router = express.Router();

router.route("/").get(getFacts)

router.route("/:id").getFactById

export default router;
