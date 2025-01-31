"use client";

import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { deletePost } from "@/lib/actions/posts";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const PostRowActions = ({ postId, postTitle }) => {
    const [open, setOpen] = useState<Boolean>(false);
    const router = useRouter();

    const handleDeletePost = async () => {
        await deletePost(postId);
        router.refresh();
        setOpen(false);
    };

    return (
        <>
            <td className="px-6 py-4">
                <Link
                    href={`/admin/posts/edit/${postId}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Edit
                </Link>
            </td>
            <td className="px-6 py-4">
                <button
                    onClick={() => setOpen(true)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                    Delete
                </button>
                <ConfirmModal
                    title={postTitle}
                    open={open}
                    onClose={() => setOpen(false)}
                    onConfirm={handleDeletePost}
                />
            </td>
        </>
    );
};
