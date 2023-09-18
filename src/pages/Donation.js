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
    const [positions, setPositions] = useState([0, 999, 999, 999, 999]);
    const [pointers, setPointers] = useState(["auto", "none", "none", "none", "none"]);


    function getDonation(amt) {
        if(amt === "1") {
            setVisibilities(["visible", "hidden", "hidden", "hidden", "hidden"]);
            setPointers(["auto", "none", "none", "none", "none"]);
            setPositions([0, 999, 999, 999, 999]);
            
        }
        if(amt === "5") {
            setVisibilities(["hidden", "visible", "hidden", "hidden", "hidden"]);
            setPointers(["none", "auto", "none", "none", "none"]);
            setPositions([999, 0, 999, 999, 999]);
        }
        if(amt === "10") {
            setVisibilities(["hidden", "hidden", "visible", "hidden", "hidden"]);
            setPointers(["none", "none", "auto", "none", "none"]);
            setPositions([999, 999, 0, 999, 999]);
        }
        if(amt === "25") {
            setVisibilities(["hidden", "hidden", "hidden", "visible", "hidden"]);
            setPointers(["none", "none", "none", "auto", "none"]);
            setPositions([999, 999, 999, 0, 999]);
        }
        if(amt === "50") {
            setVisibilities(["hidden", "hidden", "hidden", "hidden", "visible"]);
            setPointers(["none", "none", "none", "none", "auto"]);
            setPositions([999, 999, 999, 999, 0]);
        }
        console.log(amt)
    }


    async function updateStats(amt){

        var moneyRaised = db.collection('impact').doc('stats').get().then((doc) => {
            moneyRaised = doc.data().money;

            var runners = db.collection('impact').doc('stats').get().then((doc) => {
                runners = doc.data().runners;

                const updateStats = db.collection('impact').doc('stats').update({
                    money: parseFloat(moneyRaised) + parseFloat(amt), 
                })
            })
        })

    }

    return(
        <div className = 'donationSection' id='donate'>
            <div className = 'formSection2'>
                <h1 className = 'labels registrationSectionHeader2'>DONATE</h1>
                <p className = "requirements">Choose Donation Amount</p>
                <button className = "donationValue" onClick={() => getDonation("1")} autoFocus = {true}>$1</button>
                <button className = "donationValue" onClick={() => getDonation("5")}>$5</button>
                <button className = "donationValue" onClick={() => getDonation("10")}>$10</button>
                <button className = "donationValue" onClick={() => getDonation("25")}>$25</button>
                <button className = "donationValue" onClick={() => getDonation("50")}>$50</button>

            </div>

            <div className = 'payment'>

            <div className = 'paymentSection2'>
                <div id = "1dono" className = "paypalDiv" style={{visibility: visibilities[0], pointerEvents: pointers[0], paddingLeft: positions[0] + "vw"}}>
                <p className = "requirements amount"> Donate $1 using...</p>
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
                                if (window.screen.width < 990) {
                                    document.getElementById("footerContainer").style.marginTop = "600px";
                                }
                                
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
                            updateStats(1);

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>




                <div id = "5dono" className = "paypalDiv" style={{visibility: visibilities[1], pointerEvents: pointers[1], paddingLeft: positions[1] + "vw"}}>
                <p className = "requirements amount">Donate $5 using...</p>
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
                                if (window.screen.width < 990) {
                                    document.getElementById("footerContainer").style.marginTop = "600px";
                                }
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
                            updateStats(5);

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div id = "10dono" className = "paypalDiv" style={{visibility: visibilities[2], pointerEvents: pointers[2], paddingLeft: positions[2] + "vw"}}>
                <p className = "requirements amount">Donate $10 using... </p>
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
                                if (window.screen.width < 990) {
                                    document.getElementById("footerContainer").style.marginTop = "600px";
                                }
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
                            updateStats(10);

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div id = "25dono" className = "paypalDiv" style={{visibility: visibilities[3], pointerEvents: pointers[3], paddingLeft: positions[3] + "vw"}}>
                <p className = "requirements amount">Donate $25 using...</p>
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
                                if (window.screen.width < 990) {
                                    document.getElementById("footerContainer").style.marginTop = "600px";
                                }
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
                            updateStats(25);

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div id = "50dono" className = "paypalDiv" style={{visibility: visibilities[4], pointerEvents: pointers[4], paddingLeft: positions[4] + "vw"}}>
                <p className = "requirements amount">Donate $50 using...</p>
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
                                if (window.screen.width < 990) {
                                    document.getElementById("footerContainer").style.marginTop = "600px";
                                }
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
                            updateStats(50);

                            setDivStyles({});
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

            </div>

        </div>
    );
}
