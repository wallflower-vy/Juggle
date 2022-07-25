import { Container } from 'react-bootstrap';
import './index.css';
import logo from '../../Images/Juggle.png'

const FooterComponent=()=>{
    return(
        <div className='main-footer-box'>
            <Container>
                <div className='footer-mini-box'>
                    <div className='footer-right-box'>
                            <img src={logo} />
                            <div className='footer-right-text-box'>
                                <p>Financial wellness for the modern workplace</p>
                            </div>
                            <small>© 2022 Juggle · All rights reserved · </small>
                    </div>
                    <div className='footer-left-box'>
                            <ul>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                    </div>

                </div>
                
            </Container>

        </div>
    )
}
export default FooterComponent;