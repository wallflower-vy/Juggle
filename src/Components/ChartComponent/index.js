import './index.css';
import chart from '../../Images/chart.png'
import { Container } from 'react-bootstrap';

const ChartComponent=()=>{
    return(
        <div className='chart-main-box'>
            <Container>
            <img src={chart} alt='' className='chart'/>
            <div className='chart-one-box' >
                <p  className="big-circle-heading">70%+</p>
                <p className="big-circle-text">of the African workforce live paycheck to paycheck and resort to high interest credit</p>
            </div>
            <div className='chart-two-box'>
                <p  className="big-circle-heading">40%+</p>
                <p className="big-circle-text">of employees resort to emergency borrowing via high cost payday loans</p>
            </div>

            </Container>
            
        </div>
    )
}
export default ChartComponent;