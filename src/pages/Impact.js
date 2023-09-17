import React from "react"
import "./AllPages.css"
import "./Impact.css"
import "bootstrap/dist/css/bootstrap.min.css";
import db from './firebase.config';
import {useState,useEffect, useRef} from 'react';
import CountUp from "react-countup";

export const Impact = () => {

  const [moneyRaised, setMoneyRaised] = useState(0)
  const [peopleServed, setPeopleServed] = useState(0)
  const [runners, setRunners] = useState(0)
  const [volunteers, setVolunteers] = useState(0)

  useEffect(() => { fetchdata(); }, [])

  const fetchdata = async () => {
    const response = db.collection("impact").doc("stats").get().then((snapshot) => {
      setMoneyRaised(snapshot.data().money)
      setPeopleServed(snapshot.data().people_served)
      setRunners(snapshot.data().runners)
      setVolunteers(snapshot.data().volunteers)
    }).catch((e) => console.log(e))
  }

  const sectionRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isSectionInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isSectionInView && !counted) {
          // Start the count-up animation
          setCounted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counted]);

  return (

      <div className = "Impact" id="impact">

          <div className = "impactStats moneyRaised">

            {/* <h1>$<CountUp end = {moneyRaised} duration = {3}></CountUp></h1> */}
            <div ref={sectionRef} className="count-up-section">
              {counted && <div className="count-up-animation"><h1>$<CountUp end = {moneyRaised} duration = {6}></CountUp></h1></div>}
            </div>
            <h3>RAISED</h3>

          </div>

          <div className = "bottomStats">

            <div className = "impactStats">

              {/* <h1><CountUp end = {volunteers} duration = {2}></CountUp></h1> */}
              {/* <div ref={sectionRef} className="count-up-section"> */}
                {counted && <div className="count-up-animation"><h1><CountUp end = {volunteers} duration = {2}></CountUp></h1></div>}
              {/* </div> */}
              <h3>VOLUNTEERS</h3>

            </div>

            <div className = "impactStats">

              {/* <h1><CountUp end = {runners} duration = {2}></CountUp></h1> */}
              {counted && <div className="count-up-animation"><h1><CountUp end = {runners} duration = {3}></CountUp></h1></div>}
              <h3>RUNNERS</h3>

            </div>

            <div className = "impactStats">

              {/* <h1><CountUp end = {peopleServed} duration = {2}></CountUp></h1> */}
              {counted && <div className="count-up-animation"><h1><CountUp end = {peopleServed} duration = {4}></CountUp></h1></div>}

              <h3>PEOPLE SERVED</h3>

            </div>

            <div className = "impactStats">

              {/* <h1>1</h1> */}
              {counted && <div className="count-up-animation"><h1><CountUp end = {1} duration = {5}></CountUp></h1></div>}
              <h3>CAUSE</h3>

            </div>

          </div>

          <h6 className = "disclaimer">These numbers are all up-to-date.</h6>

      </div>

  )

}
