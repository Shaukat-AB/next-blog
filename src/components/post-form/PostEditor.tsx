import type { DeltaStatic, EmitterSource } from "react-quill-new/lib/";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type PostEditorProps = {
    contentState: [content: string, setContent: Function];
};

const PostEditor: React.FC<PostEditorProps> = ({ contentState }) => {
    const [content, setContent] = contentState;

    const handleContent = (
        value: string,
        delta: DeltaStatic,
        source: EmitterSource,
        editor: { getSemanticHTML: () => string }
    ) => {
        var html: string = editor.getSemanticHTML();
        setContent(html.replaceAll("&nbsp;", " "));
    };

    return (
        <ReactQuill
            theme="snow"
            placeholder="Write your blog post here ..."
            className="w-full h-72 mb-12"
            id="content"
            value={content}
            onChange={handleContent}
        />
    );
};

export default PostEditor;
