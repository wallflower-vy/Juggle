import logo from './logo.svg';
import { useRef } from 'react';

import './App.css';
import BannerComponent from './Components/BannerComponent';
import WorkForceComponent from './Components/WorkForceComponent';
import CardsComponent from './Components/CardsComponent';
import HowItWorksComponent from './Components/HowItWorksComponent';
import ChartComponent from './Components/ChartComponent';
import ChooseYuliComponent from './Components/ChooseYuliComponent';
import ChooseYuliImage from './Components/ChooseYuliImage';


import ButtonComponent from './Components/ButtonComponent';
import FaqComponenent from './Components/FaqComponent';
import FooterComponent from './Components/FooterComponent';


function App() {
 
  return (
    <div className="App">

      
        <BannerComponent />
        <WorkForceComponent  />
        <CardsComponent />
        <HowItWorksComponent />
        <ChartComponent />
        <ChooseYuliComponent />
        <ChooseYuliImage />
        <ButtonComponent />
        <FaqComponenent />
        <FooterComponent /> 
        {/*

        {/* 
        
        
       
        
       
       
        <FooterComponent /> */} 
        
    </div>
  );
}

export default App;
