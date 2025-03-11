"use client";

import { useState, useCallback } from "react";
import { TerminalProps, Command } from "../../types";
import toast from "react-hot-toast";

export default function Terminal({ commands }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const commandText = commands
    .map((cmd) => {
      if (cmd.type === "comment") {
        return `# ${cmd.text}`;
      } else {
        return cmd.text;
      }
    })
    .join("\n");

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    toast.success("Commands copied to clipboard!", {
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

    setTimeout(() => setCopied(false), 2000);
  }, [commandText]);

  return (
    <div className="w-full max-w-screen-sm relative">
      <div className="w-full h-4 bg-gray-400 rounded-t-lg"></div>
      <div className="w-full bg-gray-800 rounded-b-lg p-8 text-white text-lg">
        {commands.map((command, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <span className="text-packship-purple-lite font-bold">$</span>
            {command.type === "comment" ? (
              <span className="text-gray-500">{command.text}</span>
            ) : command.type === "command" ? (
              <span>
                <span className="text-green-500 font-bold">
                  {command.text.split(" ")[0]}
                </span>{" "}
                <span className="text-white">
                  {command.text.split(" ").slice(1).join(" ")}
                </span>
              </span>
            ) : (
              <span className="text-packship-purple-lite">{command.text}</span>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          className="bg-packship-purple hover:bg-purple-700 text-white font-bold text-sm rounded-full px-4 py-2 transition-colors flex items-center justify-center shadow-lg"
          onClick={copyToClipboard}
          aria-label="Copy commands to clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
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
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
}
