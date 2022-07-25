import './index.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ChooseYuliComponent=()=>{
  useEffect(()=>{
    Aos.init({})
}, [])
    return(
        <div className="workforce-box choose-yuli-box">
      <div className="workforce-heading-box yuli-choose-head">
        <h1 className="workforce-heading" data-aos="fade-up" data-aos-duration="800"  >Why employers are <br/> choosing Juggle</h1>
      </div>
      <div className="workforce-paragraph-box choose-yuli-text">
      <p data-aos="fade-up" data-aos-duration="900">
      Offering employees access to their earned but unpaid income is shown to positively impact worker productivity, employer brand, and job retention
      </p>
      </div>
    </div>
    )
}
export default ChooseYuliComponent;