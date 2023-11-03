import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Social from './Social';
import { Fade } from 'react-reveal';
import menu from '../../images/icons/menu.png';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import email from '../../images/icons/email.png';
import goodreads from '../../images/icons/goodreads.png';
import instagram from '../../images/icons/instagram.png';
import LargeSpace from '../LargeSpace';


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
      // {id: 4,
      // name:'/pre-launch community/',
      // link: '/prelaunch',
      // disabled: ''
      // }
      ,
      {id: 5,
      name:'/shop/',
      link: 'https://www.amazon.ca/dp/1738985008/ref=tmm_hrd_swatch_0?_encoding=UTF8&amp;qid=1687527098&amp;sr=8-1&_encoding=UTF8&tag=ofbatpoetry-20&linkCode=ur2&linkId=da8f966d7370f9b83d3e76c94b01f40e&camp=15121&creative=330641',
      disabled: ''
      },
      // {id: 6,
      //   name:'/reviews/',
      //   link: '/reviews',
      //   disabled: ''
      //   },



  ]

    return (
      <div>
        <Fade duration={2000}>
        <nav className="navbar navbar-expand-lg py-3 bg-none fixed-top lg-nav">
        <div className="container-fluid">        
        
          <div className="navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex bd-highlight mb-2 mb-lg-0">

            {/* {navLinks.map((item) => {
                return <li key={item.id} className="font-18">
                  <button className="nav-button">
                <Link className={` ${item.disabled}`}
                    to={item.link}
                    style={{ fontSize: '2rem' }}
                    >
                        {item.name}
                   
                  </Link>
                        </button>
                </li>
              })} */}
              {navLinks.map((item) => {
                return <li key={item.id} className="nav-item text-align-center fs-4 bd-highlight">
                <Link className={`navbar-link p-4 hover-button align-text-bottom bold text-white ${item.disabled}`}
                  target={item.id == 5 ? "_blank" : null}
                    to={item.link}
                    >
                      {item.name}
                  </Link>
                </li>
              })}


             
            </ul>
            <Social className="d-flex right-side"/>

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
          <Offcanvas.Title></Offcanvas.Title>
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
              <LargeSpace/>
            <li className="dropdown-item">
              <Social/>
            {/* <a href="https://www.instagram.com/ofbat.poetry/" target="_blank">
              <img src={instagram} className="icons hover-grow mx-1" />
            </a>
            <a href="https://www.goodreads.com/" target="_blank">
              <img src={goodreads} className="icons hover-grow mx-1" />
            </a>
            <a href="/contact">
              <img src={email} className="icons hover-grow mx-1" />
            </a> */}
              
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