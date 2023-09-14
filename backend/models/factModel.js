import mongoose from "mongoose"
import User from "./userModel.js"

const factSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
})

const Fact = mongoose.model("Fact", factSchema)

export default Fact