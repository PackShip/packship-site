"use client";

import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
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

      <div className="absolute bottom-4 right-4 z-10">
        <button
          className="bg-packship-purple-lite/20 hover:bg-packship-purple-lite/40 text-packship-purple-lite p-3 rounded-full transition-colors flex items-center justify-center"
          onClick={copyToClipboard}
          aria-label="Copy commands to clipboard"
          title="Copy to clipboard"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
}
