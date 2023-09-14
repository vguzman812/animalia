import asyncHandler from "../middleware/asyncHandler.js";
import Fact from "../models/factModel.js";

/**
 * @description Fetch all products
 * @route       GET /api/facts
 * @access      Public
 */
const getFacts = asyncHandler(async (req, res) => {
	console.log("Hello from /api/facts");
	const facts = await Fact.find({});
	res.status(200).json(facts);
});

/**
 * @description Fetch one product by id
 * @route       GET /api/facts/:id
 * @access      Public
 */
const getFactById = asyncHandler(async (req, res) => {
	console.log(`Hello from /facts/:id. id is: ${req.params.id}`);

	const fact = await Fact.findById(req.params.id);
	if (fact) {
		res.status(200).json(fact);
	} else {
		res.status(404);
		throw new Error("Resource not found.");
	}
});

/**
 * @description Create fact
 * @route       POST /api/facts/create
 * @access      Private
 */
const createFact = asyncHandler(async (req, res) => {
	console.log(`Hello from /facts/create create fact`);
	const { animal, source, text, media, wiki } = req.body;

	// Assuming that req.user._id is available (i.e., user is authenticated)
	if (req.user && req.user._id) {
		const fact = new Fact({
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
});

/**
 * @description Get all facts from a certain user
 * @route       GET /api/facts/user/:userId
 * @access      Public
 */
const getFactsByUser = asyncHandler(async (req, res) => {
	const { userId } = req.params;

	// Find facts by user ID
	const facts = await Fact.find({ user: userId });

	if (facts) {
		res.status(200).json(facts);
	} else {
		res.status(404);
		throw new Error("Facts or user not found.");
	}
});

/**
 * @description Edit fact
 * @route       PUT /api/facts/:id
 * @access      Private
 */
const editFact = asyncHandler(async (req, res) => {
	console.log(`Hello from /facts/:id/edit. id is: ${req.params.id}`);
	const { animal, source, text, media, wiki } = req.body;

	const fact = await Fact.findById(req.params.id);

	if (fact) {
		// Check if the fact belongs to the user making the request
		if (fact.user.toString() !== req.user._id.toString()) {
			res.status(401);
			throw new Error("User not authorized to edit this fact");
		}

		// Update fields
		fact.animal = animal;
		fact.source = source;
		fact.text = text;
		fact.media = media;
		fact.wiki = wiki;

		const updatedFact = await fact.save();

		res.status(200).json(updatedFact);
	} else {
		res.status(404);
		throw new Error("Resource not found.");
	}
});

export { getFactById, getFacts, createFact, getFactsByUser, editFact };
