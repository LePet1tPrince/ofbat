import React from 'react';
import { Fade } from 'react-reveal';
import BlankSpace from '../components/BlankSpace';
import Carousel from 'react-bootstrap/Carousel';
import blank from '../images/blank.png';
import star from '../images/icons/star-fill.svg';

function ReviewView() {

    const reviews = [
        {id: 1,
        text: "The depth of understanding and emotion in these poems will draw you in and keep you reading.",
        stars: 5,
        name: "Darcy Martin"
        },
        {id: 2,
        text: "The poems take you on a journey through experiences and moments of the author’s life, thoughts and dreams. This is a must read for any poetry lover or avid reader.",
        stars: 5,
        name: "Josh G"
        },
        {id: 3,
        text: " I loved the general free verse style as well. The best part was that each poem was enveloped in raw emotions and that's what poetry is all about.",
        stars: 4,
        name: "A Man Has No Name"
        },

    ]
  return (
    <div className="fullscreen">
        <Fade duration={2000}>
        <BlankSpace/>
        <BlankSpace/>
        <div className="container align-contents-center">
        <h1>what readers are saying</h1>

        </div>
        <BlankSpace/>

        

        <Carousel className="height-50-100"
        autoPlay={true}
        interval={5000}
        controls={true}
        indicators={true}>
            {reviews.map((rev) => {
                return (
                    <Carousel.Item id={rev.id} className="min-vh-2">
                        <div className="align-middle container w-50">
                            {/* <div className="row"> */}
                        <h2><em>{rev.text}</em></h2>

                            {/* </div> */}
                        <br/>
                        <div className="row justify-content-between w-100">
                        <h4 className="col-3">- {rev.name}</h4>

                        <div className="col-7 d-flex justify-content-end">


                        {Array.apply(null, { length: rev.stars }).map((e, i) => (
                          <span className="" key={i}>
                            <img src={star} className="fill-white" height="40px"/>
                            <span>&nbsp;&nbsp;</span>
                        </span>
                        ))}
                        </div>

                        </div>
                        </div>
                    </Carousel.Item>
                )
            })}
      
    </Carousel>

        </Fade>
        </div>
  )
}

export default ReviewView