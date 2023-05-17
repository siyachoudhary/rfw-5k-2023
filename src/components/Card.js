import React from 'react'
import './Card.css'
import '../pages/Team.css'
import { useEffect } from 'react'

export const Card = (props) => {

  return (

    <div className = {"item " + props.index}>

      {/* {props.name} */}

      <img
        src = {process.env.PUBLIC_URL + "/assets/people/"+ props.name + ".png"}
        alt = ""
        onError = {({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = process.env.PUBLIC_URL + "/assets/rfw_bg.png";
        }}
        className = "backgroundImage"/>
      
      <img
        src = {process.env.PUBLIC_URL + "/assets/people/"+ props.name + ".png"}
        alt = ""
        onError = {({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = process.env.PUBLIC_URL + "/assets/rfw.png";
        }}
        className = "cardImage"/>

      <div className = "cardText">

        <h3>{props.name}</h3>

      </div>
      
      <div className = "cardLinks">

        

      </div>
        
    </div>

  )
}
