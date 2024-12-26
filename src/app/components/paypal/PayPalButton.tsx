// @ts-nocheck

import { 
  FUNDING,
  PayPalButtons,
  PayPalScriptProvider
} from "@paypal/react-paypal-js";
import { PayPalButtonsProps } from "../../../../types";

export default function PayPalButton({ amount, onSuccess }: PayPalButtonsProps) {
  return (
    <PayPalScriptProvider 
      options={{ 
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!, 
        currency: "USD"
      }}
    >
      <PayPalButtons 
        fundingSource={FUNDING.PAYPAL}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              { 
                amount: { 
                  value: amount.toString() 
                } 
              }
            ]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(data.orderID);
          })
        }}
      />
      </PayPalScriptProvider>
  );
};
