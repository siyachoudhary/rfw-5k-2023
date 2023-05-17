import React from 'react'
import './Card.css'
import '../pages/Team.css'
import { useEffect } from 'react'
import { Link } from '../components/Link.js'

export const Card = (props) => {

  return (

    <div className = {"item " + props.index}>

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

        <h3>{props.name.toUpperCase()}</h3>

      </div>
      
      <div className = "cardLinks">

      <Link link = {"https://www.linkedin.com/in/aryan-g/"} />
      <Link link = {"https://github.com/aryan-cs"} />
      <Link link = {"https://mail.google.com/mail/u/0/?fs=1&to=aryan05g@gmail.com&tf=cm"} />

      </div>
        
    </div>

  )
}
