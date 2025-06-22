import DatabaseManager from "../config/db.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import type { IAuthRequest, IUserInput } from "../types/index.js";

/**
 * @description Auth user & get token
 * @route       POST /api/users/login
 * @access      Public
 */
const authUser = async (req: Request, res: Response) => {
    const { email, password } = req.body as IUserInput;
    const userRepository = DatabaseManager.getInstance().getUserRepository();

    const user = await userRepository.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
        generateToken(res, user.id);
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
};

/**
 * @description Register user
 * @route       POST /api/users
 * @access      Public
 */
const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body as IUserInput;
    const userRepository = DatabaseManager.getInstance().getUserRepository();

    // Check for user existence via email
    const userExists = await userRepository.findByEmail(email);
    if (userExists) {
        res.status(400);
        throw new Error("User already exists.");
    } else {
        // Create a new user if the email doesn't exist
        const user = await userRepository.create({
            name,
            email,
            password,
            isAdmin: false,
        });

        if (user) {
            generateToken(res, user.id);
            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(400);
            throw new Error("Invalid user data.");
        }
    }
};

/**
 * @description Log out user & clear cookie
 * @route       POST /api/users/logout
 * @access      Private
 */
const logoutUser = (_req: Request, res: Response) => {
    // Clear the JWT cookie
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "logged out successfully" });
};

/**
 * @description Get user profile
 * @route       GET /api/users/profile
 * @access      Private
 */
const getUserProfile = async (req: IAuthRequest, res: Response) => {
    const userRepository = DatabaseManager.getInstance().getUserRepository();
    const user = await userRepository.findById(req.user?.id || "");

    if (user) {
        generateToken(res, user.id);
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
};

/**
 * @description Update user profile
 * @route       PUT /api/users/profile
 * @access      Private
 */
const updateUserProfile = async (req: IAuthRequest, res: Response) => {
    const userRepository = DatabaseManager.getInstance().getUserRepository();
    const { name, email, password } = req.body as Partial<IUserInput>;

    const updatedUser = await userRepository.update(req.user?.id || "", {
        name,
        email,
        password,
    });

    if (updatedUser) {
        res.status(200).json({
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
};

/**
 * @description Get all users
 * @route       GET /api/users
 * @access      Private/Admin
 */
const getAllUsers = async (req: Request, res: Response) => {
    const pageSize = Number(process.env["PAGINATION_LIMIT"]) || 10;
    const page = Number(req.query["pageNumber"]) || 1;

    const userRepository = DatabaseManager.getInstance().getUserRepository();
    const result = await userRepository.findAll({ page, limit: pageSize });

    res.status(200).json({
        users: result.data,
        page: result.page,
        pages: result.pages,
    });
};

/**
 * @description Get one user
 * @route       GET /api/users/:id
 * @access      Private/Admin
 */
const getUser = async (req: Request, res: Response) => {
    const userRepository = DatabaseManager.getInstance().getUserRepository();
    const user = await userRepository.findById(req.params["id"] || "");

    if (user) {
        // Return user without password
        const { password, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
};

/**
 * @description Delete one user
 * @route       DELETE /api/users/:id
 * @access      Private/Admin
 */
const deleteUser = async (req: Request, res: Response) => {
    console.log("Hello from /api/users/:id delete");
    const userRepository = DatabaseManager.getInstance().getUserRepository();
    const user = await userRepository.findById(req.params["id"] || "");

    if (user) {
        if (user.isAdmin) {
            res.status(400);
            throw new Error("Cannot delete admin user");
        }

        const deleted = await userRepository.delete(user.id);
        if (deleted) {
            res.status(200).json({ message: "User successfully deleted." });
        } else {
            res.status(500);
            throw new Error("Failed to delete user.");
        }
    } else {
        res.status(404);
        throw new Error("User not found");
    }
};

/**
 * @description Update one user
 * @route       PUT /api/users/:id
 * @access      Private/Admin
 */
const updateUser = async (req: Request, res: Response) => {
    console.log("Hello from /api/users/:id update");
    const userRepository = DatabaseManager.getInstance().getUserRepository();
    const { name, email, isAdmin } = req.body as Partial<
        IUserInput & { isAdmin: boolean }
    >;

    const updatedUser = await userRepository.update(req.params["id"] || "", {
        name,
        email,
        isAdmin,
    });

    if (updatedUser) {
        res.status(200).json({
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
};

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
