import './index.css';
import {Container} from 'react-bootstrap'
import NavigationComponent from './NavigationComponent';
import {IoIosArrowForward} from "react-icons/io";
import banner from "../../Images/Mask Group.png"
import pin from '../../Images/pin1.png';
import pin1 from '../../Images/pin2.png'
function BannerComponent() {
  return (
    <div className="Banner-main-box">
        {/* <div className='banner-content-box'> */}
           <Container>
                <NavigationComponent />
                <div className="hero-section">
                    <div className="left-banner">
                        <h1>Financial wellness for the mordern workplace</h1>
                        <div className='left-banner-content'>
                        <p>Juggle gives employees daily access to their earned pay, which serves as an alternate to high-cost pay day loans and saves employees more than 30% of their annual income</p>
                        </div>
                        <div className="left-banner-links">
                        <button>Get started - it’s free</button>
                       <a href='#'><span className='left-banner-span'>Employee Signup </span> <span><IoIosArrowForward className="banner-icon"/></span></a>
                        </div>
                    </div>
                    <div className="right-banner">
                        <img src={banner} className="banner-img" alt=""/>
                        
                    </div>
                    <div className='pin-box'>
                    <img src={pin} alt="" className='pin1' />
                        <img src={pin1} alt="" className='pin2' />
                    </div>
                </div>
           </Container>
        </div>
        
    // </div>
  )
}

export default BannerComponent