import React, { useRef, useEffect, useState } from "react";
import './Registration.css'
import PayPal from "../components/paypal";
// import {getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, deleteDoc, query, orderBy} from 'firebase/firestore';
import db from './firebase.config.js';
import "./AllPages.css"

export const Registration = () => {
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const filledOut = useRef(false);
    const [paid, setPaid] = useState(false);
    const [submitButtonText, setsubmitButtonText] = useState("Submit");

    async function updateStats(){

        var moneyRaised = db.collection('impact').doc('stats').get().then((doc) => {
            moneyRaised = doc.data().money;

            var runners = db.collection('impact').doc('stats').get().then((doc) => {
                runners = doc.data().runners;

                const updateStats = db.collection('impact').doc('stats').update({
                    money: parseFloat(moneyRaised) + parseFloat(30.4), 
                    runners: parseInt(runners) + parseInt(1)
                })
            })
        })

    }

    async function addRunner(){
        var firstName = document.getElementsByClassName('form-control')[0].value;
        var lastName = document.getElementsByClassName('form-control')[1].value;
        var email = document.getElementsByClassName('form-control')[2].value;
        var gender = document.getElementsByClassName('form-control')[3].value;
        var age = document.getElementsByClassName('form-control')[4].value;
        var size = document.getElementsByClassName('form-control')[5].value;
    
        const addRunner = await db.collection('runners').add({
            firstName : firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            age: age,
            size: size
        });

        updateStats();
    
        console.log(document.getElementsByClassName('form-control')[3].value);
    
        console.log('success!')
        alert("Thank you for registering! You will receive an email with more information soon.")
        firstName = "";
        lastName = "";
        email = "";

        setSubmitDisabled(true);
    }

    function checkDisable(){
        var firstName = document.getElementsByClassName('form-control')[0].value;
        var lastName = document.getElementsByClassName('form-control')[1].value;
        var email = document.getElementsByClassName('form-control')[2].value;
        var gender = document.getElementsByClassName('form-control')[3].value;
        var age = document.getElementsByClassName('form-control')[4].value;
        var size = document.getElementsByClassName('form-control')[5].value;


        if(firstName != "" && lastName != "" && email != "" && gender != "" && age != "" && size != "" && gender != "Choose..." && age != "Choose..." && size != "Choose..."){
            filledOut.current = true;
            // alert(filledOut.current)
            // alert(firstName + " " + lastName + " " + email + " " + gender + " " + age + " " + size)
        }
        else if(firstName == "" || lastName == "" || email == "" || gender == "" || age == "" || size == ""){
            filledOut.current = false;
        }

        if(paid && filledOut.current) {
            setSubmitDisabled(false);
            setsubmitButtonText("Submit");
        }

        else if(paid) {
            setSubmitDisabled(true);
            setsubmitButtonText("Submit");
        }

        else if(filledOut.current) {
            setSubmitDisabled(true);
            setsubmitButtonText("Submit");
        }
        else {
            setSubmitDisabled(true);
        }
      }

    document.addEventListener("mousemove", function(event) {
        checkDisable()
      });

      document.addEventListener("touchmove", function(event) {
        checkDisable()
      });

  

    //   document.onclick= function(event) {
    //     // Compensate for IE<9's non-standard event model
    //     //
    //     if (event===undefined) event= window.event;
    //     checkDisable();
    // };

    function getFilledOut(){
        return filledOut.current;
    }

    
    return(
        <div className = 'registrationSection'>
            <div className = 'formSection'>
                <h1 className = 'labels registrationSectionHeader'>REGISTRATION</h1>
                <p className = "requirements">$32 Payment and Information Required Before Submission</p>
                <form>
                    <div className="form-row firstname">
                        <div className="form-group col-md-6">
                            <label className = 'labels'>FIRST NAME</label>
                            <input type="firstName" className="form-control fn" id="firstName" placeholder="John"/>
                        </div>

                        <div className="form-group col-md-6">
                            <label className = 'labels'>LAST NAME</label>
                            <input type="lastName" className="form-control ln" id="lastName" placeholder="Doe"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group email">
                            <div className="form-group col-md-6 email">
                                    <label className = 'labels'>EMAIL</label>
                                    <input type="email" className="form-control" id="email" placeholder="johndoe@email.com"/>
                            </div>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6 gendersection">
                            <label className = 'labels'>GENDER</label>
                                <select id="inputState" className="form-control gen">
                                    <option selected>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                    <option>Prefer Not to Say</option>
                                </select>
                        </div>


                        <div className="form-group col-md-2 agesection">
                            <label className = 'labels'>AGE</label>
                                <select id="inputState" className="form-control age">
                                    <option selected>Choose...</option>
                                    <option>8 and under</option>
                                    <option>9-13</option>
                                    <option>14-18</option>
                                    <option>19-29</option>
                                    <option>30-39</option>
                                    <option>40-49</option>
                                    <option>40-49</option>
                                    <option>50-59</option>
                                    <option>60+</option>
                                    <option></option>
                                </select>
                        </div>


                        <div className="form-group col-md-4 sizesection">
                            <label className = 'labels'>SIZE</label>
                            <select id="inputState" className="form-control size">
                                <option selected>Choose...</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                        
                    </div>

                    
                </form>

                <button disabled = {submitDisabled} type="submit" onClick = {addRunner} className="btn btn-primary">{submitButtonText}</button>

            </div>

            <div className = 'paymentSection'>
                <PayPal passChildData={setPaid} getFilledOut = {getFilledOut} passDisabled = {setSubmitDisabled}/>
            </div>

        </div>
    );
}
