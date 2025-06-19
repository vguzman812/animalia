import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcryptjs";
import type { IUser, IUserMethods } from "../types/index.js";

const userSchema = new Schema<
    IUser,
    Model<IUser, unknown, IUserMethods>,
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
    this: IUser,
    enteredPassword: string
) {
    return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model<IUser>("User", userSchema);

export default User;
