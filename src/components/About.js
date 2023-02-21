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
                <p className="lead px-3"> Toronto-born creatives Vivian and Kelly are a poetry power duo and best friends in real life. Both craving creativity amidst degrees at McMaster University, they joined forces in 2016 in pursuit of meaning and redemption amidst the anguish and confusion of their lives and the lives of those they loved. While Kelly may not spend as much time upside down as Vivian, and Vivian may never make sense of Kelly’s machine learning pursuits, they find middle ground in their love for dinner tables bursting at the seams, frothy chai lattes, and exploring nature. They hope their debut poetry book Our Future Babies are Talking will help readers feel understood in their trials and celebrated in their triumphs.</p>
               
               
                
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