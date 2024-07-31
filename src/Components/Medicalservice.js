import React from 'react'
import Image4 from '../Images/image4.png'
import Image from '../Images/image.png'
import Image3 from '../Images/image3.png'
import Image2 from '../Images/image2.png'
import Image1 from '../Images/image1.png'


export default function Medicalservice() {
  return (
    <>
    <div className="ms-container">
      <div className="ms-text">
        <h1>Our Medical Services</h1>
        <div className="msh6">
        <h6>Lorem iusto veniam laborum optio corrupti expedita inventore assumenda ipsum. Iste veniam eligendi placeat alias enim.</h6>
        </div>
      </div>
      <div className="cards">
      <div class="card">
  <img src={Image4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>Gastric Bypass Surgery</b></h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quae, quod laudantium dolores alias, reprehenderit distinctio libero fugiat corrupti corporis necessitatibus veniam, mollitia ipsam numquam consectetur nisi facere minima odio..</p>
  </div>
</div>
<div class="card">
  <img src={Image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Endoscopic Anorectal Surgery</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vitae obcaecati quisquam eius maxime repellendus ipsam voluptas expedita doloribus quia repellat praesentium laborum consequatur id quae, corporis necessitatibus! Qui, numquam?</p>
  </div>
</div>
<div class="card" >
  <img src={Image3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Variocelectomy Surgery</h5>
    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nam iusto quia aut, quibusdam excepturi ea quos error corrupti delectus repudiandae facilis qui odio officia? Vel ratione suscipit aperiam architecto?.</p>
  </div>
</div>
<div class="card" >
  <img src={Image2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Appendix Surgery</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, incidunt odio adipisci magnam iusto enim atque harum iste qui excepturi? Vero in iure maxime aliquid quidem consequuntur expedita velit eos!.</p>
  </div>
</div>
<div class="card">
  <img src={Image1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Galibladder Stone Surgery</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore nam consequuntur maxime. Quis deserunt numquam vel neque velit vero molestias ut, tempora sint fuga ipsa ex ipsum. Rerum, totam.</p>
  </div>
</div>
      </div>
    </div>
    </>
  )
}
