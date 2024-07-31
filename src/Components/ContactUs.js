import React from 'react'
import Doc from '../Images/docimg1.png'
import { IoMdCall } from "react-icons/io";


export default function ContactUs() {
  return (
    <>
    <div className="contact-container">
        <div className="contactus">
        <div className="circleimg">
        </div>
        <div className="details">
            <div className="con-context">
                <h1>Contact - Us</h1>
                <h5><b>Please feel free to contact us for emergency case.</b></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi est sequi unde, totam at, ad praesentium officia tempora animi tenetur modi aut ut?</p>
                <div className="contact-num">
                <IoMdCall id='callicon'/>
                <h6>+91 9810532834</h6>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
