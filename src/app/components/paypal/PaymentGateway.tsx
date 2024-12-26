// @ts-nocheck

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';
import {
  CustomerInfo,
  PricingPlan,
  PayPalOrderResponse,
  PaymentProviderProps
} from "../../../../types";
import { useMemo } from 'react';
import countryList from 'react-select-country-list';

// Simplified validation schema for essential fields only
const customerSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  country: Yup.string().required('Country/Region is required'),
});

export default function PaymentGateway({ plan, onSuccess }: PaymentProviderProps) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isPaying, setIsPaying] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const countries = useMemo(() => countryList().getData(), []);

  // PayPal initialization options
  const initialOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
    "enable-funding": "venmo",
    "disable-funding": "",
    "buyer-country": "US",
    currency: "USD",
    components: "buttons",
  };

  // Function to create order in Firebase and PayPal
  const createOrder = async (customerData: CustomerInfo) => {
    try {
      setError(null);

      // Create a pending order in Firebase first
      const pendingOrderRef = await addDoc(collection(db, "pendingOrders"), {
        plan: plan.name,
        amount: plan.price,
        status: "pending",
        customerInfo: {
          firstName: customerData.firstName,
          lastName: customerData.lastName,
          email: customerData.email,
          country: customerData.country,
        },
        createdAt: new Date()
      });

      // Store Firebase document ID for later
      setOrderId(pendingOrderRef.id);

      // Create PayPal order
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan,
          customerInfo: customerData,
          orderId: pendingOrderRef.id
        }),
      });

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

  // Handle successful PayPal payment
  const onApprove = async (data: { orderID: string }) => {
    try {
      setIsPaying(true);
      const response = await fetch(`/api/orders/${data.orderID}/capture`, {
        method: "POST",
        body: JSON.stringify({ firebaseOrderId: orderId })
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

  // Handle PayPal errors
  const onError = (err: Record<string, unknown>) => {
    console.error("PayPal error:", err);
    setError("Payment processing failed. Please try again.");
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="text-center max-w-2xl mx-auto p-16">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            country: 'US',
          }}
          validationSchema={customerSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const paypalOrderId = await createOrder(values);
              setSubmitting(false);
            } catch (err) {
              setSubmitting(false);
              console.error('Order creation failed:', err);
            }
          }}
        >
          {({ isValid, dirty, values }) => (
            <Form>
              <div className="space-y-4 mb-8">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                  {/* First Name field */}
                  <div className="w-full space-y-2">
                    <Field
                      name="firstName"
                      placeholder="First Name"
                      className="w-full p-4 border-2 border-gray-200 rounded-full"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500" />
                  </div>

                  {/* Last Name field */}
                  <div className="w-full space-y-2">
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full p-4 border-2 border-gray-200 rounded-full"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500" />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 border-2 border-gray-200 rounded-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                {/* Country/Region field */}
                <div className="space-y-2">
                  <Field
                    as="select"
                    name="country"
                    className="w-full p-4 border-2 border-gray-200 rounded-full"
                    defaultValue="EG"
                  >
                    <option value="">Select Country/Region</option>
                    {countries.map(({ value, label }) => (
                      <option
                        key={value}
                        value={value}
                        selected={value === "EG"}
                      >
                        {label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* Show PayPal buttons only when form is valid and dirty */}
              {isValid && dirty && (
                <>
                  <hr className="border-gray-200" />
                  <div className="space-y-12 py-8">
                    <div className="animate-fade-in-up">
                      <span className="w-full inline-block py-4 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <span className="animate-bounce inline-block mr-2">🚀</span>
                        You&apos;re one <span className="font-bold">click</span> away from <span className="italic">packshipping!</span>
                        <span className="animate-pulse inline-block ml-2">📦</span>
                      </span>
                    </div>
                    <div className="">
                      <PayPalButtons
                        style={{
                          layout: "vertical",
                          shape: "pill",
                          height: 55
                        }}
                        createOrder={() => createOrder(values)}
                        onApprove={onApprove}
                        onError={onError}
                        disabled={isPaying}
                      />
                    </div>
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>

        {/* Status messages */}
        {message && <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">{message}</div>}
        {error && <div className="mt-4 p-2 bg-red-100 text-red-700 rounded-md">{error}</div>}
      </div>
    </PayPalScriptProvider>
  );
}