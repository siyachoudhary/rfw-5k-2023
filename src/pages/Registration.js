import './Registration.css'
import PayPal from "../components/paypal";
// import {getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, deleteDoc, query, orderBy} from 'firebase/firestore';
import db from './firebase.config.js';
import "./AllPages.css"

export const Registration = () => {
    return(
        <div className = 'registrationSection'>
            <div className = 'formSection'>
                <h1 className = 'labels registrationSectionHeader'>Registration</h1>
                <form>
                    <div className="form-row firstname">
                        <div className="form-group col-md-6">
                            <label className = 'labels'>First Name</label>
                            <input type="firstName" className="form-control fn" id="firstName" placeholder="First Name"/>
                        </div>

                        <div className="form-group col-md-6">
                            <label className = 'labels'>Last Name</label>
                            <input type="lastName" className="form-control ln" id="lastName" placeholder="Last Name"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group email">
                            <div className="form-group col-md-6 email">
                                    <label className = 'labels'>Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>
                            </div>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6 gendersection">
                            <label className = 'labels'>Gender</label>
                                <select id="inputState" className="form-control gen">
                                    <option selected>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                    <option>Prefer Not to Say</option>
                                </select>
                        </div>


                        <div className="form-group col-md-2 agesection">
                            <label className = 'labels'>Age</label>
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
                            <label className = 'labels'>Shirt Size (Adult Sizes)</label>
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

                <button type="submit" onClick = {addRunner} className="btn btn-primary">Submit</button>

            </div>

            <div className = 'paymentSection'>
                <PayPal/>
            </div>

        </div>
    );
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

    console.log(document.getElementsByClassName('form-control')[3].value);

    console.log('success!')
}

