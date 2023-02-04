import React from 'react'
import BlankSpace from '../components/BlankSpace';
import LargeSpace from '../components/LargeSpace';
import Fade from 'react-reveal/Fade';

export default function PreorderView() {
  return (
    <div className="fullscreen container align-items-center">
        <Fade duration={2000}>
        <LargeSpace/>
        <h1>
        Coming Soon!!!

        </h1>
        </Fade>
    </div>
  )
}
