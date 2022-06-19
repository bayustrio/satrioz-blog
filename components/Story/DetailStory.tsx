import Image from "next/image";
import { IDataStory } from "../../Types/Story-type";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import CodeBlock from "../Markdown/CodeBlog";
import "prismjs/themes/prism-tomorrow.css";
// import { NormalComponents, SpecialComponents } from 'react-markdown/src/ast-to-react';
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
// import {useState} from 'react'
interface IProps {
  data: IDataStory;
}

const DetailStory: React.FC<IProps> = ({ data }) => {
  return (
    <div className="">
      <div>
        <img
          src={data.image}
          //   height={100}
          //   width={100}
          //   layout="responsive"
          className="rounded-xl"
        />

        <div>
          {/* CONTENT */}
          {/* <CodeBlock content={data.content} /> */}
          {/* <ReactMarkdown components={CodeBlock}>{data.content}</ReactMarkdown> */}
        </div>
      </div>
    </div>
  );
};

export default DetailStory;
