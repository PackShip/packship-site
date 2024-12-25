"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';
import { PayPalButtonProps, PayPalOrderResponse } from "../../../types";

export default function PayPalButton({ plan }: PayPalButtonProps) {
  const router = useRouter();

  const createOrder = async (): Promise<string> => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      
      const orderData = await response.json() as PayPalOrderResponse;
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

      await addDoc(collection(db, "orders"), {
        orderId: data.orderID,
        plan: plan.name,
        amount: plan.price,
        status: "completed",
        createdAt: new Date(),
      });

      router.push('/success');
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className="w-full">
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{
          layout: "vertical",
          shape: "rect",
          color: "gold",
        }}
      />
    </div>
  );
}