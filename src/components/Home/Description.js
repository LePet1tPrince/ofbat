import React from 'react';
import balloon from '../../images/balloon.jpg';
import Fade from 'react-reveal/Fade';
import BlankSpace from '../../components/BlankSpace';

export default function Description() {
  return (
    <div className="fullscreen">
            <Fade duration={2000}>


            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img src={balloon} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                <h1 className="lh-1 mb-3 font-56 bold">Our Future Babies are Talking</h1>
                <p className="lead">Two women's journey through life</p>
               
               
                
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
