import React from 'react'
import Consult from '../Images/consult.png'

export default function () {
  return (
    <>
    <div className="app-container">
        <div className="app-img">
            <img src={Consult} alt="" />
        </div>
        <div className="app-form">
            <div className="app-text"><h2>Make an Appointment</h2></div>
            <div className="app-name">
                <div className="firstname">First Name
                    <input type="text" />
                </div>
                <div className="lastname">Last Name <input type="text" /></div>
            </div>
            <div className="email">
                Email id
                <input type="text"/>
            </div>
            <div className="app-name">
                <div className="firstname">Phone Number
                    <input type="text" />
                </div>
                <div className="app-date">Appointment Date
                <input type="date" /></div>
            </div>
            <div className="message">
                Message
                <textarea type="text"/>
            </div>
            <div className="sendbut">
                <button>Send Message</button>
            </div>
        </div>
    </div>
    </>
  )
}
