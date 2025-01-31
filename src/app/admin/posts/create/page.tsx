import type { Metadata } from "next/types";
import CreatePostForm from "@/components/post-form/CreatePostForm";

export const metadata: Metadata = {
    title: "New Post",
    description:
        "Create a new post for blog app",
};

const CreatePostPage = () => {
    return (
        <div className="flex flex-col">
            <h2 className="font-medium text-xl text-center">Create new post</h2>
            <CreatePostForm />
        </div>
    );
};

export default CreatePostPage;
