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
    return "Automatically generates package.json, README, testing setup, and GitHub workflows with a single command.";
  if (titleLower.includes("workflow") || titleLower.includes("efficient"))
    return "Integrates with Git, CI/CD pipelines, and testing frameworks to create a seamless development experience.";
  if (titleLower.includes("cli") || titleLower.includes("command"))
    return "Simple commands for versioning, testing, building, and publishing packages without memorizing complex options.";
  if (titleLower.includes("secure") || titleLower.includes("security"))
    return "Implements security best practices with dependency scanning, integrity checks, and secure publishing protocols.";
  if (titleLower.includes("size") || titleLower.includes("minimal"))
    return "Lightweight tool that doesn't bloat your project with unnecessary dependencies or configuration files.";
  if (titleLower.includes("platform") || titleLower.includes("cross"))
    return "Works on macOS, Windows, and Linux with consistent behavior and reliable results across environments.";
  return "Enhance your NPM package development experience.";
};

export default function KeyFeature({ title }: KeyFeatureProps) {
  const icon = getIconForFeature(title);
  const description = getDescriptionForFeature(title);

  return (
    <div className="feature-card h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-md bg-packship-purple-lite/20 flex items-center justify-center">
          <FontAwesomeIcon
            icon={icon}
            className="text-packship-purple-lite"
            size="lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70 text-sm flex-grow">{description}</p>
    </div>
  );
}
