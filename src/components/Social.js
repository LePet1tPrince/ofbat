import React from 'react';
import facebook from '../images/icons/facebook.png';
import twitter from '../images/icons/twitter.png';
import instagram from '../images/icons/instagram.png';
import { Fade } from 'react-reveal';

export default function Social() {
  return (
    <div className="social-section position-sticky fixed-top navbar">
      <div className="position-absolute top-0 end-0">
    <Fade duration={2000}>



    <div className="social-container">
    <a  href="https://www.facebook.com/" target="_blank">
      <img src={facebook} className="icons hover-grow mx-1" />
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img src={twitter} className="icons hover-grow mx-1" />
    </a>
    <a href="https://www.instagram.com/" target="_blank">
      <img src={instagram} className="icons hover-grow mx-1" />
    </a>
   

  </div>

    <div className="social-dropdown text-light">
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  fs-3" href="#" role="button" data-bs-toggle="dropdown">
            Follow
          </a>
          <ul className="dropdown-menu bg-dark">
            <li className="dropdown-item hover-grow">
              <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook} className="icons hover-grow" />
              </a>
            </li>
            <li className="dropdown-item">
            <a href="https://twitter.com/" target="_blank">
            <img src={twitter} className="icons hover-grow" />
          </a>
            </li>
            <li className="dropdown-item">
              <a href="https://www.instagram.com/lacquer_channel_phil/" target="_blank">
                <img src={instagram} className="icons hover-grow" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fade>

    </div>
    </div>
  )
}
