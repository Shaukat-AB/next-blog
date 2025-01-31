"use client";

import { updatePost } from "@/lib/actions/posts";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";

const EditPostForm = ({ postString }) => {
    const [content, setContent] = useState<String>("");
    const [post, setPost] = useState({
        id: "",
        title: "",
        description: "",
        image: "",
        content: "",
    });
    const modifiedUpdatePost = updatePost.bind(null, post.id, content);

    useEffect(() => {
        const getPost = async () => {
            const parsedPost = await JSON.parse(postString);
            if (!parsedPost?.post) return;
            setPost({ ...parsedPost.post, id: parsedPost.id });
            setContent(parsedPost.post.content);
        };
        getPost();
    }, [postString]);
    return (
        <PostForm
            postAction={modifiedUpdatePost}
            postState={[post, setPost]}
            contentState={[content, setContent]}
        />
    );
};

export default EditPostForm;
