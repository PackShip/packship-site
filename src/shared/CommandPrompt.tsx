import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

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

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[currentTab] || command);
    setCopied(true);
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
      <div className="terminal-window flex justify-between items-center">
        <div className="flex items-center overflow-x-auto">
          <span className="text-green-400 mr-2">$</span>
          <pre className="font-mono whitespace-pre">
            {commands[currentTab] || command}
          </pre>
        </div>
        <button
          onClick={handleCopy}
          className="text-white/50 hover:text-white transition-colors p-2 flex-shrink-0"
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </button>
      </div>
    </div>
  );
}
