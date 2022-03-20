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
     <h1>Let's do it together</h1>
    <div className='rw-fig1'>
    <img id='rw-fig' src={figure1} />
    </div>

    <div className='rw-fig2'>
    <img id='rw-fig' src={figure2} />
    </div>

    <div className='rw-fig3'>
    <img id='rw-fig' src={figure3} />
     <h3></h3>
     <p></p>
    </div>
     
    </div>

    </div>
  )
}

export default review