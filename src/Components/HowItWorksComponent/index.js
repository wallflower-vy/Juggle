import "./index.css";
import { Row, Col, Container } from "react-bootstrap";

const HowItWorksComponent = () => {
  return (
    <div className="how-it-works-box">
      <Container className="how-it-works-container">
        <Row>
          <Col lg={7}>
          <div className="how-it-works-left-box">
          <h1 className="howit-works-heading" data-aos="fade-up" data-aos-duration="1000"  >
              Juggle is revolutionizing access to liquidity without compromising
              financial health
            </h1>
            <div className="howit-works-box">
            
            <p className="howitworks-paragraph" data-aos="fade-up" data-aos-duration="800"  >
              Earned wage access (EWA) enables employees to access their wages
              without the threat of a costly loan and with the added benefit of
              building savings and getting out of the risky financial cycle
              altogether
            </p>

            <button className="howit-works-btn" data-aos="fade-up" data-aos-duration="1100">See how it works</button>
            </div>
          </div>
          </Col>
          <Col lg={5}>
            <div className="big-circle-main-box">
            <div className="big-circle" data-aos="fade-up" data-aos-duration="1000"  >
               <div className="big-circle-text-box">
                  <p className="big-circle-heading">55%+</p>
                  <p className="big-circle-text">of employees state they are distracted at work due to financial stress  </p>

               </div>
            </div>
            </div>


          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HowItWorksComponent;
