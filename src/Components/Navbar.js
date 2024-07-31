import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link" >
           Home<IoIosArrowDown />
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link" >
           About-us<IoIosArrowDown />
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link">
            Surgeries<IoIosArrowDown />
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link" >
            Testimonials<IoIosArrowDown />
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link">
            Gallery<IoIosArrowDown />
          </a>
        </li>
      </ul>
    </div>
    <div className="button">
    <button className='bmical'>
        BMI Calculator
      </button>
    </div>
  </div>
</nav>
    </>
  )
}
