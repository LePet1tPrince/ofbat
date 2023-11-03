import React from 'react';
import Navbar from './Navbar';
import Social from './Social';


function GlobalView() {
  return (
    <div className="container d-flex">
        <div className=" row w-100"></div>
        <div className="d-flex col-6">
            <Navbar/>

        </div>
        <div className="d-flex col-6 fixed-top">
            {/* <Social/> */}

        </div>
    </div>
  )
}

export default GlobalView