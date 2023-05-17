import React from 'react'
import './Link.css'
import {
    FaLinkedinIn,
    FaRegEnvelope,
} from 'react-icons/fa'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { ImGithub } from 'react-icons/im'

export const Link = (props) => {

    if (props.link.includes("linkedin")) {

        return (

            <div className = {"button"}>

                <div href = {props.link} target = "_blank" rel = "noreferrer">

                    <FaLinkedinIn className = "icon"/>

                </div>

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

    else if (props.link.includes("mailto")) {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <HiOutlineEnvelope className = "icon"/>

                </a>

            </div>

        );

    }

    else {

        return (

            <div className = {"button"}>

                <a href = {props.link} target = "_blank" rel = "noreferrer">

                    <FaRegEnvelope className = "icon"/>

                </a>

            </div>

        );

    }

}
