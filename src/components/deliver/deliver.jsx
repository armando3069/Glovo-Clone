import React from 'react'
import rewiev1 from '../assets/img/svgexport-4.svg'
import rewiev2 from '../assets/img/svgexport-5.svg'
import rewiev3 from '../assets/img/svgexport-6.svg'
import './deliver.css'
function deliver() {
  return (
    <div className='d'>
    <h1 id='d-title'>Anything delivered</h1>
    <div className='d-wrapper'>
        <div className='d-container1'>
         <img src={rewiev1} />
         <h3>Your city's top restaurants</h3>
         <p>With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!</p>
        </div>

        <div className='d-container2'>
        <img src={rewiev2} />
        <h3>Fast delivery</h3>
        <p>We pride ourselves on speed. Order or send anything in your city and we'll pick it up and deliver it in minutes.</p>
       </div>

       <div className='d-container3'>
       <img src={rewiev3} />
       <h3>Groceries delivery & more</h3>
       <p>Find anything you need! From supermarkets to shops, pharmacies to florists — if it's in your city you can count on us to get it.</p>
      </div>

      </div>
      <button className='d-btn'>Explore stores around you</button>
    </div>
  )
}

export default deliver