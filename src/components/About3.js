import bioPicture from '../images/Authors.jpg';
import Fade from 'react-reveal/Fade';
import BlankSpace from './BlankSpace';


const About3 = () => {


    return (
        <div className="fullscreen mx-3">
            <Fade duration={2000}>


            <div className="p-5">
            <div className="row flex-lg-row flex-row align-items-center py-5">
                <div className="col-12 col-m-8 col-lg-4 align-contents-center container px-5">
                <p className="lead fs-5"> Toronto-born creatives Vivian and Kelly are a poetry power duo and best friends in real life. Both craving creativity amidst degrees at McMaster University, they joined forces in 2016 in pursuit of meaning and redemption amidst the anguish and confusion of their lives and the lives of those they loved. While Kelly may not spend as much time upside down as Vivian, and Vivian may never make sense of Kelly’s machine learning pursuits, they find middle ground in their love for dinner tables bursting at the seams, frothy chai lattes, and exploring nature. They hope their debut poetry book Our Future Babies are Talking will help readers feel understood in their trials and celebrated in their triumphs. </p>
                </div>
                <div className="col-10 col-m-8 col-lg-4 align-contents-center container d-flex py-4">
                <img src={bioPicture} className="mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>

                </div>

                <div className="col-10 col-m-8 col-lg-4">
                <p className="fs-4 mx-5"> Listen to my poetry <br/>
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
                                The Hello<br/>
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

export default About3;