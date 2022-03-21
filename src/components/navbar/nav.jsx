import React,{useEffect,useContext} from 'react'
import glovoLogo from '../assets/img/svgexport-1.svg'
import flag from '../assets/img/svgexport-2.png'
import location from '../assets/img/svgexport-3.svg'
import { NavContext } from '../context/context'
import './nav.css'
function nav() {

  const {navbar,setNavbar} = useContext(NavContext);

   useEffect(() => {
      changeNav()
   },[]);

   const changeNav = () => {
          if(window.scrollY >= 80){
            setNavbar(true);
          }
          else{
            setNavbar(false);
          }
   }

   window.addEventListener("scroll",changeNav)

  return (
    <div className='n'>
    <div className='n-wrapper'>
      <div className='n-left'>
      <img id='n-img' src={glovoLogo}/>
      </div>

      <div className={ navbar ? 'bag-main' : "active"}>
      <span className='n-bag'>Enter your address to know what's near you</span>
     
      <div className='bag1'> 
        <input className='n-input' placeholder="What's your address?" />
        
        <div className='flag1'>
        <img id='flag1' src={flag} />
        </div>

        <div className='location1'>
        <img src={location} />
        <p>Use current location </p>
        </div>

        </div>

        </div>

      <div className='n-right'>
       <button id='n-btn'>Get started</button>
      </div>
    </div>
    </div>
  )
}

export default nav