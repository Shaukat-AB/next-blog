import type { Metadata } from "next/types";
import PostRow from "@/components/post-row/PostRow";
import { getPosts } from "@/lib/actions/posts";
import Link from "next/link";

export const metadata: Metadata = {
    title: "PostList",
    description: "List of posts stored in database",
};

const PostsListPage = async () => {
    const posts = await getPosts();

    return (
        <>
            <div>
                <h2 className="text-3xl">All Posts</h2>
                <nav className="w-full flex items-center justify-end mb-8">
                    <Link className="btn-primary" href="/admin/posts/create">
                        Create Post
                    </Link>
                </nav>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Post Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Post Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date Updated
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <PostRow key={post.id} post={post} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PostsListPage;
