// import React, { useState } from "react";
import { useRef } from "react";
import "./index.css";

import {FaBars, FaTimes} from "react-icons/fa";

import logo from "../../../Images/logo/Juggle.png";
import logoblack from '../../../Images/Juggle Black.png'


function NavigationComponent() {
 
  const navRef=useRef();
  const shownavbar =()=>{
    navRef.current.classList.toggle('responsive_nav')
  }
    return(
      <header>
        <img src={logo} alt='' className='nav-logo'/>
        <nav ref={navRef}>
        <img src={logoblack} alt="" className='nav-logoblack'/>
          <button className="signup-btn">Sign Up</button>
          <button className="nav-btn nav-close-btn" onClick={shownavbar}><FaTimes /></button>
        </nav>
        < button className="nav-btn " onClick={shownavbar}><FaBars /></button>
      </header>
    )
}

export default NavigationComponent;
