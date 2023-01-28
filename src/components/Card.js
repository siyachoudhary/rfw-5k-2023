import React from 'react'
import './Card.css'
import '../pages/Team.css'

export const Card = (props) => {

  return (

    <div className = {"item " + props.index}>

        {props.name}
        
    </div>

  )
}
