import React from 'react'
import Carousel1 from '../Images/carousel1.png'
import Carousel2 from '../Images/carousel2.png'
import Carousel3 from '../Images/carousel3.png'
import Carousel4 from '../Images/carousel4.png'
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

export default function Blogs() {
  return (
    <>
    <div className="blog-container">
    <div className="oc-text">
            <hr className='horizonal' />
            <h1>Blog's</h1>
        </div>
        <div className="carousel">
        <div >
  <div class="carousel-inner" role="listbox">
    <div className="carousel-in">
    <div class="item active" id='zoom-in-out-box'>
      <img src={Carousel1} alt="" />
    </div>
    <div class="item">
      <img src={Carousel2} alt=""/>
    </div>
    <div class="item">
      <img src={Carousel3} alt="" />
    </div>
    <div class="item">
      <img src={Carousel4} alt=""/>
    </div>
    </div>
  </div>
</div>
        </div>
        <div className="dots">
        <GoDot />
        <GoDotFill />
        <GoDot />
        <GoDot />
        </div>
    </div>
    </>
  )
}
