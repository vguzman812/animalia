import FactModel from "../models/factModel.ts";
import type { Request, Response } from "express";
import { Types } from "mongoose";
import type { IAuthRequest, IFact } from "../types/index.js";
/**
 * @description Fetch all products
 * @route       GET /api/facts
 * @access      Public
 */
const getFacts = async (req: Request, res: Response) => {
    const pageSize = Number(process.env["PAGINATION_LIMIT"]) || 10;
    const page = Number(req.query["pageNumber"]) || 1;
    const keyword = req.query["keyword"]
        ? {
              animal: {
                  $regex: req.query["keyword"],
                  $options: "i",
              },
          }
        : {};

    const count = await FactModel.countDocuments({ ...keyword });
    const facts = await FactModel.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ createdAt: -1 });
    res.status(200).json({ facts, page, pages: Math.ceil(count / pageSize) });
};

/**
 * @description Fetch one product by id
 * @route       GET /api/facts/:id
 * @access      Public
 */
const getFactById = async (req: Request, res: Response) => {
    const fact = await FactModel.findById(req.params["id"]);
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
    // Sorting facts by the number of likes in descending order and limiting to top 3
    const facts = await FactModel.find({}).sort({ likes: -1 }).limit(3);

    res.status(200).json(facts);
};

/**
 * @description Create fact
 * @route       POST /api/facts/create
 * @access      Private
 */
const createFact = async (req: IAuthRequest, res: Response) => {
    const { animal, source, text, media, wiki } = req.body as IFact;

    // Assuming that req.user._id is available (i.e., user is authenticated)
    if (req.user && req.user._id) {
        const fact = new FactModel({
            user: req.user._id,
            animal,
            source,
            text,
            media,
            wiki,
        });

        const createdFact = await fact.save();

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
    const pageSize = Number(process.env["PAGINATION_LIMIT"]) || 10;
    const page = Number(req.query["pageNumber"]) || 1;

    // Find facts by user ID
    const count = await FactModel.countDocuments({ user: userId });
    const facts = await FactModel.find({ user: userId })
        .sort({ createdAt: -1 })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    if (facts) {
        res.status(200).json({
            facts,
            page,
            pages: Math.ceil(count / pageSize),
        });
    } else {
        res.status(404);
        throw new Error("Facts or user not found.");
    }
};

/**
 * @description Edit fact
 * @route       PUT /api/facts/:id
 * @access      Private
 */
const updateFact = async (req: IAuthRequest, res: Response) => {
    const { animal, source, text, media, wiki } = req.body as IFact;

    const fact = await FactModel.findById(req.params["id"]);

    if (fact) {
        // Authorization check: Make sure the user owns the fact they are trying to updatew new Error("User not authorized to edit this fact");
        const ownerId: Types.ObjectId =
            fact.user instanceof Types.ObjectId ? fact.user : fact.user._id;
        if (!ownerId.equals(req.user!._id)) {
            res.status(401);
            throw new Error("User not authorized to edit this fact");
        }

        // Update fields
        fact.animal = animal || fact.animal;
        fact.source = source || fact.source;
        fact.text = text || fact.text;
        if (media !== undefined) {
            fact.media = media;
        }
        if (wiki !== undefined) {
            fact.wiki = wiki;
        }

        const updatedFact = await fact.save();

        res.status(200).json(updatedFact);
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
    const fact = await FactModel.findById(req.params["id"]);

    if (fact) {
        // Authorization check: Make sure the user owns the fact they are trying to delete
        const ownerId: Types.ObjectId =
            fact.user instanceof Types.ObjectId ? fact.user : fact.user._id;
        if (!ownerId.equals(req.user!._id)) {
            res.status(401);
            throw new Error("User not authorized to delete this fact");
        }

        await FactModel.deleteOne({ _id: fact._id }).catch(() => {
            res.status(500);
            throw new Error("Internal Server Error");
        });

        res.status(200).json({ message: "Fact deleted." });
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
    const fact = await FactModel.findById(req.params["id"]);

    if (fact && req.user?._id) {
        // Check if the user has already liked this fact
        const alreadyLiked = fact.likes.some(
            (likeId) => likeId.toString() === req.user?._id.toString()
        );

        if (alreadyLiked) {
            // Remove the like
            fact.likes = fact.likes.filter(
                (likeId) => likeId.toString() !== req.user?._id.toString()
            );
        } else {
            // Add the like
            fact.likes.push(req.user._id);
        }

        await fact.save();
        res.status(200).json(fact);
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
};
