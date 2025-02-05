import Link from "next/link";
import Image from "next/image";
import { TPost } from "@/types";

const PostCard = ({ post }: { post: TPost }) => {
    return (
        <div className="w-full mb-12">
            <Link
                href={`posts/${post?.id}`}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <div className="relative w-full h-96 md:flex-1">
                    <Image
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={post?.image || "/images/placeholder.jpg"}
                        sizes="1024px"
                        alt="Post thumbnail"
                        fill
                    />
                </div>

                <div className="md:flex-1 flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {post?.description?.slice(0, 247) + "..."}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default PostCard;
