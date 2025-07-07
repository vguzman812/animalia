import DatabaseManager from "../config/db.js";
import type { Request, Response } from "express";
import type { IAuthRequest, IFact } from "../types/index.js";

/**
 * @description Fetch all facts
 * @route       GET /api/facts
 * @access      Public
 */
const getFacts = async (req: Request, res: Response) => {
    const pageSize = Number(process.env.PAGINATION_LIMIT) || 10;
    const page = Number(req.query.pageNumber) || 1;

    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const result = await factRepository.findAll({
        page,
        limit: pageSize,
    });

    res.status(200).json({
        facts: result.data,
        page: result.page,
        pages: result.pages,
    });
};

/**
 * @description Search facts by animal name
 * @route       GET /api/facts/search
 * @access      Public
 */
const searchFacts = async (req: Request, res: Response) => {
    const pageSize = Number(process.env.PAGINATION_LIMIT) || 10;
    const page = Number(req.query.pageNumber) || 1;
    const animal = req.query.animal as string;

    // Validate that at least one search parameter is provided
    if (!animal || animal.trim() === "") {
        res.status(400).json({
            message:
                "At least one search parameter (e.g., 'animal') is required",
        });
        return;
    }

    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const result = await factRepository.search(animal, {
        page,
        limit: pageSize,
    });

    res.status(200).json({
        facts: result.data,
        page: result.page,
        pages: result.pages,
    });
};

/**
 * @description Fetch one fact by id
 * @route       GET /api/facts/:id
 * @access      Public
 */
const getFactById = async (req: Request, res: Response) => {
    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const fact = await factRepository.findById(req.params.id || "");

    if (fact) {
        res.status(200).json(fact);
    } else {
        res.status(404);
        throw new Error("Resource not found.");
    }
};

/**
 * @description Get top liked facts
 * @route       GET /api/facts/top
 * @access      Public
 */
const getTopFacts = async (_req: Request, res: Response) => {
    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const facts = await factRepository.getTopLiked(3);

    res.status(200).json(facts);
};

/**
 * @description Create fact
 * @route       POST /api/facts/create
 * @access      Private
 */
const createFact = async (req: IAuthRequest, res: Response) => {
    const { animal, source, text, media, wiki } = req.body as IFact;

    // Assuming that req.user.id is available (i.e., user is authenticated)
    if (req.user?.id) {
        const factRepository =
            DatabaseManager.getInstance().getFactRepository();

        const createdFact = await factRepository.create({
            userId: req.user.id,
            animal,
            source,
            text,
            media,
            wiki,
            likes: [],
        });

        res.status(201).json(createdFact);
    } else {
        res.status(401);
        throw new Error("User not authorized");
    }
};

/**
 * @description Get all facts from a certain user
 * @route       GET /api/facts/user/:userId
 * @access      Public
 */
const getFactsByUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const pageSize = Number(process.env.PAGINATION_LIMIT) || 10;
    const page = Number(req.query.pageNumber) || 1;

    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const result = await factRepository.findByUserId(userId, {
        page,
        limit: pageSize,
    });

    res.status(200).json({
        facts: result.data,
        page: result.page,
        pages: result.pages,
    });
};

/**
 * @description Edit fact
 * @route       PUT /api/facts/:id
 * @access      Private
 */
const updateFact = async (req: IAuthRequest, res: Response) => {
    const { animal, source, text, media, wiki } = req.body as IFact;
    const factRepository = DatabaseManager.getInstance().getFactRepository();

    const fact = await factRepository.findById(req.params.id || "");

    if (fact) {
        // Authorization check: Make sure the user owns the fact they are trying to update
        if (fact.userId !== req.user?.id) {
            res.status(401);
            throw new Error("User not authorized to edit this fact");
        }

        // Update fields
        const updatedFact = await factRepository.update(fact.id, {
            animal: animal || fact.animal,
            source: source || fact.source,
            text: text || fact.text,
            media: media ?? fact.media,
            wiki: wiki ?? fact.wiki,
        });

        if (updatedFact) {
            res.status(200).json(updatedFact);
        } else {
            res.status(500);
            throw new Error("Failed to update fact");
        }
    } else {
        res.status(404);
        throw new Error("Resource not found.");
    }
};

/**
 * @description Delete one fact
 * @route       DELETE /api/facts/:id
 * @access      Private
 */
const deleteFact = async (req: IAuthRequest, res: Response) => {
    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const fact = await factRepository.findById(req.params.id || "");

    if (fact) {
        // Authorization check: Make sure the user owns the fact they are trying to delete
        if (fact.userId !== req.user?.id) {
            res.status(401);
            throw new Error("User not authorized to delete this fact");
        }

        const deleted = await factRepository.delete(fact.id);
        if (deleted) {
            res.status(200).json({ message: "Fact deleted." });
        } else {
            res.status(500);
            throw new Error("Failed to delete fact");
        }
    } else {
        res.status(404);
        throw new Error("Resource not found.");
    }
};

/**
 * @description Like/Unlike a fact
 * @route       POST /api/facts/:id/like
 * @access      Private
 */
const likeFact = async (req: IAuthRequest, res: Response) => {
    const factRepository = DatabaseManager.getInstance().getFactRepository();
    const fact = await factRepository.findById(req.params.id || "");

    if (fact && req.user?.id) {
        // Check if the user has already liked this fact
        const alreadyLiked = fact.likes.includes(req.user.id);

        let updatedLikes: string[];
        if (alreadyLiked) {
            // Remove the like
            updatedLikes = fact.likes.filter(
                (likeId) => likeId !== req.user!.id
            );
        } else {
            // Add the like
            updatedLikes = [...fact.likes, req.user.id];
        }

        const updatedFact = await factRepository.update(fact.id, {
            likes: updatedLikes,
        });

        if (updatedFact) {
            res.status(200).json(updatedFact);
        } else {
            res.status(500);
            throw new Error("Failed to update fact");
        }
    } else {
        res.status(404);
        throw new Error("Resource not found.");
    }
};

export {
    getFactById,
    getFacts,
    createFact,
    getFactsByUser,
    updateFact,
    deleteFact,
    likeFact,
    getTopFacts,
    searchFacts,
};
