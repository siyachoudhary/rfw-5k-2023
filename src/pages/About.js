import React from 'react'
import './About.css'
import "./AllPages.css"

export const About = () => {

  return (

    <div id='about'>

        <header className = "Shadowed Gradient About-header">

          WHO ARE WE?

        </header>

        <div className = "About-body">

          <p className = "About-text">

          We are Run for Water, a youth-driven nonprofit dedicated to providing clean drinking
          water to underserved villages in third-world countries. Established by a group of
          passionate high school students in 2022, our mission is to turn compassion into action.
          Through annual 5K events, we raise funds and awareness to initiate sustainable water
          projects in remote communities, transforming lives one drop at a time. Join us in
          our unwavering commitment to making clean water accessible to all, and be part of
          a movement that creates lasting change across the globe.
          <br /> <br />
          This year, we will host our annual 5K Run & Walk event at <b>Busse Woods Grove 28</b>,
          on <b>September 24th</b>, and aim to raise <b>$10,000</b> to aid villages in <b>Rajasthan, India</b>.


          </p>

          <img
             src = {process.env.PUBLIC_URL + "/assets/collage.png"}
             alt = ""
             onError = {({ currentTarget }) => {
               currentTarget.onerror = null;
               currentTarget.src = process.env.PUBLIC_URL + "/assets/rfw.png";
             }}
             className = "About-collage"/>

        </div>
        
    </div>

  )
}
