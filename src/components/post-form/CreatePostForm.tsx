"use client";

import { createPost } from "@/lib/actions/posts";
import { useState } from "react";
import PostForm from "./PostForm";

const CreatePostForm = () => {
    const [content, setContent] = useState<String>("");
    const [post, setPost] = useState({
        id: "",
        title: "",
        description: "",
        image: "",
        content: "",
    });
    const updatedCreatePost = createPost.bind(null, content);

    return (
        <PostForm
            postAction={updatedCreatePost}
            postState={[post, setPost]}
            contentState={[content, setContent]}
        />
    );
};

export default CreatePostForm;
