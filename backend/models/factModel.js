import mongoose from "mongoose"

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
        required: true,
    },
    wiki: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const Fact = mongoose.model("Fact", factSchema)

export default Fact