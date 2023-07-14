import React, { useRef, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './paypal.css'

export default function Paypal() {

  return (
        <div>
            <PayPalScriptProvider 
                options = {{
                    "client-id":
                        "AeMgT3IRONXWLBcyjtj9CEUVOR8DRYMojSWUJje5KxkUAv9qhTBvaLWHTQNJZlpOb6L7n5fUuPVJA_KQ",
                    "disable-funding":
                        "paylater",
                    "enable-funding":
                        "venmo"
                }}
            >
                <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                    purchase_units: [
                        {
                        amount: {
                            value: "30.00",
                        },
                        },
                    ],
                    });
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    alert("Transaction completed by " + name);
                }}
                />
            </PayPalScriptProvider>
        </div>
  );
}