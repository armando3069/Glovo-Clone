import React from 'react'
import wave1 from '../assets/img/wave1.svg'
import wave2 from '../assets/img/svgexport-8.svg'
import home from '../assets/img/svgexport-7.svg'
import './top.css'
function top() {
  return (
    <div className='t'>
    <img id="t-img1" src={wave1}/>
     <div className='t-wrapper'>
     <img src={home} />
     <h1 className='t-title'>Top cities in Moldova</h1>
      <div className='tags'>
        <p>Chisinau</p>
        <p>Balti</p>
      </div>
      <button className='t-btn'>See all the cities</button>
     </div>
     <img id="t-img2" src={wave2}/>
    </div>
  )
}

export default top