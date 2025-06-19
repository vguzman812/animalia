import mongoose from "mongoose";
import User from "./userModel.js";
import type { IFact } from "../types/index.js";

const factSchema = new mongoose.Schema<IFact>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: User,
        },
        animal: {
            type: String,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        media: {
            type: String,
            required: false,
        },
        wiki: {
            type: String,
            required: false,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Fact = mongoose.model<IFact>("Fact", factSchema);

export default Fact;
