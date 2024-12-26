// @ts-nocheck

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { 
  BillingAddress, 
  CustomerInfo, 
  PricingPlan,
  PayPalOrderResponse,
  PaymentProviderProps 
} from "../../../../types";

// We'll use PaymentProviderProps since it matches our needs exactly
export default function PaymentGateway({ plan, onSuccess }: PaymentProviderProps) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false);

  // Using the existing CustomerInfo interface
  const [customerInfo] = useState<CustomerInfo>({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
  });

  // Using the existing BillingAddress interface
  const [billingAddress] = useState<BillingAddress>({
    addressLine1: "",
    addressLine2: "",
    adminArea1: "",
    adminArea2: "",
    countryCode: "",
    postalCode: "",
  });

  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
    "enable-funding": "venmo",
    "disable-funding": "",
    "buyer-country": "US",
    currency: "USD",
    "data-page-type": "product-details", 
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
  };

  const createOrder = async () => {
    try {
      setError(null);
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          plan,  // We can now send the entire PricingPlan object
          customerInfo, 
          billingAddress 
        }),
      });
      
      // Using PayPalOrderResponse interface for type safety
      const orderData = await response.json() as PayPalOrderResponse;
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
      const orderData = await response.json() as PayPalOrderResponse;
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
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "paypal",
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </PayPalScriptProvider>
      {message && <p>{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}