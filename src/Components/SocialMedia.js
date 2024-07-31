import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";


export default function SocialMedia(props) {
  return (
    <>
    <div className="icons">
    <div className="left-container">
    <div className="sub-container">
    <IoMdCall/>
    <h6>+91 9810532834</h6>
    </div>
    </div>
    <div className="right-container">
    <div className="icon-container">
    <FaFacebook />
    <FaInstagram/>
    <FaLinkedin/>
    <FaYoutube/>
    </div>
    </div>
    </div>
    </>
  )
}
