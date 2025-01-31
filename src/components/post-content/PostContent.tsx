// "use client";
import DOMPurify from "isomorphic-dompurify";

const PostContent = ({ content }) => {
    const cleanContent = DOMPurify.sanitize(content);

    return (
        <div
            className="prose prose-p:break-words hyphens lg:prose-xl mt-12"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
        ></div>
    );
};

export default PostContent;
