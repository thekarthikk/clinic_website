import React from 'react'
import Dr from '../Images/drmukerjee.png'


export default function Aboutdoctr() {
  return (
    <>
    <div className="fc-container">
       <div className="fc-sub-container">
       <div className="fc-left">
        <img src={Dr} alt="" />
        </div>
        <div className="fc-right">
            <h5>About</h5>
            <h2>Dr Name ....</h2>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore id sint cupiditate tempora, possimus optio vero consequatur.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore id sint cupiditate tempora, possimus optio vero consequatur m</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore id sint cupiditate tempora, possimus optio vero consequatur m</li>
            </ul>
            <button id='but1'>Online Consultations</button>
            <button id='but2'>Make an Appointment</button>
        </div>
       </div>
    </div>
    </>
  )
}
