"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/ThemeContext";
import toast from "react-hot-toast";

interface CommandPromptProps {
  command?: string;
  className?: string;
  commands?: { [key: string]: string };
  activeTab?: string;
}

export default function CommandPrompt({
  command = "npm install -g packship",
  className = "",
  commands = {
    Bash: "curl -fsSL https://packship.dev/install.sh | sh",
    PowerShell: "iwr -useb https://packship.dev/install.ps1 | iex",
    npm: "npm install -g packship",
    yarn: "yarn global add packship",
    pnpm: "pnpm add -g packship",
  },
  activeTab = "npm",
}: CommandPromptProps) {
  const [copied, setCopied] = useState(false);
  const [currentTab, setCurrentTab] = useState(activeTab);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleCopy = () => {
    const textToCopy = commands[currentTab] || command;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    toast.success("Command copied to clipboard!", {
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
  };

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap gap-1 mb-2">
        {Object.keys(commands).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${currentTab === tab ? "active" : ""}`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="terminal-window relative">
        <div className="flex items-center pr-12 overflow-x-auto">
          <span className="text-green-500 dark:text-green-400 light:text-green-600 mr-2">
            $
          </span>
          <pre className="font-mono whitespace-pre dark:text-white light:text-gray-800">
            {commands[currentTab] || command}
          </pre>
        </div>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-packship-purple-lite/20 hover:bg-packship-purple-lite/40 text-packship-purple-lite p-2 rounded-full transition-colors flex-shrink-0"
          title={copied ? "Copied!" : "Copy to clipboard"}
          aria-label="Copy command to clipboard"
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </button>
      </div>
    </div>
  );
}
