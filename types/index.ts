export interface SocialsProps {
  isMobile?: boolean;
}

export interface DonationsLinkProps {
  color?: string;
  linkColor?: string;
}

export interface KeyFeatureProps {
  title: string;
}

export interface Command {
  text: string;
  type: "comment" | "command" | "code";
}

export interface TerminalProps {
  commands: Command[];
}

export interface SectionHeaderProps {
  header: string;
  className?: string;
}