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
}

export interface PlanFeature {
  name: string;
  included: boolean;
  highlight?: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  originalPrice: number;
  features: PlanFeature[];
  buttonText: string;
  bundleNote?: string;
  additionalContent?: React.ReactNode;
}