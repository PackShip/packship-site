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

export interface PayPalButtonProps {
  plan: PricingPlan;
}

export interface PayPalOrderResponse {
  id: string;
  status: string;
}

export interface BillingAddress {
  addressLine1: string;
  addressLine2: string;
  adminArea1: string;
  adminArea2: string;
  countryCode: string;
  postalCode: string;
}

export interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
}

export interface PayPalOrderProps {
  orderId: string;
  status: string;
  plan: PricingPlan;
  amount: number;
}

export interface CardFieldFormState {
  isFormValid: boolean;
  fields: Record<string, unknown>;
}

export interface CardFieldsForm {
  getState: () => Promise<CardFieldFormState>;
  submit: () => Promise<void>;
}

export interface PaymentProviderProps {
  plan: PricingPlan;
  onSuccess: (orderId: string) => void;
}