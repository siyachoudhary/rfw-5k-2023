import React from 'react'
import './Card.css'
import '../pages/Team.css'
import { useEffect } from 'react'
import { Link } from '../components/Link.js'

export const Card = (props) => {

  return (

    <div className = {"item " + props.index}>

      <img
        src = {process.env.PUBLIC_URL + "/assets/people/"+ props.name.toLowerCase() + ".png"}
        alt = ""
        onError = {({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = process.env.PUBLIC_URL + "/assets/rfw_bg.png";
        }}
        className = "backgroundImage"/>
      
      <img
        src = {process.env.PUBLIC_URL + "/assets/people/"+ props.name.toLowerCase() + ".png"}
        alt = ""
        onError = {({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = process.env.PUBLIC_URL + "/assets/rfw.png";
        }}
        className = "cardImage"/>

      <div className = "cardText">

        <h3>{props.name.toUpperCase()}</h3>
        <p>{props.role}</p>
      
        <div className = "cardLinks">

          {props.linkedIn ? <Link link = {props.linkedIn} /> : null}
          {props.github ? <Link link = {props.github} /> : null}
          {props.email ? <Link link = {props.email} /> : null}
          {props.link ? <Link link = {props.link} /> : null}

        </div>

      </div>
        
    </div>

  )
}
