import { db } from "@/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

async function generateAccessToken() {
  try {
    const auth = Buffer.from(
      `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET}`
    ).toString('base64');
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/v1/oauth2/token`, {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    
    const data = await response.json();
    console.log('Auth Response:', data);
    return data.access_token;
  } catch (error) {
    console.error('Auth Error:', error);
    throw error;
  }
}

export async function POST(
  request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const { firebaseOrderId } = await request.json();
    console.log('OrderId:', params.orderId, 'FirebaseId:', firebaseOrderId);
    
    const accessToken = await generateAccessToken();
    console.log('Access Token:', accessToken);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/v2/checkout/orders/${params.orderId}/capture`,
      {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('PayPal Error:', errorData);
      throw new Error(JSON.stringify(errorData));
    }

    const data = await response.json();
    console.log('PayPal Success:', data);

    const orderRef = doc(db, "pendingOrders", firebaseOrderId);
    await updateDoc(orderRef, {
      status: "completed",
      paypalResponse: data,
      completedAt: new Date(),
    });

    return NextResponse.json(data);

  } catch (error) {
    console.error('Capture Error:', error);
    return NextResponse.json(
      { 
        error: "Failed to capture payment",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}