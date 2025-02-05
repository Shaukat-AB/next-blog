"use server";

import { Post } from "../models/post";
import { connnectToDb } from "../utils";

export const getPosts = async () => {
    try {
        await connnectToDb();
        const savedPosts = await Post.find({});
        return savedPosts;
    } catch (err) {
        console.log("getPosts Error: ", err);
        throw new Error("Posts Fetch failed");
    }
};

export const getPostById = async (id: string) => {
    try {
        await connnectToDb();
        const savedPost = await Post.findById(id);
        return savedPost;
    } catch (err) {
        console.log("getPostById Error: ", err);
        throw new Error("Post Fetch failed");
    }
};

export const createPost = async (
    content: String,
    state: Object,
    formData: FormData
) => {
    const { title, description, image } = Object.fromEntries(formData);

    //Validation
    if (!title || !content || !description) {
        return {
            message: "Title, description and post text content are required",
        };
    }

    try {
        await connnectToDb();
        const savedPost = await Post.findOne({ title });
        if (savedPost) {
            return { message: "Post already exists" };
        }
        const newPost = new Post({
            title,
            description,
            image,
            content,
        });
        await newPost.save();
    } catch (err) {
        console.log("createPost Error: ", err);
        throw new Error("Create post failed");
    }
};

export const deletePost = async (id: string) => {
    try {
        const savedPost = await Post.findByIdAndDelete(id);
    } catch (err) {
        console.log("deletePost Error: ", err);
        throw new Error("Delete post failed");
    }
};

export const updatePost = async (
    id: String,
    content: String,
    state: Object,
    formData: FormData
) => {
    const { title, description, image } = Object.fromEntries(formData);

    //Validation

    if (!title || !content || !description) {
        return {
            message: "Title, description and post text content are required",
        };
    }

    try {
        await connnectToDb();
        const updatedPost = {
            title,
            description,
            image,
            content,
        };
        const savedPost = await Post.findByIdAndUpdate(
            id,
            {
                $set: updatedPost,
            },
            { new: true }
        );

        if (!savedPost) {
            return { message: "Post do not exists" };
        }
    } catch (err) {
        console.log("updatePost Error: ", err);
        throw new Error("Update post failed");
    }
};
