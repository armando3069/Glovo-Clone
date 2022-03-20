import React from 'react'
import fig1 from '../assets/img/svgexport-9.svg'
import fig2 from '../assets/img/svgexport-11.svg'
import fig3 from '../assets/img/AppStore.svg'
import downl from '../assets/img/downland.webp'
import './down.css'
function down() {
  return (
    <div className='dw'>
    <div className='dw-left'>

     <div className='dw-wrapper'>
      <img src={fig1} />
      <h1>Downland the app</h1>
      <p>Order anything and track it in real time with the Glovo app</p>
      <div className='dw-tags'>
      <img className='dw-img1' src={fig3}  />
      <img  className='dw-img' src={fig2}  />
      </div>
     </div>

    </div>

    <div className='dw-right'>
     <img className='dw-right-img' src={downl}/>
    </div>
    </div>
  )
}

export default down