import bioPicture from '../images/mother_0069.jpg';
import Fade from 'react-reveal/Fade';
import BlankSpace from './BlankSpace';


const About = () => {


    return (
        <div className="fullscreen d-flex justify-content-center">
            <Fade duration={2000}>
                <div className="h-75 w-75">
                <BlankSpace/>
                    <div className="card rounded-5 border-0">
                        <img src={bioPicture} className="card-img rounded-5 about-image" alt="Headshot" />
                        
                                <div className="card-img-overlay d-flex justify-content-end align-items-center mx-5">
                                    <p className="card-text w-50 font-28">
                                   This is where Kelly and Viv can introduce themselves. They can talk about how they met each other at university and became best friends and made poetry and had sleepovers and ate food and danced dances and sung songs and party hardied and all the other things that best friends do.
                                    <br/> <br/>

                                    


                                    </p>
                                </div>
                    </div>

                </div>
                </Fade>
        
      </div>

    )
}

export default About;