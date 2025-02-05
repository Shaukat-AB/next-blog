"use client";

import { updatePost } from "@/lib/actions/posts";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";

const EditPostForm = ({ postStringified }: { postStringified: string }) => {
    const [content, setContent] = useState<string>("");
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
            const parsedPost = await JSON.parse(postStringified);
            if (!parsedPost?.post) return;
            setPost({ ...parsedPost.post, id: parsedPost.id });
            setContent(parsedPost.post.content);
        };
        getPost();
    }, [postStringified]);
    return (
        <PostForm
            postAction={modifiedUpdatePost}
            postState={[post, setPost]}
            contentState={[content, setContent]}
        />
    );
};

export default EditPostForm;
