import { Container } from 'react-bootstrap';
import './index.css';
import { useState } from "react";
import {AiOutlineMinus} from 'react-icons/ai';
import {IoIosAdd} from 'react-icons/io';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const FaqComponenent=()=>{
  useEffect(()=>{
    Aos.init({})
}, [])

    const [selected, setSelected]=useState(null)
    const data = [
      {
        question: "This sounds like a loan. Is it?",
        answer:
          "Juggle is not a loan and is an inclusive, responsible alternative to credit. We give your employees access to wages earned but not yet paid on. Neither gross reportable or net received pay changes. No interest or fees are paid to the employer. ",
  
      },
      {
          question: "Why offer early wage access to your employees?",
        answer:
          "It’s fair to say that decentralized finance is here to stay. In mid-2020, the DeFi marketplace accelerated its growth and decentralized products and service",
   
      },
      {
          question: "What will Juggle cost me?",
          answer:
            "It’s fair to say that decentralized finance is here to stay. In mid-2020, the DeFi marketplace accelerated its growth and decentralized products and service",
    
      },
      {
          question: "Should I be concerned about cash flow if we pay employees throughout the month?",
          answer:
            "It’s fair to say that decentralized finance is here to stay. In mid-2020, the DeFi marketplace accelerated its growth and decentralized products and service",
    
      },
      {
          question: "I'm worried about not having the cashflow to fund this",
          answer:
            "It’s fair to say that decentralized finance is here to stay. In mid-2020, the DeFi marketplace accelerated its growth and decentralized products and service",
    
      },
      {
          question: "Won’t this encourage debt?",
          answer:
            "It’s fair to say that decentralized finance is here to stay. In mid-2020, the DeFi marketplace accelerated its growth and decentralized products and service",
    
      },
      
    ];
    const toggle =(i)=>{
      if(selected===i){
          return setSelected(null)
      }
      setSelected(i)
    }
    
    return(
        <div className='faq-main-box' data-aos="fade-up" data-aos-duration="800" >
            <Container >
           
            <div className='faq-box'>
                <h1 className='faq-heading'>Frequently asked questions</h1>
                    <div className='faq-question-box'>
                    {data.map((item,i)=>(
              <div className="item"  >
                  <div className="title" onClick={()=>toggle(i)}>
                    <h5>{item.question}</h5>
                    <span>{selected===i ?<AiOutlineMinus className="faq-arrow"/>:< IoIosAdd className="faq-arrow" />}</span>
                  </div>
                  <div className={selected===i ?'content.show':'content'}>
                    <p>{item.answer}</p>
                </div>

              </div>
          ))} 
                    
                    </div>
                    <button>Try it for free</button>
            </div>
           
        </Container>
        </div>
    )
}
export default FaqComponenent;