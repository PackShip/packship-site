import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

interface CommandPromptProps {
  command?: string;
  className?: string;
}

export default function CommandPrompt({
  command = "packship init",
  className = "",
}: CommandPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`terminal-window flex justify-between items-center ${className}`}
    >
      <div className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <pre className="font-mono">{command}</pre>
      </div>
      <button
        onClick={handleCopy}
        className="text-white/50 hover:text-white transition-colors p-2"
        title={copied ? "Copied!" : "Copy to clipboard"}
      >
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
      </button>
    </div>
  );
}
