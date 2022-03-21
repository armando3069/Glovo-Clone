import React,{useState} from 'react'
import { NavContext } from '../context/context';

import './intro.css'
import wave from '../assets/img/intro.svg';
import Nav from '../navbar/nav';
import flag from '../assets/img/svgexport-2.png'
import location from '../assets/img/svgexport-3.svg'

function intro() {

  const[navbar,setNavbar] = useState(false);

  return (
    <div className='i'>

  <NavContext.Provider value={{navbar,setNavbar}}>
    <Nav/> 
  </NavContext.Provider>

    <div className='i-wrapper'>

     <div className='i-left'>
     <video  autoplay="autoplay" loop="loop" muted="muted" class="animation__videos__video" data-v-de00b112="">
     <source src="https://res.cloudinary.com/glovoapp//video/upload//website_assets/images/landing/address-container-animation.webm" preload="auto" type="video/webm" data-v-de00b112=""/>
     </video>
     </div>

     <div className='i-right'>
      <div className='i-right-wrapper'>
        <h1 className='txt1'>Food delivery and more</h1>
        <p className='txt2' >Groceries, shops, pharmacies, anything!</p>
        <div className={navbar ? "active" : "bag"}> 
        <input className='i-input' placeholder="What's your address?" />
        
        <div className='flag'>
        <img id='flag' src={flag} />
        </div>

        <div className='location'>
        <img src={location} />
        <p>Use current location </p>
        </div>

        </div>
      </div>
     </div>

    </div>
     <img id={'wave'} src={wave} />

    
    </div>
  )
}

export default intro