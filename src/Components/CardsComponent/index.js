import "./index.css";
import { Container } from "react-bootstrap";
import wallet from "../../Images/wallet.png";
import compass from '../../Images/compass.png';
import trademark from '../../Images/trademark.png'
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const CardsComponent = () => {
  useEffect(()=>{
    Aos.init({})
}, [])

  const [datalist, setDataList] = useState([
    {
      image: <img src={wallet} alt="wallet"/>,
      bg: '#E2E1FF',
      heading: "Improve your employer brand",
      text: "Improve your employer brand. 74% of Juggle members say they view their employer more favourably for offering Juggle.",
    },
    { image: <img src={compass} /> ,
    bg:'#41EEDA',
    heading: "Free for company",
    text: "Juggle is a no-cost and long-term employee financial wellness solution", },
    { image: <img src={trademark} />,
    bg: '#A3A3A3',
    heading: "Hassle free integration",
    text: "Highly compatible with any existing payroll, HRMS or ERP.", },
    // { num: 4, text: "Withdraw Anytime" },
  ]);
  return (
    <>
      <div className="cards-box"  data-aos="fade-up" data-aos-duration="1200" >
        <Container className="container-box">
          {datalist.map((item, index, arr) => {
            return (
              <div className="main-card-box" >
                <div style={{background: item.bg}} className={`card-img-box`}>{item?.image}</div>
                <h6 className="card-heading">{item?.heading}</h6>
                <p className="card-paragraph">{item?.text}</p>
               
              </div>
            );
            
          })}
        </Container>
      </div>
    </>
  );
};
export default CardsComponent;
