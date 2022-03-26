import React from 'react'
import together from '../assets/img/together.svg'
import fig4 from '../assets/img/waveC.svg'
import figure1 from '../assets/img/01.webp'
import figure2 from '../assets/img/02.webp'
import figure3 from '../assets/img/03.webp'
import './review.css'
function review() {
  return (
    <div className='rw'>

    <img className='rw-together' src={together} />

    <img id='rw-wave' src={fig4}/>

   

    <div className='rw-main'>

    <div className='rw-title'>
    <h1>Let's do it together</h1>
    </div>
    
    <div className='rw-wrapper'>
    <div className='rw-fig1'>
    <img id='rw-fig' src={figure1} />
    <h3>Become a rider</h3>
    <p>Be your own boss! Enjoy flexibility, freedom and competitive earnings by delivering with Glovo.</p>
     <button className='rw-fig1-btn'>Join us</button>
    </div>

    <div className='rw-fig2'>
    <img id='rw-fig' src={figure2} />
    <h3>Become a partner</h3>
    <p>Grow with Glovo! Our technology and user base can help you boost sales and unlock new opportunities!</p>
    <button className='rw-fig1-btn'>Join us</button>
    </div>

    <div className='rw-fig3'>
    <img id='rw-fig' src={figure3} />
     <h3>Careers</h3>
     <p>Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!</p>
     <button className='rw-fig1-btn'>Join us</button>
    </div>
    </div>
     
    </div>

    </div>
    
  )
}

export default review