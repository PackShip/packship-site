import { db } from "@/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const response = await fetch(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${params.orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    
    // Update order status in Firebase
    const ordersRef = collection(db, "orders");
    await addDoc(ordersRef, {
      orderId: params.orderId,
      status: "completed",
      paypalResponse: data,
      completedAt: new Date(),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Payment capture failed:', error);
    return NextResponse.json(
      { error: 'Failed to capture payment' }, 
      { status: 500 }
    );
  }
}