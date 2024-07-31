import React from 'react'
import Nurse from '../Images/nurse.jpg'
import { FaPlayCircle } from "react-icons/fa";

export default function Video() {
  return (
    <>
    <div className="v-container">
        <div className="v-text">
        <div className="videotext">
        <h5>HIGHEST QUALITY CARE</h5>
        <h1>Solutions to Complex Medical Problems</h1>
        <ul>
            <li>neque hic enim temporibus quia iusto obcaecati molestiae, aut, maiores aperiam nisi. Aliquam atque aperiam soluta cumque asperiores quidem. Cumque.</li>
            <li>neque hic enim temporibus quia iusto obcaecati molestiae, aut, maiores aperiam nisi. Aliquam atque aperiam soluta cumque asperiores quidem. Cumque.</li>
            <li>neque hic enim temporibus quia iusto obcaecati molestiae, aut, maiores aperiam nisi. Aliquam atque aperiam soluta cumque asperiores quidem. Cumque.</li>
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
