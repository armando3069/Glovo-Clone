import React from 'react'
import glovoLogo from '../assets/img/svgexport-1.svg'
import './nav.css'
function nav() {
  return (
    <div className='n'>
    <div className='n-wrapper'>
      <div className='n-left'>
      <img id='n-img' src={glovoLogo}/>
      </div>
      <div className='n-right'>
       <button id='n-btn'>Get started</button>
      </div>
    </div>
    </div>
  )
}

export default nav