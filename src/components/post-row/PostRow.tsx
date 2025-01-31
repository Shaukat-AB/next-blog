// "use client";

import Image from "next/image";
import { PostRowActions } from "./PostRowActions";

const PostRow = ({ post }) => {
    const updatedAt = new Date(post.updatedAt).toISOString().substring(0, 10);

    return (
        <tr className="bg-white dark:bg-gray-800">
            <td scope="row" className="relative h-28">
                <Image
                    className="object-cover px-2 py-2"
                    src={post?.image || "/images/placeholder.jpg"}
                    sizes="1024px"
                    alt="Post thumbnail"
                    fill
                />
            </td>
            <th className="px-6 py-4">{post?.title}</th>

            <td className="px-6 py-4">{updatedAt}</td>
            <PostRowActions postId={post.id} postTitle={post.title} />
        </tr>
    );
};

export default PostRow;
