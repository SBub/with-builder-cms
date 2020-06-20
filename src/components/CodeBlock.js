import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { withBuilder } from "@builder.io/react";

const CodeBlockComponent = ({ language, code }) => {
  return <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>;
};

export const CodeBlock = withBuilder(CodeBlockComponent, {
  name: "Input Examples",
  inputs: [
    { name: "text", type: "string" },
    { name: "switch", type: "boolean" },
    { name: "image", type: "file", allowedFileTypes: ["jpeg", "png"] },
    {
      name: "exampleList",
      type: "list",
      subFields: [{ name: "text", type: "string" }],
    },
  ],
});
