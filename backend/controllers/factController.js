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

export { getFactById, getFacts };
