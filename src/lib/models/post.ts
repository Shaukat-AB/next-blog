import { TPost } from "@/types";
import mongoose, { Model } from "mongoose";

const postSchema = new mongoose.Schema<TPost>(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 120,
        },
        description: {
            type: String,
            default: "",
            max: 420,
        },
        image: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Post: Model<TPost> =
    mongoose.models.Post || mongoose.model<TPost>("Post", postSchema);
