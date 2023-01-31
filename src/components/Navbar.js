import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Social from './Social';
import { Fade } from 'react-reveal';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg py-3 bg-none fixed-top">
        <div className="container-fluid">        
        <Fade duration={2000}>
        
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex bd-highlight mb-2 mb-lg-0">
              <li className="nav-item text-align-center font-18 bd-highlight">
                <Link className="nav-link mx-5 px-4 hover-button align-text-bottom font-24 bold" aria-current="page" to="/">/home/</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link mx-5 px-4 rounded-4 hover-grow font-24" to="/about">
                  /about the authors/
                </Link>
              </li>

             
            </ul>

          </div>
          </Fade>
        </div>
      </nav>
    )
  }

  export default Navbar;