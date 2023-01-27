import React from 'react'
import './Team.css'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import { useState } from "react";

export const Team = () => {

  const [angle, setAngle] = useState(0);

  const next = (e) => {
        
    document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)";
    setAngle(angle => angle - 60);

  }

  const prev = (e) => {
        
    document.querySelector(".carousel").style.transform = "rotateY(" + angle + "deg)";
    setAngle(angle => angle + 60);
    
  }

  return (

    <div className = "content">

        <div className = "carouselContainer">

          <div className = "carousel">

            <div className = "item a">1</div>
            <div className = "item b">2</div>
            <div className = "item c">3</div>
            <div className = "item d">4</div>
            <div className = "item e">5</div>
            <div className = "item f">6</div>

          </div>

        </div>

        <div className = "next" onClick = {next}><MdOutlineArrowForwardIos /></div>
        <div className = "prev" onClick = {prev}><MdOutlineArrowBackIos /></div>

    </div>

  )

}