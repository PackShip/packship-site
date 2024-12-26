import { db } from "@/firebase/firebaseConfig";
import { doc, updateDoc, getDoc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import generateSerialCode from "@/utils/generateSerialCode";
import { hashSerial } from "@/utils/hashSerialCode";

// Types
interface PayPalTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface PayPalCaptureResponse {
  id: string;
  status: string;
  payment_source: any;
  purchase_units: any[];
}

async function generateAccessToken(): Promise<string> {
  try {
    console.log('Generating PayPal access token...');
    const auth = Buffer.from(
      `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET}`
    ).toString('base64');

    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYPAL_API_URL}/v1/oauth2/token`, {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
    });

    const data = await response.json() as PayPalTokenResponse;
    console.log('Token generated successfully');

    if (!response.ok || !data.access_token) {
      throw new Error(`Failed to generate token: ${JSON.stringify(data)}`);
    }

    return data.access_token;
  } catch (error) {
    console.error('Token generation failed:', error);
    throw error;
  }
}

export async function POST(
  request: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    console.log(`Processing capture for order: ${params.orderId}`);
    const { firebaseOrderId } = await request.json();

    if (!firebaseOrderId) {
      throw new Error('Firebase order ID is required');
    }
    
    // Verify pending order
    const orderRef = doc(db, "pendingOrders", firebaseOrderId);
    const orderDoc = await getDoc(orderRef);
    
    if (!orderDoc.exists()) {
      throw new Error(`Order ${firebaseOrderId} not found`);
    }

    const orderData = orderDoc.data();
    console.log('Found pending order:', orderData);

    // Capture PayPal payment
    const accessToken = await generateAccessToken();
    console.log('Capturing PayPal payment...');
    
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

    const paypalData = await response.json() as PayPalCaptureResponse;
    console.log('PayPal capture response:', paypalData);

    if (!response.ok) {
      throw new Error(`PayPal capture failed: ${JSON.stringify(paypalData)}`);
    }

    // Generate serial code
    const serialCode = await generateSerialCode(12);
    const hashedSerialCode = hashSerial(serialCode);
    console.log('Generated serial code');

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
    console.log('Created fulfilled order');

    // Delete pending order
    await deleteDoc(orderRef);
    console.log('Deleted pending order');

    return NextResponse.json({ 
      ...paypalData,
      serialCode
    });

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