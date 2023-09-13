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

const router = express.Router();

router.route("/").get(getAllUsers).post(registerUser);

router.route("/login").post(authUser);

router.route("/logout").post(logoutUser);

router.route("/profile").get(getUserProfile).put(updateUserProfile);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

export default router;
