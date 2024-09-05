import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

export default async function generateSerialCode(length: number): Promise<string> {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let serialCode = "";

  const isDuplicate = async (code: string) => {
    const fulfilledOrdersQuery = query(
      collection(db, "fulfilledOrders"),
      where("serialCode", "==", code),
      limit(1)
    );
    const snapshot = await getDocs(fulfilledOrdersQuery);
    return !snapshot.empty;
  };

  do {
    serialCode = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      serialCode += chars[randomIndex];
    }
  } while (await isDuplicate(serialCode));

  return serialCode;
}
