// "use client";
import DOMPurify from "isomorphic-dompurify";

const PostContent = ({ content }: { content: string | undefined }) => {
    const cleanContent = content ? DOMPurify.sanitize(content) : "";

    return (
        <div
            className="prose prose-p:break-words hyphens lg:prose-xl mt-12"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
        ></div>
    );
};

export default PostContent;
