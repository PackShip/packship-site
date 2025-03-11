import React, { useCallback } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { CopyCodeSnippetProps } from "../../types";

export default function CopyCodeSnippet({
  code,
  language,
  buttonText = "Copy Code",
  inline = false,
}: CopyCodeSnippetProps) {
  const copyCodeToClipboard = useCallback(() => {
    copy(code);
    toast.success("Code copied to clipboard!", {
      style: {
        background: "rgba(20, 20, 20, 0.9)",
        color: "#fff",
        border: "1px solid rgba(138, 75, 175, 0.5)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        padding: "12px 16px",
        borderRadius: "8px",
        fontSize: "14px",
      },
      iconTheme: {
        primary: "#8a4baf",
        secondary: "#fff",
      },
      duration: 2000,
    });
  }, [code]);

  if (inline) {
    return (
      <span className="inline-flex items-center">
        <code className="bg-black/30 px-1 py-0.5 rounded mr-1">{code}</code>
        <button
          className="inline-flex items-center justify-center bg-packship-purple-lite/20 p-1 rounded-full hover:bg-packship-purple-lite/40 transition"
          onClick={copyCodeToClipboard}
          title="Copy to clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </span>
    );
  }

  return (
    <div className="relative bg-[#1E1E1E] rounded-lg w-full overflow-hidden">
      <div className="p-4 overflow-auto max-h-[500px]">
        <SyntaxHighlighter
          language={language}
          style={vs2015}
          wrapLongLines={true}
          className="!m-0"
        >
          {code}
        </SyntaxHighlighter>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          className="bg-packship-purple hover:bg-purple-700 text-white font-bold text-sm rounded-full px-3 md:px-4 py-2 transition-colors flex items-center justify-center shadow-lg"
          onClick={copyCodeToClipboard}
          aria-label="Copy code to clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span className="hidden md:inline">{buttonText}</span>
        </button>
      </div>
    </div>
  );
}
