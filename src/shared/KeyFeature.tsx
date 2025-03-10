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
    return "Quickly set up your NPM package with automated configuration and best practices.";
  if (titleLower.includes("workflow") || titleLower.includes("efficient"))
    return "Streamline your development workflow with integrated tools and processes.";
  if (titleLower.includes("cli") || titleLower.includes("command"))
    return "Intuitive command-line interface that makes package management simple.";
  if (titleLower.includes("secure") || titleLower.includes("security"))
    return "Built with security in mind to protect your packages and dependencies.";
  if (titleLower.includes("size") || titleLower.includes("minimal"))
    return "Optimized for minimal overhead and maximum performance.";
  if (titleLower.includes("platform") || titleLower.includes("cross"))
    return "Works seamlessly across different platforms and environments.";
  return "Enhance your NPM package development experience.";
};

export default function KeyFeature({ title }: KeyFeatureProps) {
  const icon = getIconForFeature(title);
  const description = getDescriptionForFeature(title);

  return (
    <div className="feature-card">
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
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
}
