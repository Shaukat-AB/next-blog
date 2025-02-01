import type { Metadata } from "next/types";
import PostRow from "@/components/post-row/PostRow";
import { getPosts } from "@/lib/actions/posts";
import Table from "@/components/table/Table";
import Link from "next/link";

export const metadata: Metadata = {
    title: "PostList",
    description: "List of posts stored in database",
};

const tableHead = [" Post Image", "Title", "Date Updated", "Delete", "Edit"];

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
                <Table tableHead={tableHead}>
                    <tbody>
                        {posts.map((post) => (
                            <PostRow
                                key={post.id}
                                postStringified={JSON.stringify(post)}
                            />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default PostsListPage;
