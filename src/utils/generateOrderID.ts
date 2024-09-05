// utils/generateOrderID.ts
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';

export default async function generateOrderID(length: number): Promise<string> {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let orderID = '';
  
  // Function to generate a random order ID
  for (let i = 0; i < length; i++) {
    orderID += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  // Check if the generated orderID exists in either collection
  const pendingOrdersRef = collection(db, "pendingOrders");
  const fulfilledOrdersRef = collection(db, "fulfilledOrders");

  const orderQuery1 = query(pendingOrdersRef, where("orderID", "==", orderID));
  const orderQuery2 = query(fulfilledOrdersRef, where("orderID", "==", orderID));
  
  const [pendingSnap, fulfilledSnap] = await Promise.all([getDocs(orderQuery1), getDocs(orderQuery2)]);
  
  if (!pendingSnap.empty || !fulfilledSnap.empty) {
    // Order ID already exists, recursively generate a new one
    return generateOrderID(length);
  }

  return orderID;
}