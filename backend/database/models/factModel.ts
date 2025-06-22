import mongoose, { Schema } from "mongoose";
import type { IFact } from "../../types/index.ts";

// MongoDB-specific fact interface
interface IMongoFact
    extends Omit<IFact, "id" | "userId" | "likes">,
        mongoose.Document {
    _id: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
}

const factSchema = new Schema<IMongoFact>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
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

export const MongoFact = mongoose.model<IMongoFact>("Fact", factSchema);
export type { IMongoFact };
