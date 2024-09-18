import React, { useCallback } from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';
import { CopyCodeSnippetProps } from "../../types";

export default function CopyCodeSnippet({ code, language, buttonText = "Copy Code" }: CopyCodeSnippetProps) {
  const copyCodeToClipboard = useCallback(() => {
    copy(code);
    alert("Code copied to clipboard!");
  }, [code]);

  return (
    <div className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4">
      <SyntaxHighlighter language={language} style={vs2015}>
        {code}
      </SyntaxHighlighter>
      <button className="bg-packship-purple px-4 py-2 text-white font-bold text-sm rounded-full hover:bg-purple-700 transition" onClick={copyCodeToClipboard}>
        {buttonText}
      </button>
    </div>
  );
};