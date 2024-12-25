"use client";

import { usePayPalCardFields } from "@paypal/react-paypal-js";
import { BillingAddress } from "../../../types";

interface SubmitPaymentProps {
  isPaying: boolean;
  setIsPaying: (isPaying: boolean) => void;
  billingAddress: BillingAddress;
}

export default function SubmitPayment({
  isPaying,
  setIsPaying,
  billingAddress,
}: SubmitPaymentProps) {
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
      className="w-full bg-[#142c8e] text-white py-3 rounded-md font-medium hover:bg-[#0a1f6e] transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
    >
      {isPaying ? (
        "Processing..."
      ) : (
        <>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
          </svg>
          Pay Now
        </>
      )}
    </button>
  );
}
