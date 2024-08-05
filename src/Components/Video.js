import React from 'react'
import Nurse from '../Images/nurse.jpg'
import { FaPlayCircle } from "react-icons/fa";

export default function Video() {
  return (
    <>
    <div className="v-container">
        <div className="v-text">
        <div className="videotext"><h5>HIGHEST QUALITY CARE</h5></div>
        <div className="videotext2"><h1>Solutions to Complex Medical Problems</h1></div>
        <div className="videotext3">
        <ul>
            <li>Molestiae, aut, maiores aperiam nisi. Aliquam atque aperiam soluta cumque asperiores quidem. Cumque.</li>
            <li>Molestiae, aut, maiores aperiam nisi. Aliquam atque aperiam soluta cumque asperiores quidem. Cumque.</li>
            <li>Molestiae, aut, maiores aperiam nisi. Aliquam atque aperiam soluta cumque asperiores quidem. Cumque.</li>
        </ul>
        </div>
        </div>
        <div className="v-video">
            <video  poster={Nurse} alt=""  />
            <FaPlayCircle className='playicon' />
        </div>
    </div>
    </>
  )
}