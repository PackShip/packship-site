import { NextResponse } from 'next/server';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';

export async function POST(request: Request) {
  try {
    const { plan, customerInfo } = await request.json();
    
    // Create a unique order ID
    const orderID = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Add pending order to Firebase with customer information
    await addDoc(collection(db, "pendingOrders"), {
      orderId: orderID,
      plan: plan.name,
      amount: plan.price,
      status: "pending",
      customerInfo,
      createdAt: new Date(),
    });

    // Create PayPal order
    const response = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PAYPAL_ACCESS_TOKEN}`,
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
        payer: {
          email_address: customerInfo.email,
          name: {
            given_name: customerInfo.firstName,
            surname: customerInfo.lastName
          },
          address: {
            country_code: customerInfo.country,
            admin_area_1: customerInfo.state,
          }
        }
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create order' }, 
      { status: 500 }
    );
  }
}
