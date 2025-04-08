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
  color?: string;
  description?: string;
}

export type CheckoutFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  requestSuccess: boolean;
}

export interface CopyCodeSnippetProps {
  code: string;
  language: string;
  buttonText?: string;
  inline?: boolean;
}

// Updated props type to conform to Next.js App Router expectations
export interface JobIDPageProps {
  params: { jobId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface JobPageProps {
  params: Record<string, never>;
  searchParams: { [key: string]: string | string[] | undefined };
}