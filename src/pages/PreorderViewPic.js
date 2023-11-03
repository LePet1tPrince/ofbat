import React from 'react'
import BlankSpace from '../components/BlankSpace';
import LargeSpace from '../components/LargeSpace';
import Fade from 'react-reveal/Fade';
import BookCover from '../images/BookCover.jpg';

export default function PreorderViewPic() {
  return (
    <div className="fullscreen">
    <Fade duration={2000}>


    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row flex-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-5 col-lg-3 align-contents-center container">
        <img src={BookCover} className="mx-lg-auto img-fluid rounded-3" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
        </div>
        <div className="col-lg-8">

        <div className="container w-75">
            <div className="row">
              <div className="col">

              <div className="header row d-flex">
              <h1 className="text-center">Join Our Pre-Launch Community!</h1>
            <BlankSpace/>

              <p className="fs-5">We need your help sending this art into the world. We wish we could click “publish” and have this reach the people it needs to, but we all know that’s not how it works. Online algorithms advertise books with lots of reviews (particularly in the early days). This is why we are asking you to join our launch community!</p>
              </div>
            
            
              
            </div>
            <BlankSpace/>

            </div>
  
              <div className="row d-flex justify-content-between">
                
                <div className="col-lg-5 col-md-10">
                <h3><strong>What’s involved:</strong></h3>
            <ul className="fs-5">
              <li>Reviewing our book on Amazon on launch day</li>
              <li>Placing an early review on Goodreads</li>
              <li>Sharing about the book through social media and in person</li>
            </ul>
                </div>
                <div className="col-lg-5 col-md-10">
                <h3><strong>What you’ll get:</strong></h3>
            <ul className="fs-5">
              <li>A pdf copy of our book to read early.</li>
              <li>Your name entered in a draw for a free signed copy of our book &amp; a $25 gift card to a coffee shop of your choosing!</li>
              <li>Access to a Launch Community-only Zoom call with readings and backstories from some of our favourite poems, as well as a question and answer period about our writing process.</li>
            </ul>
                </div>

              </div>
              <BlankSpace/>
              <BlankSpace/>


              <div className="row">


              <form novalidate="" accept-charset="UTF-8" method="post" action="https://link.mail.tailwindapp.com/ngs/1321806/MDA0fsJfjGHK4eBbsArl/embedded" className="row d-flex align-items-center">
          

          <div className="mb-3 form-floating d-flex justify-content-center">
                      <input type="email" name="email" class="form-control contact-textbox text-white bg-bright fs-4 border border-2 w-50-100 text-center" id="floatingEmail" />
                      <label for="floatingInput" className="mx-3 py-2 w-50-100 text-center-left">Enter your email to join!</label>
          <button type="submit" className="btn mx-4 hover-brighten bg-bright py-2 px-5 text-light fs-3 pill">Submit</button>
                  </div>
          <div class="form-group fb-button col-3">

          </div>
          </form>
          </div>


            </div>
          
        
       
       
        
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
