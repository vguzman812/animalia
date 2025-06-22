import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcryptjs";
import type { IUser, IUserMethods } from "../../types/index.js";

// MongoDB-specific user interface that extends the base IUser
interface IMongoUser extends Omit<IUser, "id">, mongoose.Document {
    _id: mongoose.Types.ObjectId;
}

const userSchema = new Schema<
    IMongoUser,
    Model<IMongoUser, unknown, IUserMethods>,
    IUserMethods
>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (
    this: IMongoUser,
    enteredPassword: string
): Promise<boolean> {
    return bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export const MongoUser = mongoose.model<IMongoUser>("User", userSchema);
export type { IMongoUser };
