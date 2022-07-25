import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const WorkForceComponent = () => {
  useEffect(()=>{
    Aos.init({})
}, [])

  return (
    <div className="workforce-box">
      <div className="workforce-heading-box"  >
        <h1 className="workforce-heading" data-aos="fade-up" data-aos-duration="1000" >Make your workforce <br /> future-ready</h1>
      </div>
      <div className="workforce-paragraph-box ">
      <p data-aos="fade-up" data-aos-duration="1100"  >
        Allow your employees to access already earned but unpaid wages to reduce
        financial stress and boost their productivity, motivation and retention
       

      </p>
      </div>
    </div>
  );
};
export default WorkForceComponent;
