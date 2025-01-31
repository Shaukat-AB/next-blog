"use client";

import { useActionState } from "react";
import PostEditor from "./PostEditor";
import PostContent from "../post-content/PostContent";

const inputGroups = [
    {
        id: "title",
        label: "Post Title",
        inputProps: {
            placeholder: "Example Post Title",
            type: "text",
            required: true,
            minLength: 5,
            maxLength: 120,
        },
    },
    {
        id: "description",
        label: "Description",
        inputProps: {
            placeholder: "Post description here",
            type: "text",
            required: true,
            minLength: 5,
            maxLength: 420,
        },
    },
    {
        id: "image",
        label: "Image URL",
        inputProps: {
            placeholder: "https://www.domain-name.image-name.jpg",
            type: "text",
            minLength: 5,
            maxLength: 60,
        },
    },
];

const PostForm = ({ postAction, postState = [], contentState = [] }) => {
    const [state, action, pending] = useActionState(postAction, {
        message: "",
    });
    const [content, setContent] = contentState;
    const [post, setPost] = postState;

    return (
        <>
            <form action={action}>
                <div className="flex flex-col gap-3 mx-auto my-8">
                    {inputGroups.map((group) => (
                        <div key={group.id}>
                            <label htmlFor={group.id} className="label-primary">
                                {group.label}
                            </label>
                            <input
                                className="input-primary"
                                id={group.id}
                                name={group.id}
                                {...group.inputProps}
                                value={post[group.id]}
                                onChange={(e) =>
                                    setPost({
                                        ...post,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>
                    ))}
                    <PostEditor contentState={[content, setContent]} />
                    <p
                        aria-live="polite"
                        className="text-sm font-semibold text-center text-red-600 dark:text-red-500"
                    >
                        {state && state?.message}
                    </p>
                    <button
                        disabled={pending}
                        type="submit"
                        className={pending ? "btn-disable" : "btn-primary"}
                    >
                        Submit Post
                    </button>
                </div>
            </form>
            <h2 className="text-xl text-center my-8">Post Preview</h2>
            <PostContent content={content} />
        </>
    );
};

export default PostForm;
