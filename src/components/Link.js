import React from 'react'
import './Link.css'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { ImGithub, ImInstagram } from 'react-icons/im'
import { RxExternalLink } from 'react-icons/rx'

export const Link = (props) => {

    if (props.link.includes("linkedin")) {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <FaLinkedinIn className = "icon"/>

                </a>

            </div>

        );

    }

    else if (props.link.includes("github")) {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <ImGithub className = "icon"/>

                </a>

            </div>

        );

    }

    else if (props.link.includes("mail")) {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <FaEnvelope className = "icon"/>

                </a>

            </div>

        );

    }
    else if (props.link.includes("instagram")) {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <ImInstagram className = "icon"/>

                </a>

            </div>

        );

    }

    else {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <RxExternalLink className = "icon"/>

                </a>

            </div>

        );

    }

}
