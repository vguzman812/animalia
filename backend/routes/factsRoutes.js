import express from "express"
import asyncHandler from "../middleware/asyncHandler.js";
import Fact from "../models/factModel.js"


const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    console.log("Hello from /api/facts")
    const facts = await Fact.find({})
    res.json(facts);
}));

router.get("/:id", asyncHandler(async (req, res) => {
    console.log(`Hello from /facts/:id. id is: ${req.params.id}`)

    const fact = await Fact.findById(req.params.id)
    if (fact) {
        res.json(fact)
    } else {
        res.status(404)
        throw new Error('Resource not found.')
    }
}));

export default router