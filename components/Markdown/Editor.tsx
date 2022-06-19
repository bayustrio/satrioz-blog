import { Dispatch, MutableRefObject, SetStateAction } from "react";
import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import { IStory } from "../../Types/Story-type";
import MarkdownIt from "markdown-it";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

interface IProps {
  content: string;
  story: IStory;
  setStory: Dispatch<SetStateAction<IStory>>;
}

const Editor = ({ setStory, story }: IProps) => {
  const mdParser = new MarkdownIt();

  const handleEditorChange = ({ text }: { text: string }) => {
    console.log("handleEditorChange", text);
    setStory({ ...story, content: text });
  };

  const onCustomImageUpload = (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target?.result);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <MdEditor
        style={{ height: "500px" }}
        config={{
          view: {
            menu: true,
            md: true,
            html: true,
            fullScreen: true,
            hideMenu: true,
          },
        }}
        onChange={handleEditorChange}
        onImageUpload={onCustomImageUpload}
        renderHTML={(text) => mdParser.render(text)}
      />
    </div>
  );
};

export default Editor;
