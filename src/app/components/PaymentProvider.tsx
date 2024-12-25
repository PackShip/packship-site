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
} from "@paypal/react-paypal-js";
import { PricingPlan } from '../../../types';

interface PaymentProviderProps {
  plan: PricingPlan;
  onSuccess: (orderId: string) => void;
}

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  currency: "USD",
  intent: "capture",
  components: "buttons,card-fields",
};

interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
}

export default function PaymentProvider({ plan, onSuccess }: PaymentProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    state: '',
  });

  const createOrder = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          plan,
          customerInfo 
        }),
      });
      const orderData = await response.json();
      return orderData.id;
    } catch (error) {
      console.error("Failed to create order:", error);
      throw error;
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    try {
      const response = await fetch(`/api/orders/${data.orderID}/capture`, {
        method: "POST",
      });
      const orderData = await response.json();
      onSuccess(data.orderID);
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Customer Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo(prev => ({...prev, email: e.target.value}))}
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={customerInfo.firstName}
              onChange={(e) => setCustomerInfo(prev => ({...prev, firstName: e.target.value}))}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={customerInfo.lastName}
              onChange={(e) => setCustomerInfo(prev => ({...prev, lastName: e.target.value}))}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={customerInfo.country}
              onChange={(e) => setCustomerInfo(prev => ({...prev, country: e.target.value}))}
            />
            <input
              type="text"
              placeholder="State/City"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={customerInfo.state}
              onChange={(e) => setCustomerInfo(prev => ({...prev, state: e.target.value}))}
            />
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
              layout: "vertical",
              shape: "rect",
              color: "gold",
            }}
          />
        ) : (
          <PayPalCardFieldsProvider 
            createOrder={createOrder} 
            onApprove={onApprove}
            onError={(err) => {
              console.error("Card payment error:", err);
            }}
          >
            <div className="space-y-4 bg-white p-4 rounded-md border border-gray-200">
              <PayPalNameField className="w-full p-2 border border-gray-300 rounded-md" />
              <PayPalNumberField className="w-full p-2 border border-gray-300 rounded-md" />
              <div className="grid grid-cols-2 gap-4">
                <PayPalExpiryField className="w-full p-2 border border-gray-300 rounded-md" />
                <PayPalCVVField className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <button 
                className="w-full bg-[#0070ba] text-white py-2 rounded-md font-medium hover:bg-[#003087] transition-colors"
                onClick={() => {
                  // Handle card submission
                }}
              >
                Pay ${plan.price}
              </button>
            </div>
          </PayPalCardFieldsProvider>
        )}
      </div>
    </PayPalScriptProvider>
  );
}