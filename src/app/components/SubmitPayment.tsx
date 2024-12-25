"use client";

import { usePayPalCardFields } from "@paypal/react-paypal-js";
import { BillingAddress } from "../../../types";

interface SubmitPaymentProps {
  isPaying: boolean;
  setIsPaying: (isPaying: boolean) => void;
  billingAddress: BillingAddress;
}

export default function SubmitPayment({ isPaying, setIsPaying, billingAddress }: SubmitPaymentProps) {
  const { cardFieldsForm } = usePayPalCardFields();

  const handleClick = async () => {
    if (!cardFieldsForm) {
      throw new Error("Card fields form not found");
    }
    
    const formState = await cardFieldsForm.getState();
    if (!formState.isFormValid) {
      return alert("Please complete all required fields");
    }
    
    setIsPaying(true);
    try {
      await cardFieldsForm.submit();
    } catch (err) {
      setIsPaying(false);
      console.error(err);
    }
  };

  return (
    <button
      disabled={isPaying}
      onClick={handleClick}
      className="w-full bg-[#0070ba] text-white py-2 rounded-md font-medium hover:bg-[#003087] transition-colors disabled:bg-gray-400"
    >
      {isPaying ? "Processing..." : "Pay Now"}
    </button>
  );
}