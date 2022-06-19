import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IProps {
  className: string;
  children: React.ReactNode;
  inline: boolean;
  node: Element;
  props: object;
}

const CodeBlock = {
  code({ node, inline, className, children, ...props }: IProps) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        showLineNumbers
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;
