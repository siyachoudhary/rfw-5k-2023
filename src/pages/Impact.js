import React from "react"
import "./AllPages.css"
import "./Impact.css"
import "bootstrap/dist/css/bootstrap.min.css";
import db from './firebase.config';
import {useState,useEffect, useRef} from 'react';
import CountUp from "react-countup";
import ReactCounUp, { CountUpProps } from "react-countup";
import { useInView } from "react-intersection-observer";

export const Impact = () => {

  const [moneyRaised, setMoneyRaised] = useState("")
  const [peopleServed, setPeopleServed] = useState("")
  const [runners, setRunners] = useState("")
  const [volunteers, setVolunteers] = useState("")

  useEffect(() => { fetchdata(); }, [])

  const fetchdata = async () => {
    const response = db.collection("impact").doc("stats").get().then((snapshot) => {
      setMoneyRaised(snapshot.data().money)
      setPeopleServed(snapshot.data().people_served)
      setRunners(snapshot.data().runners)
      setVolunteers(snapshot.data().volunteers)
    }).catch((e) => console.log(e))
  }

  return (

      <div className = "Impact" id="impact">

          <div className = "impactStats moneyRaised">
            <h1>
              <CountUp delay={2} end={moneyRaised} ></CountUp>
            </h1>
            <h3>RAISED</h3>

          </div>

          <div className = "bottomStats">

            <div className = "impactStats">

              <h1><CountUp delay={2} end={volunteers} /></h1>
              <h3>VOLUNTEERS</h3>

            </div>

            <div className = "impactStats">

              <h1><CountUp delay={2} end={runners} /></h1>
              <h3>RUNNERS</h3>

            </div>

            <div className = "impactStats">

              <h1><CountUp delay={2} end={peopleServed} /></h1>
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
