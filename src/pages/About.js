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

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue.
          Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Volutpat odio
          facilisis mauris sit amet massa vitae. A erat nam at lectus urna duis convallis.
          Nibh venenatis cras sed felis eget velit aliquet. Volutpat est velit egestas dui.
          Lacus vel facilisis volutpat est velit egestas dui id. Congue quisque egestas diam
          in arcu cursus euismod quis. Morbi tristique senectus et netus. Sit amet purus
          gravida quis blandit turpis cursus. In mollis nunc sed id semper risus.

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
