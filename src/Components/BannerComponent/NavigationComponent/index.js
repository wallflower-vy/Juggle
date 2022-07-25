import React, { useState } from 'react';
import './index.css';
import logo from '../../../Images/logo/Juggle.png'
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
// import { useState } from 'react';



function NavigationComponent() {
  const [mobile, setMobile] =useState(true)
  const toggle=()=>{
    if(mobile===true){
      document.getElementsByClassName('nav-list-mobile').style.display="none";
    }
  }
  return (
    <div className='navi-bar'>
       <div className='logo-box' >
            <img src={logo} className='logo'/>
       </div>
       <div className= { mobile ? "nav-list-mobile" : 'navi-item-box'} onClick={()=>setMobile(false)}>
           
            <button className='sign-up-btn'>Sign Up</button>
           
       </div>
       <button className='mobile-menu-icon' onClick={()=>setMobile(!mobile)} >
       {mobile ? <FaBars /> : <ImCross className='cross'/>  }
      
       </button>
    </div>
  )
}

export default NavigationComponent;