import type { Metadata } from "next/types";
import EditPostForm from "@/components/post-form/EditPostForm";
import { getPostById } from "@/lib/actions/posts";

export const metadata: Metadata = {
    title: "Edit Post",
    description: "Edit post for blog app",
};

const EditPostPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    const post = await getPostById(id);

    if (!post) return;

    return (
        <div className="flex flex-col">
            <h2 className="font-medium text-xl text-center">Edit post</h2>
            <EditPostForm postString={JSON.stringify({ id, post })} />
        </div>
    );
};

export default EditPostPage;
