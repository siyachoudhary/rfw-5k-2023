import React from "react"
import "./AllPages.css"
import "./Impact.css"
import "bootstrap/dist/css/bootstrap.min.css";
import db from './firebase.config';
import {useState,useEffect} from 'react';

export const Impact = () => {

  const [moneyRaised, setMoneyRaised] = useState("")
  const [peopleServed, setPeopleServed] = useState("")
  const [runners, setRunners] = useState("")
  const [volunteers, setVolunteers] = useState("")

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata=async()=>{
    const response=db.collection("impact").doc("stats").get().then((snapshot) => {
      setMoneyRaised(snapshot.data().money)
      setPeopleServed(snapshot.data().people_served)
      setRunners(snapshot.data().runners)
      setVolunteers(snapshot.data().volunteers)
    }).catch((e) => console.log(e))
    
    // alert(response)
  }
  
  return (

      <div>

          <div className = "impactStats moneyRaised">

            <h1>${moneyRaised}</h1>
            <h3>RAISED</h3>

          </div>

          <div className = "bottomStats">

            <div className = "impactStats">

              <h1>{runners}</h1>
              <h3>RUNNERS</h3>

            </div>

            <div className = "impactStats">

              <h1>{volunteers}</h1>
              <h3>VOLUNTEERS</h3>

            </div>

            <div className = "impactStats">

              <h1>{peopleServed}+</h1>
              <h3>PEOPLE SERVED</h3>

            </div>

            <div className = "impactStats">

              <h1>1</h1>
              <h3>CAUSE</h3>

            </div>

          </div>

          <h6 className = "disclaimer">These numbers are all up-to-date.</h6>

      </div>

  )

}
