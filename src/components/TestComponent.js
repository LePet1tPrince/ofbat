
import Fade from 'react-reveal/Fade';
import BlankSpace from '../components/BlankSpace'
import { FadeInElement } from './FadeInElement';


const TestComponent = () => {
  

    return (
        <div >
            <div className="fullscreen has-bg-img fade-in">

        {/* <img src={owners} class="bg-img " alt="Shopkeeper"/> */}
        <div className="b-example-divider"></div>
        <h5 class="font-52 bold p-4 col-8 fade-in">We go beyond the bookkeeping</h5>
                            <p class="font-28 p-4 col-8 fade-in">We're not just your average bookkeeping firm. Our tailored approach to financial planning will help you grow in all aspects of life and business by catching insights others may have missed before it's too late!</p>
                    
            
             <BlankSpace/>
            </div>
            <FadeInElement>

        <div className="fullscreen">
            <h1>Tjos os mmym dfkjalsetrhk</h1>This is my other thing
        </div>
            </FadeInElement>


        
      </div>
    )
}

export default TestComponent;