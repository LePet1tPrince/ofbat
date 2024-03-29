import BlankSpace from '../../components/BlankSpace';
import Fade from 'react-reveal/Fade';
import heroPicture from '../../images/000_cover.png';

// import heroPicture from '../../images/guts-cover.PNG';






const Hero = () => {
    return (
        <div className="fullscreen">
            <Fade duration={4000}>


            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
                
                <div className="col-lg-6">
                <h1 className="lh-1 mb-3 font-56 bold">Our Future Babies are Talking</h1>
                <p className="lead"><em>Poetry Book: Transparent in trials, honest in hope</em></p>
                </div>
                <div className="col-10 col-sm-8 col-lg-6 d-flex align-items-center container">
                    <img src={heroPicture} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
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

export default Hero;