import React from 'react'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import anime from '../Images/anime.png'


export default function OnlineCon() {
  return (
    <>
    <div className="oc-container">
        <div className="oc-text">
            <hr className='horizonal' />
            <h1>Online Consultation</h1>
        </div>
        <div className="oc-sub-container">
            <div className="oc-inner">
            <div className="oc-left">
              <div className="left-inner">
                <img src={anime} alt="" /><hr className='horizon'/>
                <p>Madhava J</p>
                <h4>Patient Check-in</h4>
                <p id='zoom'><MdOutlineAccessTimeFilled  className='timefiled'/>  30 mins</p>
                <p id='zoom'><MdOutlineVideocam className='videocam'/>  Zoom</p>
              </div>
            </div>
            <div className="oc-middle">
            <h5>Select a Date & Time</h5>
            <div className="month">
              <h6><IoIosArrowBack /> July 2004 <IoIosArrowForward /></h6>
            </div>
            <div className="calender">
            <ul class="weekdays">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
             <ul class="days">  
               <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
               <li>6</li>
               <li>7</li>
               <li>8</li>
               <li>9</li>
               <li><span class="active">10</span></li>
               <li>11</li>
               <li>12</li>
               <li>13</li>
               <li>14</li>
               <li>15</li>
               <li>16</li>
               <li>17</li>
               <li>18</li>
               <li>19</li>
               <li>20</li>
               <li>21</li>
               <li>22</li>
               <li>23</li>
               <li>24</li>
               <li>25</li>
               <li>26</li>
               <li>27</li>
               <li>28</li>
               <li>29</li>
               <li>30</li>
               <li>31</li>
             </ul>
            </div>
            </div>
            <div className="oc-right">
              <h5>Monday,July 22</h5>
              <div className="time">
                <button>9:00 am</button>
              </div>
              <div className="time">
                <button>11:00 am</button>
              </div>
              <div className="time">
                <button>01:00 am</button>
              </div>
              <div className="time">
                <button>03:00 pm</button>
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
