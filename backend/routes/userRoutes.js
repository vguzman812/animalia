import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import {
	authUser,
	registerUser,
	logoutUser,
	getUser,
	getUserProfile,
	getAllUsers,
	updateUser,
	updateUserProfile,
	deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getAllUsers).post(registerUser);

router.route("/login").post(authUser);

router.route("/logout").post(logoutUser);

router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

router
	.route("/:id")
	.get(protect, admin, getUser)
	.delete(protect, admin, deleteUser)
	.put(protect, admin, updateUser);

export default router;
