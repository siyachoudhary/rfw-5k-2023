import React, { useEffect } from 'react'
import './Team.css'
import { Card } from '../components/Card.js'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"

import { useState } from "react"

export const Team = () => {

  const [angle, setAngle] = useState(0);
  const count = 15;

  useEffect(() => { document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)"; }, [angle]);

  const next = (e) => {
        
    setAngle(angle => angle - (360 / count));
    document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)";

  }

  const prev = (e) => {
        
    setAngle(angle => angle + (360 / count));
    document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)";
    
  }

  return (

    <div className = "content">

        <div className = "carouselContainer">

          <div className = "carousel">

            <Card index = "a"
                  name = "Gerard Swami"
                  role = "Swami of the Sacred Heart"
                  linkedIn = "https://www.linkedin.com/in/gerard-swami/"
                  github = "https://github.com/swami-gerard"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=swami@gerard.com&tf=cm"
                  link = "https://stackoverflow.com/#"/>

            <Card index = "b"
                  name = "Ankit Rath"
                  role = "Child Predator"
                  linkedIn = "https://www.linkedin.com/in/ankit-rath-967163249/"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=rathankit27@gmail.com&tf=cm"/>

            <Card index = "c"
                  name = "Aryan Gupta"
                  role = "Milf Hunter"
                  linkedIn = "https://www.linkedin.com/in/aryan-g/"
                  github = "https://github.com/aryan-cs"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=aryan05g@gmail.com&tf=cm"/>

            <Card index = "d"
                  name = "Sid Dayaneni"
                  role = "Slave"
                  linkedIn = "https://www.linkedin.com/in/siddharth-dayaneni-025119262/"
                  github = "https://github.com/SidD11111"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=siddharth.dayaneni@gmail.com&tf=cm"/>

            <Card index = "e"
                  name = "Siya Choudhary"
                  role = "Fat Kid Kicker"
                  linkedIn = "https://www.linkedin.com/in/siya-choudhary-2b0b89229/"
                  github = "https://github.com/siyachoudhary"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=siyacanvas@gmail.com&tf=cm"/>

            <Card index = "f"
                  name = "Shiven Patel"
                  role = "Rahul's Trans Daughter"
                  linkedIn = "https://www.linkedin.com/in/shiven-patel-467bb4233/"
                  email = "https://mail.google.com/mail/u/0/?fs=1&to=patelshiven1@gmail.com&tf=cm"/>

            <Card index = "g"
                  name = "NAME"
                  role = "ROLE"
                  linkedIn = ""
                  github = ""
                  email = ""
                  link = ""/>

            <Card index = "h" name = "8"/>
            <Card index = "i" name = "9"/>
            <Card index = "j" name = "10"/>
            <Card index = "k" name = "11"/>
            <Card index = "l" name = "12"/>
            <Card index = "m" name = "13"/>
            <Card index = "n" name = "14"/>
            <Card index = "o" name = "15"/>

          </div>

        </div>

        <div className = "next" onClick = {next}><MdOutlineArrowForwardIos /></div>
        <div className = "prev" onClick = {prev}><MdOutlineArrowBackIos /></div>

    </div>

  )

}