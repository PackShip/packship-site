import { db } from "@/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

async function generateAccessToken() {
  const auth = Buffer.from(`${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET}`).toString('base64');
  const response = await fetch(`${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}

export async function POST(
  request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const { firebaseOrderId } = await request.json();
    const accessToken = await generateAccessToken();
    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/v2/checkout/orders/${params.orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error_description || 'Payment capture failed');
    }

    // Update the Firebase order
    const orderRef = doc(db, "pendingOrders", firebaseOrderId);
    await updateDoc(orderRef, {
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