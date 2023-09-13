import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

/**
 * @description Auth user & get token
 * @route       POST /api/users/login
 * @access      Public
 */
const authUser = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/login");
	res.send("auth user");
});

/**
 * @description Register user
 * @route       POST /api/users
 * @access      Public
 */
const registerUser = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/register");
	res.send("register user");
});

/**
 * @description Log out user & clear cookie
 * @route       POST /api/users/logout
 * @access      Private
 */
const logoutUser = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/logout");
	res.send("logout user");
});

/**
 * @description Get user profile
 * @route       GET /api/users/profile
 * @access      Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/profile get");
	res.send("get user profile");
});

/**
 * @description Update user profile
 * @route       PUT /api/users/profile
 * @access      Private
 */
const updateUserProfile = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/profile update");
	res.send("update user profile");
});

/**
 * @description Get all users
 * @route       GET /api/users
 * @access      Private/Admin
 */
const getAllUsers = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users");
	res.send("get all users");
});

/**
 * @description Get one user
 * @route       GET /api/users/:id
 * @access      Private/Admin
 */
const getUser = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/:id get");
	res.send("get one user");
});

/**
 * @description Delete one user
 * @route       DELETE /api/users/:id
 * @access      Private/Admin
 */
const deleteUser = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/:id delete");
	res.send("delete one user");
});

/**
 * @description Update one user
 * @route       PUT /api/users/:id
 * @access      Private/Admin
 */
const updateUser = asyncHandler(async (req, res) => {
	console.log("Hello from /api/users/:id update");
	res.send("update one user");
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUser,
	getUserProfile,
	getAllUsers,
	updateUser,
	updateUserProfile,
	deleteUser,
};
