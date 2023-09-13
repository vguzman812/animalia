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
	res.json(facts);
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
		res.json(fact);
	} else {
		res.status(404);
		throw new Error("Resource not found.");
	}
});

/**
 * @description Create fact
 * @route       POST /api/facts
 * @access      Private
 */
const createFact = asyncHandler(async (req, res) => {
	console.log(`Hello from /facts create fact`);
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
	  res.json(facts);
	} else {
	  res.status(404);
	  throw new Error('Facts or user not found.');
	}
  });

export { getFactById, getFacts, createFact, getFactsByUser };
