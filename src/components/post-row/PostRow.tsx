"use client";

import Image from "next/image";
import { useState } from "react";
import ConfirmModal from "../confirm-modal/ConfirmModal";
import { deletePost } from "@/lib/actions/posts";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PostRow = ({ postStringified }: { postStringified: string }) => {
    const post = JSON.parse(postStringified);
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const updatedAt = new Date(post.updatedAt).toISOString().substring(0, 10);

    const handleDeletePost = async () => {
        await deletePost(post._id);
        router.refresh();
        setOpen(false);
    };

    return (
        <tr className="bg-white dark:bg-gray-800">
            <td scope="row" className="relative h-28">
                <Image
                    className="object-cover px-2 py-2"
                    src={post.image || "/images/placeholder.jpg"}
                    sizes="1024px"
                    alt="Post thumbnail"
                    fill
                />
            </td>
            <th className="px-6 py-4">{post.title}</th>

            <td className="px-6 py-4">{updatedAt}</td>
            <td className="px-6 py-4">
                <Link
                    href={`/admin/posts/edit/${post._id}`}
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
                    title={post.title}
                    open={open}
                    onClose={() => setOpen(false)}
                    onConfirm={handleDeletePost}
                />
            </td>
        </tr>
    );
};

export default PostRow;
