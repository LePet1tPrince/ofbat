import React from 'react';
import facebook from '../../images/icons/facebook.png';
import twitter from '../../images/icons/twitter.png';
import instagram from '../../images/icons/instagram.png';
import goodreads from '../../images/icons/goodreads.png';
import email from '../../images/icons/email.png';
import { Fade } from 'react-reveal';

export default function Social() {
  return ( 
    <div className="">
      <div className="">
    <Fade duration={2000}>



    <div className="social-container">
  
    <a href="https://www.instagram.com/ofbat.poetry/" target="_blank">
      <img src={instagram} className="icons hover-grow mx-1" />
    </a>
    <a href="https://www.goodreads.com/book/show/180175913-our-future-babies-are-talking?ac=1&from_search=true&qid=CMYLi4nPM7&rank=2" target="_blank">
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
