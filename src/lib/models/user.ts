import { TUser } from "@/types";
import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema<TUser>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 48,
        },
        password: {
            type: String,
            min: 8,
        },
        image: {
            type: String,
            default: "",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const User: Model<TUser> =
    mongoose.models.User || mongoose.model<TUser>("User", userSchema);
