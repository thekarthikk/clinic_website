import React from 'react'
import Man from'../Images/man.jpg'
import Women from'../Images/women.jpg'
import Man2 from'../Images/man2.jpg'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";




export default function Testimonials() {
  return (
    <>
    <div className="test-container">
    <div className="oc-text">
            <hr className='horizonal' />
            <h1>Testimonials</h1>
        </div> 
        <div className="text-carousels">
        <div className="main-carousel">
        <div class="tcard" style={{ height:'15rem',width:'15rem'}}>
  <img src={Man} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="t-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae, quod laudantium dolores alias, reprehenderit distinctio libero fugiat corrupti corporis necessitatibus veniam.</p>
    <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></div>
  </div>
</div>
<div class="tcard" style={{height:'15rem',width:'15rem'}}>
  <img src={Women} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="t-card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vitae obcaecati quisquam eius maxime repellendus ipsam voluptas expedita doloribus quia repellat praesentium laborum </p>
    <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
  </div>
</div>
<div class="tcard" style={{height:'15rem',width:'15rem'}}>
  <img src={Man2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="t-card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nam iusto quia aut, quibusdam excepturi ea quos error corrupti delectus repudiandae facilis qui odio officia? Vel ratione</p>
    <div className="stars"><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></div>
  </div>
</div>
        </div>
        </div>
        <div className="dots">
        <GoDot />
        <GoDotFill />
        <GoDot />
        </div>
    </div>
    </>
  )
}
