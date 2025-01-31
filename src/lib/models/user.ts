import mongoose from "mongoose";

const userSchema = new mongoose.Schema<any>(
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

export const User = mongoose.models.User || mongoose.model("User", userSchema);
