import React, { useEffect } from 'react'
import './Team.css'
import { Card } from '../components/Card.js'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import { useState } from "react";

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

            <Card index = "a" name = "gerard"/>
            <Card index = "b" name = "2"/>
            <Card index = "c" name = "3"/>
            <Card index = "d" name = "4"/>
            <Card index = "e" name = "5"/>
            <Card index = "f" name = "6"/>
            <Card index = "g" name = "7"/>
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