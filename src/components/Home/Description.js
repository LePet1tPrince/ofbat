import React from 'react';
import balloon from '../../images/balloon.jpg';
import mother from '../../images/51_inside out.png'
import Fade from 'react-reveal/Fade';
import BlankSpace from '../../components/BlankSpace';

export default function Description() {
  return (
    <div className="fullscreen">
            <Fade duration={2000}>


            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row flex-sm-column-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 container align-items-center">
                <img src={mother} className="d-block mx-lg-auto img-fluid rounded-3" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                {/* <h1 className="lh-1 mb-3 font-56 bold">Our Future Babies are Talking</h1> */}
                <p className="fs-4 ps-5">Listen to my poetry <br/>
                                I’ll only say it once to you<br/>
                                When you read it carefully<br/>
                                You’ll catch a fleeting glimpse or two<br/>
                                Of places that you’ve never seen<br/>
                                Or only see too clearly<br/>
                                Of people who have never been<br/>
                                Or people loved so dearly<br/>
                                You’ll catch a glimpse of me I’m sure<br/>
                                Maybe even feel my skin<br/>
                                Wish sometimes you had a cure<br/>
                                For places that I’ve been<br/>
                                But when you think you’ve finished<br/>
                                All that you can know<br/>
                                Reread a poem<br/>
                                Maybe two<br/>
                                You’ll realize<br/>
                                This is just<br/>
                                The Hello<br/></p>
               
               
                
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
