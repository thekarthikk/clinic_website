import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";


export default function SocialMedia() {
  return (
    <>
    <div className="icons">
    <div className="left-container">
    <div className="callicon"><h2><IoMdCall/></h2></div>
    <div className="SMnumber"><h2>+91 123456789</h2></div>
    </div>
    <div className="right-container">
      <div className="facebook"><h2><FaFacebook /></h2></div>
      <div className="instagram"><h2><FaInstagram/></h2></div>
      <div className="linkedin"><h2><FaLinkedin/></h2></div>
      <div className="youtube"><h2><FaYoutube/></h2></div>
    </div>
    </div>
    </>
  )
}
