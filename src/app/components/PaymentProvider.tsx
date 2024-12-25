"use client";

import { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalCardFieldsProvider,
  PayPalNameField,
  PayPalNumberField,
  PayPalExpiryField,
  PayPalCVVField,
  usePayPalCardFields,
} from "@paypal/react-paypal-js";
import {
  BillingAddress,
  CustomerInfo,
  PaymentProviderProps,
} from "../../../types";
import SubmitPayment from "./SubmitPayment";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  currency: "USD",
  intent: "capture",
  components: "buttons,hosted-fields",
};

export default function PaymentProvider({
  plan,
  onSuccess,
}: PaymentProviderProps) {
  const [isPaying, setIsPaying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "card">(
    "paypal"
  );
  const [error, setError] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
  });

  const [billingAddress, setBillingAddress] = useState<BillingAddress>({
    addressLine1: "",
    addressLine2: "",
    adminArea1: "",
    adminArea2: "",
    countryCode: "",
    postalCode: "",
  });

  const handleBillingAddressChange = (
    field: keyof BillingAddress,
    value: string
  ) => {
    setBillingAddress((prev) => ({ ...prev, [field]: value }));
  };

  const handleCustomerInfoChange = (
    field: keyof CustomerInfo,
    value: string
  ) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const createOrder = async () => {
    try {
      setError(null);
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, customerInfo, billingAddress }),
      });
      const orderData = await response.json();
      if (!orderData.id) throw new Error("Failed to create order");
      return orderData.id;
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create order"
      );
      throw error;
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    try {
      setIsPaying(true);
      const response = await fetch(`/api/orders/${data.orderID}/capture`, {
        method: "POST",
      });
      const orderData = await response.json();
      if (!response.ok) throw new Error(orderData.error || "Payment failed");
      onSuccess(data.orderID);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Payment failed");
    } finally {
      setIsPaying(false);
    }
  };

  const onError = (err: Record<string, unknown>) => {
    console.error("PayPal error:", err);
    setError("Payment processing failed. Please try again.");
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Customer Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={customerInfo.email}
              onChange={(e) =>
                handleCustomerInfoChange("email", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="First Name"
              value={customerInfo.firstName}
              onChange={(e) =>
                handleCustomerInfoChange("firstName", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={customerInfo.lastName}
              onChange={(e) =>
                handleCustomerInfoChange("lastName", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Country"
              value={customerInfo.country}
              onChange={(e) =>
                handleCustomerInfoChange("country", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="State/Province"
              value={customerInfo.state}
              onChange={(e) =>
                handleCustomerInfoChange("state", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 col-span-2"
            />
            <input
              type="text"
              id="card-billing-address-line-1"
              name="card-billing-address-line-1"
              placeholder="Address line 1"
              value={billingAddress.addressLine1}
              onChange={(e) =>
                handleBillingAddressChange("addressLine1", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 col-span-2"
            />
            <input
              type="text"
              id="card-billing-address-line-2"
              name="card-billing-address-line-2"
              placeholder="Address line 2 (Optional)"
              value={billingAddress.addressLine2}
              onChange={(e) =>
                handleBillingAddressChange("addressLine2", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 col-span-2"
            />
            <input
              type="text"
              id="card-billing-address-postal-code"
              name="card-billing-address-postal-code"
              placeholder="Postal/zip code"
              value={billingAddress.postalCode}
              onChange={(e) =>
                handleBillingAddressChange("postalCode", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              id="card-billing-address-country-code"
              name="card-billing-address-country-code"
              placeholder="Country code"
              value={billingAddress.countryCode}
              onChange={(e) =>
                handleBillingAddressChange("countryCode", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setPaymentMethod("paypal")}
              className={`flex items-center justify-center px-6 py-3 rounded-md transition-colors w-1/2 ${
                paymentMethod === "paypal"
                  ? "bg-[#ffc439] border-2 border-[#ffc439]"
                  : "bg-gray-100 border-2 border-gray-200 hover:bg-gray-200"
              }`}
            >
              <img
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                alt="PayPal"
                className="h-6"
              />
            </button>
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-colors w-1/2 ${
                paymentMethod === "card"
                  ? "bg-[#142c8e] text-white border-2 border-[#142c8e]"
                  : "bg-gray-100 border-2 border-gray-200 hover:bg-gray-200"
              }`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
              </svg>
              <span>Card</span>
            </button>
          </div>
        </div>

        {paymentMethod === "paypal" ? (
          // Update PayPal buttons styling
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            style={{
              color: "gold",
              shape: "rect",
              label: "paypal",
              layout: "vertical",
              tagline: false
            }}
            disabled={isPaying}
          />
        ) : (
          <PayPalCardFieldsProvider
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            style={{
              input: {
                "font-size": "16px",
                "font-family": "system-ui",
                "font-weight": "lighter",
                color: "#ccc",
              },
              ".invalid": { color: "purple" },
            }}
          >
            <div className="space-y-4 bg-white p-4 rounded-md border border-gray-200">
              <PayPalNameField />
              <PayPalNumberField />
              <div className="grid grid-cols-2 gap-4">
                <PayPalExpiryField />
                <PayPalCVVField />
              </div>

              {/* Billing Address Fields */}
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Billing Address
                </h3>
                {Object.keys(billingAddress).map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleBillingAddressChange(
                        field as keyof BillingAddress,
                        e.target.value
                      )
                    }
                  />
                ))}
              </div>

              <SubmitPayment
                isPaying={isPaying}
                setIsPaying={setIsPaying}
                billingAddress={billingAddress}
              />
            </div>
          </PayPalCardFieldsProvider>
        )}
      </div>
    </PayPalScriptProvider>
  );
}
