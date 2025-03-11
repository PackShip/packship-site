"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyFeatureProps } from "../../types";
import {
  faCheck,
  faRocket,
  faCode,
  faTerminal,
  faShield,
  faCube,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/ThemeContext";

// Map feature titles to icons
const getIconForFeature = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("setup") || titleLower.includes("automated"))
    return faRocket;
  if (titleLower.includes("workflow") || titleLower.includes("efficient"))
    return faCode;
  if (titleLower.includes("cli") || titleLower.includes("command"))
    return faTerminal;
  if (titleLower.includes("secure") || titleLower.includes("security"))
    return faShield;
  if (titleLower.includes("size") || titleLower.includes("minimal"))
    return faCube;
  if (titleLower.includes("platform") || titleLower.includes("cross"))
    return faGlobe;
  return faCheck;
};

// Map feature titles to descriptions
const getDescriptionForFeature = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes("setup") || titleLower.includes("automated"))
    return "Automatically generates package.json, README, project setup, and so much more with a single command.";
  if (titleLower.includes("workflow") || titleLower.includes("efficient"))
    return "Integrates with Git, CI/CD pipelines, and testing frameworks to create a seamless development experience.";
  if (titleLower.includes("cli") || titleLower.includes("command"))
    return "Simple commands for versioning, testing, building, and publishing packages without memorizing complex options.";
  if (titleLower.includes("secure") || titleLower.includes("security"))
    return "Implements security best practices with in-house terminal 2FA instead of redirecting to the web.";
  if (titleLower.includes("size") || titleLower.includes("minimal"))
    return "Lightweight tool that doesn't bloat your project with unnecessary dependencies or configuration files.";
  if (titleLower.includes("platform") || titleLower.includes("cross"))
    return "Seamlessly operates across macOS, Windows, and Linux, delivering consistent performance and dependable results regardless of your package manager (NPM, PNPM, Yarn) or shell environment (Bash, PowerShell, Zsh).";
  return "Enhance your NPM package development experience.";
};

export default function KeyFeature({ title }: KeyFeatureProps) {
  const icon = getIconForFeature(title);
  const description = getDescriptionForFeature(title);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="feature-card h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-md ${
            isDark ? "bg-packship-purple-lite/20" : "bg-packship-purple/10"
          } flex items-center justify-center`}
        >
          <FontAwesomeIcon
            icon={icon}
            className={
              isDark ? "text-packship-purple-lite" : "text-packship-purple"
            }
            size="lg"
          />
        </div>
        <h3 className="text-xl font-semibold dark:text-white light:text-gray-900">
          {title}
        </h3>
      </div>
      <p className="dark:text-white/70 light:text-gray-700 text-sm flex-grow">
        {description}
      </p>
    </div>
  );
}
