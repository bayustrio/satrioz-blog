import React from "react";

export const CodeBlog = () => {
  return <div>CodeBlog</div>;
};

// import { dracula as dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import ReactMarkdown from "react-markdown";
// // import {
// //   NormalComponents,
// //   SpecialComponents,
// // } from "react-markdown/src/ast-to-react";
// import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { FunctionComponent } from "react";
// interface INode {
//   className: string;
//   children: React.ReactNode;
//   inline: boolean;
//   node: Element;
//   props: object;
//   code?: keyof JSX.IntrinsicElements | undefined;
//   components: any;
// }

// interface IProps {
//   content: string;
// }

// const CodeBlock: FunctionComponent<IProps> = ({ content }) => {
//   const components: Partial<any> = {
//     code({ node, inline, className, children, ...props }: INode) {
//       const match = /language-(\w+)/.exec(className || "");

//       return !inline && match ? (
//         <SyntaxHighlighter
//           style={materialLight}
//           PreTag="div"
//           language={match[1]}
//           children={String(children).replace(/\n$/, "")}
//           {...props}
//         />
//       ) : (
//         <code className={className ? className : ""} {...props}>
//           {children}
//         </code>
//       );
//     },
//   };

//   return (
//     <div className="markdown-body">
//       <ReactMarkdown
//         children={content}
//         className="dark:text-white mt-4"
//         components={components}
//       />
//       {/* <ReactMarkdown components={components} children={content} /> */}
//     </div>
//   );
// };

// export default CodeBlock;
