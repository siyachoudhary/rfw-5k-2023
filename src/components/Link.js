import React from 'react'
import './Link.css'
import {
    FaLinkedinIn,
    FaGithub,
    FaRegEnvelope, FaEnvelope
} from 'react-icons/fa'
import { TiSocialLinkedin } from 'react-icons/ti'
import { HiEnvelope, HiOutlineEnvelope } from 'react-icons/hi2'
import { AiFillLinkedin, AiOutlineLinkedin } from 'react-icons/ai'

export const Link = (props) => {

  return (

    <div className = {"button"}>

      <AiFillLinkedin className = "icon"/>
      <AiOutlineLinkedin className = "icon"/>
      
      <FaGithub className = "icon"/>

      <HiEnvelope className = "icon"/>
      <HiOutlineEnvelope className = "icon"/>

    </div>

  )
}
