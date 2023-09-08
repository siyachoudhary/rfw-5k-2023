import React, { useRef, useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './paypal.css'

const style = {"layout":"vertical"};

export default function Paypal(props) {
    const [divStyles, setDivStyles] = useState({});

    // const createOrder = (data, actions) => {
    //     return actions.order
    //         .create({
    //             purchase_units: [
    //                 {
    //                     amount: {
    //                         value: donationAmount,
    //                     },
    //                 },
    //             ],
    //             application_context: {
    //                 shipping_preference: "NO_SHIPPING"
    //             }
    //         })
    //         .then((orderID) => {
    //             setOrderID(orderID);
    //             return orderID;
    //         });
    // }

    const buttonPressed = e => {
        console.log(e.target.id);  // Get ID of Clicked Element
      }

  return (
        <div className = "paymentDiv" style={divStyles}>
            <PayPalScriptProvider 
                options = {{
                    "client-id":
                        "AV7MfXw_4_h-t_6qpwog3nbLnuykshCPxIzjFTPCvhvwZldCFnmm8pAQK2zbE32tzk3yp3silxw1YFxt",
                    "disable-funding":
                        "paylater",
                    "enable-funding":
                        "venmo",
                }}
            >
                <PayPalButtons
                style={style}
                onClick={() => {
                    setTimeout(function () {
                        var divElement = document.querySelector(".paymentSection");
                        var elemHeight = divElement.offsetHeight;
                        
                        if(elemHeight > 400 && window.screen.width >= 990) {
                            setDivStyles({marginTop : "-200px"});
                        }
                        // console.log(document.getElementsByClassName('paymentSection')[0])
                    }, 2000);
                  }}

                createOrder={(data, actions) => {
                    return actions.order.create({
                    purchase_units: [
                        {
                        amount: {
                            value: "32.00",
                        },
                        },
                    ],
                    application_context: {
                        shipping_preference: "NO_SHIPPING"
                    }
                    });
                }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    // alert("Transaction completed by " + name);
                    props.passChildData(true)

                    if(props.filledOut) {
                        // alert('passing')
                        props.passDisabled(false);
                    }
                    setDivStyles({});
                }}
                />
            </PayPalScriptProvider>

         </div>
  );
}