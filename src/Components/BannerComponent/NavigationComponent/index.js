import React, { useState } from "react";
import { useRef } from "react";
import "./index.css";
import {Container, Navbar,Offcanvas,NavDropdown,Nav,Form, Button} from 'react-bootstrap';
import {FaBars, FaTimes} from "react-icons/fa";
import expand from 'react-bootstrap'
import logo from "../../../Images/logo/Juggle.png";
import logoblack from '../../../Images/Juggle Black.png'
// import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

// import { useState } from 'react';

function NavigationComponent() {
 
  const navRef=useRef();
  const shownavbar =()=>{
    navRef.current.classList.toggle('responsive_nav')
  }
    return(
      <header>
        <img src={logo} className='nav-logo'/>
        <nav ref={navRef}>
        <img src={logoblack} className='nav-logoblack'/>
          <button className="signup-btn">Sign Up</button>
          <button className="nav-btn nav-close-btn" onClick={shownavbar}><FaTimes /></button>
        </nav>
        < button className="nav-btn " onClick={shownavbar}><FaBars /></button>
      </header>
    )
}

export default NavigationComponent;
