import React from 'react';
import facebook from '../images/icons/facebook.png';
import twitter from '../images/icons/twitter.png';
import instagram from '../images/icons/instagram.png';
import goodreads from '../images/icons/goodreads.png';
import email from '../images/icons/email.png';
import { Fade } from 'react-reveal';

export default function Social() {
  return (
    <div className="social-section position-sticky fixed-top navbar">
      <div className="position-absolute top-0 end-0">
    <Fade duration={2000}>



    <div className="social-container">
  
    <a href="https://www.instagram.com/" target="_blank">
      <img src={instagram} className="icons hover-grow mx-1" />
    </a>
    <a href="https://www.goodreads.com/" target="_blank">
      <img src={goodreads} className="icons hover-grow mx-1" />
    </a>
    <a href="/contact">
      <img src={email} className="icons hover-grow mx-1" />
    </a>
   

  </div>

   
    </Fade>

    </div>
    </div>
  )
}
