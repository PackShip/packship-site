import React, { useCallback } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faCopy} className="h-3 w-3" />
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
          className="bg-packship-purple-lite/20 hover:bg-packship-purple-lite/40 text-packship-purple-lite p-3 rounded-full transition-colors flex items-center justify-center"
          onClick={copyCodeToClipboard}
          aria-label="Copy to clipboard"
          title="Copy to clipboard"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
}
