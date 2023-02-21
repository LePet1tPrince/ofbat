import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Social from './Social';
import { Fade } from 'react-reveal';
import menu from '../images/icons/menu.png';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import email from '../images/icons/email.png';
import goodreads from '../images/icons/goodreads.png';
import instagram from '../images/icons/instagram.png';


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    {id: 1,
      name:'/home/',
      link: '/',
      disabled: '',
      },
      {id: 2,
      name:'/about the authors/',
      link: '/about',
      disabled: '',
      },
      {id: 3,
      name:'/contact/',
      link: '/contact',
      disabled: '',
      },
      {id: 4,
      name:'/pre-order book/',
      link: '/preorder',
      disabled: ''
      }


  ]

    return (
      <div>
        <Fade duration={2000}>
        <nav className="navbar navbar-expand-lg py-3 bg-none fixed-top lg-nav">
        <div className="container-fluid">        
        
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex bd-highlight mb-2 mb-lg-0">

              {navLinks.map((item) => {
                return <li key={item.id} className="nav-item text-align-center font-18 bd-highlight">
                  <Link className={`nav-link px-4 hover-button align-text-bottom font-24 bold text-white ${item.disabled}`}
                    to={item.link}
                    >
                      {item.name}
                  </Link>
                </li>
              })}


             
            </ul>

          </div>
        </div>
      </nav>
      <div className="menu-button-container fixed-top">
        <button className="menu-button" onClick={handleShow}>
          <img src={menu} className="menu-button-img m-4"/>
        </button>

      </div>
      <div>
      <Offcanvas show={show} onHide={handleClose} className="offCanvas">
        <Offcanvas.Header >
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="container-fluid">        
        
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex bd-highlight mb-2 mb-lg-0">

              {navLinks.map((item) => {
                return <li key={item.id} className="nav-item text-align-center font-18 bd-highlight">
                  <Link className={`nav-link px-4 hover-button align-text-bottom font-24 bold text-white ${item.disabled}`}
                    to={item.link}
                    onClick={handleClose}>
                      {item.name}
                  </Link>
                </li>
              })}
              
            <li className="dropdown-item">
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} className="icons hover-grow mx-1" />
            </a>
            <a href="https://www.goodreads.com/" target="_blank">
              <img src={goodreads} className="icons hover-grow mx-1" />
            </a>
            <a href="/contact">
              <img src={email} className="icons hover-grow mx-1" />
            </a>
              
            </li>

             
            </ul>

          </div>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      </Fade>

      </div>
    )
  }

  export default Navbar;