import "./index.css";
import ChooseYuliLeftimage from "../../../Images/chooseyuli-bg.png";
import { Col, Row } from "react-bootstrap";
import yulibox1 from "../../../Images/box-search1.png";
import yulibox2 from "../../../Images/code1.png";
import yulibox3 from "../../../Images/empty-wallet1.png";
import yulibox4 from "../../../Images/chart-square1.png";
import yulicircle from "../../../Images/Ellipse 87.png";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ChooseYuliLeft = () => {
  useEffect(()=>{
    Aos.init({})
}, [])

  return (
    <div className="chooseyuli-left-box">
      <div className="chooseyuli-cards-box">
        <Row>
          <Col lg={6}>
            <div className="chooseyuli-card" data-aos="fade-down-right" data-aos-duration="1000">
              <div className="mini-yuli-cardbox">
                <img src={yulibox1} className="yuli-card-img" />
              </div>
              <div className="yuli-card-textbox">
                <h6>Zero-risk for employer</h6>
                <p>
                  Working capital stays unchanged, we manage salary withdrawals
                </p>
              </div>
            </div>
            <div className="chooseyuli-card" data-aos="fade-up-right" data-aos-duration="1000">
              <div className="mini-yuli-cardbox2">
                <img src={yulibox2} className="yuli-card-img" />
              </div>
              <div className="yuli-card-textbox">
                <h6>Attract Top Talents</h6>
                <p>
                  Offering real financial benefits to boost employee financial
                  health creates trust and helps retain and attract
                  high-performing talent
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="chooseyuli-card-right"  >
            <div className="chooseyuli-card" data-aos="fade-up-left" data-aos-duration="1000">
              <div className="mini-yuli-cardbox3">
                <img src={yulibox3} className="yuli-card-img" />
              </div>
              <div className="yuli-card-textbox">
                <h6>Improve Financial welfare</h6>
                <p>
                  Juggle builds wealth and dignity for employees by giving them
                  access to their pay when they need it - all before payday
                  arrives
                </p>
              </div>
            </div>
            <div className="chooseyuli-card" data-aos="fade-down-left" data-aos-duration="1000">
              <div className="mini-yuli-cardbox4">
                <img src={yulibox4} className="yuli-card-img" />
              </div>
              <div className="yuli-card-textbox">
                <h6>Increase Productivity</h6>
                <p>
                  Accessing earned wages when needed, employees experience less
                  financial stress and can focus on what is really important for
                  your business
                </p>
              </div>
            </div>
            <div className="choose-yulicircle-box">
                <img src={yulicircle} />

            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ChooseYuliLeft;
{
  /* <Col sm={6}>
                       
</Col>
<Col sm={6}>
</Col> */
}
