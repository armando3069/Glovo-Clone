import React from 'react'
import foot from '../assets/img/svgexport-12.svg'
import glovos from '../assets/img/glovo.svg'
import './footer.css'
function footer() {
  return (
    <div className='f'>
    <img  className='f-img' src={foot} />
    <div className='f-main'>
       <div className='f-list'>

       <div className='carrer'>
       <img id='ft-img' src={glovos} />
     <ul>
       <li>Let’s do it together</li>
       <li>Careers</li>
       <li>Glovo for Partners</li>
       <li>Couriers</li>
       <li>Glovo Business</li>
     </ul>
       </div>

       <div className='carrer'>
       <ul>
         <li>Let’s do it together</li>
         <li>Careers</li>
         <li>Glovo for Partners</li>
         <li>Couriers</li>
         <li>Glovo Business</li>
       </ul>
         </div>

         <div className='carrer'>
         <ul>
           <li>Let’s do it together</li>
           <li>Careers</li>
           <li>Glovo for Partners</li>
           <li>Couriers</li>
           <li>Glovo Business</li>
         </ul>
           </div>

           <div className='carrer'>
           <ul>
             <li>Let’s do it together</li>
             <li>Careers</li>
             <li>Glovo for Partners</li>
             <li>Couriers</li>
             <li>Glovo Business</li>
           </ul>
             </div>

       </div>
    </div>
    </div>
  )
}

export default footer