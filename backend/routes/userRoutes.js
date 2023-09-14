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

// Route to get all users and to register a new user
// Access: getAllUsers is private and admin only, registerUser is public
router.route("/").get(protect, admin, getAllUsers).post(registerUser);

// Route for user authentication (login)
// Access: Public
router.route("/login").post(authUser);

// Route for user logout
// Access: Public (It's better if it's Private to invalidate token)
router.route("/logout").post(logoutUser);

// Route to get and update user profile
// Access: Private (only authenticated users)
router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

// Route to get, delete, and update a user by their ID
// Access: Private/Admin (only admin can delete or update other users)
router
	.route("/:id")
	.get(protect, admin, getUser)
	.delete(protect, admin, deleteUser)
	.put(protect, admin, updateUser);

export default router;
