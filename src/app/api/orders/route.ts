import { NextResponse } from 'next/server';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';

// Add this function to generate access token
async function generateAccessToken() {
  const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64');
  const response = await fetch(`${process.env.PAYPAL_API_URL}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { plan, customerInfo } = await request.json();
    
    // Generate access token first
    const accessToken = await generateAccessToken();
    
    // Create PayPal order first
    const response = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          amount: {
            currency_code: "USD",
            value: plan.price.toString(),
          },
          description: `${plan.name} Plan - PackShip`,
        }],
        application_context: {
          brand_name: "PackShip",
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
        }
      }),
    });

    const paypalOrder = await response.json();
    
    if (paypalOrder.error) {
      throw new Error(paypalOrder.error_description || 'PayPal order creation failed');
    }

    // Only create Firebase order if PayPal order succeeds
    const orderRef = await addDoc(collection(db, "pendingOrders"), {
      paypalOrderId: paypalOrder.id,
      plan: plan.name,
      amount: plan.price,
      status: "pending",
      customerInfo,
      createdAt: new Date(),
    });

    return NextResponse.json(paypalOrder);
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create order' }, 
      { status: 500 }
    );
  }
}