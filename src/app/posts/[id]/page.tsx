import Image from "next/image";
import { getPostById } from "@/lib/actions/posts";
import PostContent from "@/components/post-content/PostContent";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const post = await getPostById(id);

    return {
        title: post?.title || "Untitled Post",
        description: post?.description,
    };
};

const PostPage = async ({ params }) => {
    const { id } = await params;
    const post = await getPostById(id);
    if (!post) return;
    const updatedAt = new Date(post?.updatedAt).toISOString().substring(0, 10);

    return (
        <article>
            <header className="mb-10">
                <h1 className="main-title">
                    {post.title}
                </h1>
                <p className="text-base text-gray-500 dark:text-gray-400">
                    {post?.updatedAt && (
                        <time dateTime={updatedAt}>{updatedAt}</time>
                    )}
                </p>
            </header>
            <main>
                <figure className="relative w-full h-96">
                    <Image
                        className="object-cover py-8"
                        src={post?.image || "/images/placeholder.jpg"}
                        sizes="1024px"
                        alt={post.title}
                        fill
                    />
                    <figcaption className="w-full text-center text-sm text-gray-800 absolute -bottom-3.5">
                        {post.title}
                    </figcaption>
                </figure>
                <PostContent content={post.content} />
            </main>
        </article>
    );
};

export default PostPage;
