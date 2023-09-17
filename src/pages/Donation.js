import React, { useRef, useEffect, useState } from "react";
// import './Registration.css'
import './Donation.css'
import PayPal from "../components/paypal";
// import {getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, deleteDoc, query, orderBy} from 'firebase/firestore';
import db from './firebase.config.js';
import "./AllPages.css"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const Donation = () => {
    const [divStyles, setDivStyles] = useState({});
    const [visibilities, setVisibilities] = useState(["visible", "hidden", "hidden", "hidden", "hidden"]);
    const [pointers, setPointers] = useState(["auto", "none", "none", "none", "none"]);


    function getDonation(amt) {
        if(amt == "1") {
            setVisibilities(["visible", "hidden", "hidden", "hidden", "hidden"]);
            setPointers(["auto", "none", "none", "none", "none"]);
        }
        if(amt == "5") {
            setVisibilities(["hidden", "visible", "hidden", "hidden", "hidden"]);
            setPointers(["none", "auto", "none", "none", "none"]);
        }
        if(amt == "10") {
            setVisibilities(["hidden", "hidden", "visible", "hidden", "hidden"]);
            setPointers(["none", "none", "auto", "none", "none"]);
        }
        if(amt == "25") {
            setVisibilities(["hidden", "hidden", "hidden", "visible", "hidden"]);
            setPointers(["none", "none", "none", "auto", "none"]);
        }
        if(amt == "50") {
            setVisibilities(["hidden", "hidden", "hidden", "hidden", "visible"]);
            setPointers(["none", "none", "none", "none", "auto"]);
        }
        console.log(amt)
    }

    return(
        <div className = 'donationSection'>
            <div className = 'formSection2'>
                <h1 className = 'labels registrationSectionHeader2'>Donation</h1>
                <p className = "requirements">Choose Donation Amount</p>
                <button onClick={() => getDonation("1")}>$1</button>
                <button onClick={() => getDonation("5")}>$5</button>
                <button onClick={() => getDonation("10")}>$10</button>
                <button onClick={() => getDonation("25")}>$25</button>
                <button onClick={() => getDonation("50")}>$50</button>

            </div>

            <div className = 'paymentSection2'>
                <div id = "1dono" className = "paypalDiv" style={{visibility: visibilities[0], pointerEvents: pointers[0]}}>
                <p className = "requirements amount">$1</p>
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
                        onClick={() => {
                            setTimeout(function () {
                                var divElement = document.querySelector(".paymentSection");
                                var elemHeight = divElement.offsetHeight;
                                
                                // if(elemHeight > 400 && window.screen.width >= 990) {
                                //     setDivStyles({marginTop : "-200px"});
                                // }
                                // console.log(document.getElementsByClassName('paymentSection')[0])
                            }, 2000);
                        }}

                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: "1.00",
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

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>




                <div id = "5dono" className = "paypalDiv" style={{visibility: visibilities[1], pointerEvents: pointers[1]}}>
                <p className = "requirements amount">$5</p>
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
                        onClick={() => {
                            setTimeout(function () {
                                var divElement = document.querySelector(".paymentSection");
                                var elemHeight = divElement.offsetHeight;
                                
                                // if(elemHeight > 400 && window.screen.width >= 990) {
                                //     setDivStyles({marginTop : "-200px"});
                                // }
                                // console.log(document.getElementsByClassName('paymentSection')[0])
                            }, 2000);
                        }}

                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: "5.00",
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

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div id = "10dono" className = "paypalDiv" style={{visibility: visibilities[2], pointerEvents: pointers[2]}}>
                <p className = "requirements amount">$10</p>
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
                        onClick={() => {
                            setTimeout(function () {
                                var divElement = document.querySelector(".paymentSection");
                                var elemHeight = divElement.offsetHeight;
                                
                                // if(elemHeight > 400 && window.screen.width >= 990) {
                                //     setDivStyles({marginTop : "-200px"});
                                // }
                                // console.log(document.getElementsByClassName('paymentSection')[0])
                            }, 2000);
                        }}

                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: "10.00",
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

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div id = "25dono" className = "paypalDiv" style={{visibility: visibilities[3], pointerEvents: pointers[3]}}>
                <p className = "requirements amount">$25</p>
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
                        onClick={() => {
                            setTimeout(function () {
                                var divElement = document.querySelector(".paymentSection");
                                var elemHeight = divElement.offsetHeight;
                                
                                // if(elemHeight > 400 && window.screen.width >= 990) {
                                //     setDivStyles({marginTop : "-200px"});
                                // }
                                // console.log(document.getElementsByClassName('paymentSection')[0])
                            }, 2000);
                        }}

                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: "25.00",
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

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div id = "50dono" className = "paypalDiv" style={{visibility: visibilities[4], pointerEvents: pointers[4]}}>
                <p className = "requirements amount">$50</p>
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
                        onClick={() => {
                            setTimeout(function () {
                                var divElement = document.querySelector(".paymentSection");
                                var elemHeight = divElement.offsetHeight;
                                
                                // if(elemHeight > 400 && window.screen.width >= 990) {
                                //     setDivStyles({marginTop : "-200px"});
                                // }
                                // console.log(document.getElementsByClassName('paymentSection')[0])
                            }, 2000);
                        }}

                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: "50.00",
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

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
    );
}
