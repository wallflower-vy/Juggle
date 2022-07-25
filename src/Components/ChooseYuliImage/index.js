import { Container } from 'react-bootstrap';
import './index.css';
import chooseimage from '../../Images/Moneyverse Standing.png';
import { Row, Col } from 'react-bootstrap';
import ChooseYuliLeft from './ChooseYuliLeft';
import dottedimg from '../../Images/Group 70.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from 'react';
import  gsap  from 'gsap';
// import { TweenMax, Power3 } from 'gsap/gsap-core';




const animateMainShape = () => {
    const infiniteTl = gsap.timeline({
      repeat: -1,
    });
  
    infiniteTl
      .fromTo('.anime', { x: 400 }, { x: 0, ease: 'powe1.inOut', duration: 1 })
      .fromTo(
        '.anime',
        { y: -10 },
        {
          y: 30,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 1,
        }
      );
  };


  const ChooseYuliImage=()=>{
    useEffect(() => {
        animateMainShape();
      }, []);
    return(
        <div className='chooseyuli-image-box' >
            <Container>
                <Row>
                    <Col lg={5} className="choose-yulileft-img"  >
                         <img src={chooseimage} className="chooseyuli-image anime"/>
                         <div className='dotted-img-box'>
                         <img src={dottedimg}  className='dotted-image'/>
                         </div>

                    </Col>
                    <Col lg={7}>
                         <ChooseYuliLeft />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ChooseYuliImage;