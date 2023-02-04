import bioPicture from '../images/Authors.jpg';
import Fade from 'react-reveal/Fade';
import BlankSpace from './BlankSpace';


const About = () => {


    return (
        <div className="fullscreen">
            <Fade duration={2000}>


            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row flex-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 align-contents-center container">
                <img src={bioPicture} className="mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                {/* <h1 className="lh-1 mb-3 font-56 bold">Our Future Babies are Talking</h1> */}
                <p className="lead"> This is where Kelly and Viv can introduce themselves. They can talk about how they met each other at university and became best friends and made poetry and had sleepovers and ate food and danced dances and sung songs and party hardied and all the other things that best friends do.
</p>
               
               
                
                </div>
            </div>
            <div className="row">
              
            </div>
            </div>
           
             <BlankSpace/>

            </Fade>
        
      </div>

    )
}

export default About;