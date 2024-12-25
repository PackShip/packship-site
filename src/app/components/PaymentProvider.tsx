"use client";

import { useState } from 'react';
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
import { BillingAddress, CustomerInfo, PaymentProviderProps } from '../../../types';
import SubmitPayment from './SubmitPayment';

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  currency: "USD",
  intent: "capture",
  components: "buttons,hosted-fields",
};

export default function PaymentProvider({ plan, onSuccess }: PaymentProviderProps) {
  const [isPaying, setIsPaying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal');
  const [error, setError] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    state: '',
  });

  const [billingAddress, setBillingAddress] = useState<BillingAddress>({
    addressLine1: "",
    addressLine2: "",
    adminArea1: "",
    adminArea2: "",
    countryCode: "",
    postalCode: "",
  });

  const handleBillingAddressChange = (field: keyof BillingAddress, value: string) => {
    setBillingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleCustomerInfoChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
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
      setError(error instanceof Error ? error.message : "Failed to create order");
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
          <h3 className="text-lg font-medium text-gray-900">Customer Information</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Customer info fields */}
            {/* ...existing customer fields... */}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`px-4 py-2 rounded-md transition-colors ${
                paymentMethod === 'paypal' 
                  ? 'bg-[#0070ba] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              PayPal
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`px-4 py-2 rounded-md transition-colors ${
                paymentMethod === 'card' 
                  ? 'bg-[#0070ba] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Credit/Debit Card
            </button>
          </div>
        </div>

        {paymentMethod === 'paypal' ? (
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            style={{
              shape: "rect",
              layout: "vertical",
              color: "gold",
              label: "paypal",
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
                <h3 className="text-lg font-medium text-gray-900">Billing Address</h3>
                {Object.keys(billingAddress).map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => handleBillingAddressChange(field as keyof BillingAddress, e.target.value)}
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