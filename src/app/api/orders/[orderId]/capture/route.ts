import { db } from "@/firebase/firebaseConfig";
import { doc, updateDoc, getDoc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import generateSerialCode from "@/utils/generateSerialCode";
import { hashSerial } from "@/utils/hashSerialCode";

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

    if (!response.ok) {
      throw new Error('Failed to generate PayPal access token');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Token generation failed:', error);
    throw new Error('Failed to generate PayPal access token');
  }
}

export async function POST(
  request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const { firebaseOrderId } = await request.json();
    
    // Verify the pending order exists
    const orderRef = doc(db, "pendingOrders", firebaseOrderId);
    const orderDoc = await getDoc(orderRef);
    
    if (!orderDoc.exists()) {
      throw new Error("Order not found");
    }

    const orderData = orderDoc.data();

    // Capture payment with PayPal
    const accessToken = await generateAccessToken();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/v2/checkout/orders/${params.orderId}/capture`,
      {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    const paypalData = await response.json();

    // Generate serial code
    const serialCode = await generateSerialCode(12);
    const hashedSerialCode = hashSerial(serialCode);

    // Create fulfilled order
    await addDoc(collection(db, "fulfilledOrders"), {
      ...orderData,
      paypalOrderId: params.orderId,
      paypalResponse: paypalData,
      serialCode,
      hashedSerialCode,
      status: "completed",
      completedAt: new Date(),
    });

    // Delete pending order
    await deleteDoc(orderRef);

    return NextResponse.json({ 
      ...paypalData,
      serialCode // Return serial code to show on success page
    });

  } catch (error) {
    console.error('Capture Error:', error);
    return NextResponse.json(
      { error: "Failed to capture payment" },
      { status: 500 }
    );
  }
}