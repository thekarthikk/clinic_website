import React from 'react'
import { IoMdCall } from "react-icons/io";
import DocImage from '../Images/doc_image.jpg'


export default function Main() {
  return (
    <>
    <div className="content-container">
      <div className="Main-sub-container">
      <div className="text">
        <div className="text-subdiv">
        <h6>Welcome To Our Clinic</h6>
        <h2>Take Care Of Your Health</h2>
        <h6 id='paragraph'>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem</h6>
        <div className="buttons-div">
        <button className='button1'>Book Appointment</button>
        <button className='button2'>BMI Calculator</button>
        </div>
        </div>   
      </div>
      <div className="boxs">
        <div className="box">
          <div className="box1">
            <div className="heading">
              <h5><b>Working Time</b></h5>
            </div>
            <div className="parentime">
              <div className="childay">
                <p>Monday-Friday </p>
                <p>Saturday </p>
              </div>
              <div className="childtime">
                <p>09:00 - 17:00</p>
                <p>09:00 - 14:00</p>
              </div>
            </div>
            <div className="secparent">
              <div className="childone"><p>Sunday</p></div>
              <div className="childtwo"><p>Closed</p></div>
            </div>
          </div>
          <div className="box2">
          <div className="heading">
              <h5><b>Appointment</b></h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam non  voluptas maiores ex. </p>
           <div className="main-but">
           <button className='appointbut'>Make an Appointment</button>
           </div>
          </div>
          <div className="box3">
          <div className="heading">
              <h5><b>BMI Checker</b></h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam non  voluptas maiores ex. </p>
            <div className="main-but">
            <button className='appointbut'>BMI Calculator</button>
            </div>
          </div>
          <div className="box4">
          <div className="heading">
              <h5><b>Emergency Cases</b></h5>
              <h5>
              <IoMdCall/>
              +91 9810532834
              </h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam non  voluptas maiores ex. </p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
