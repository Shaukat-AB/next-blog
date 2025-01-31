import PostCard from "@/components/post-card/PostCard";
import { getPosts } from "@/lib/actions/posts";

const Home = async () => {
    const posts = await (getPosts());

    return (
        <div>
            {posts?.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Home;
