import React from 'react';
import { Fade } from 'react-reveal';
import BlankSpace from '../../components/BlankSpace';
import Carousel from 'react-bootstrap/Carousel';
import blank from '../../images/blank.png';
import star from '../../images/icons/star-fill.svg';

function Reviews() {

    const reviewList = [
        {id: 1,
        text: "From ordinary moments in time to the depths of the soul, readers will take in an expansive view of life, love and humanity through this impressive collection of verse. While many of the poems are very personal in nature, readers will see some of their own thoughts and feelings put into words. At times gritty, whimsical, hopeful, sweet, honest and raw, we are reminded that we do not live in this world alone – our souls cry out for relationship.",
        stars: 5,
        name: "Jtb1969"
        },
        {id: 2,
        text: "Light is stronger than darkness it seems to say. But it never becomes falsely hopeful as it acknowledges pain, embraces it & says you are not alone. An excellent & inspiring read!",
        stars: 5,
        name: "Blair Keyzer"
        },
        {id: 3,
        text: "Everyone is bound to find themselves somewhere within their words. Our Future Babies Are Talking will open up spaces within your heart and soul that have been kept hidden and give them space to breathe.",
        stars: 5,
        name: "Jessica Star"
        },
        {id: 4,
        text: "In this collection of poems and art, the reader is brought into the sweetness of friendship, the richness of being known and loved, and the playfulness of children. These poems don’t hold back on the hard parts of living though - they speak with a deep and honest vulnerability of feelings of overwhelm, the loneliness of being misunderstood and unseen, and the hardness of moving from unhealth to wholeness. As a whole, this collection speaks from a place of unflinching honesty about brokenness while being resolute in hope. A artful and well-written debut!",
        stars: 5,
        name: "Lynn Bruulsema"
        },
        {id: 5,
        text: "The honesty found within these pages is a treat to the reader as it brings peace and encouragement that the experiences we hide within can be shared amongst others with acceptance. If you struggle to put your emotions into words, like most of us, this book is for you.",
        stars: 5,
        name: "Lindsay Haraburda"
        },
        {id: 6,
        text: "I find words that heal, perhaps when they were written, but definitely when they are read.",
        stars: 5,
        name: "Ruth Wong"
        },
        {id: 7,
        text: "This book made me more interested in poetry as a whole.",
        stars: 5,
        name: "Maddy Kennedy"
        },
        {id: 8,
        text: "There's something in this book for everyone. The illustrations are beautiful and the poetry is thought provoking and relatable.",
        stars: 5,
        name: "Liz"
        },
        {id: 9,
        text: "Loved this poetry book and all the beautiful illustrations! So much depth and insight. Very relatable as a young adult.",
        stars: 5,
        name: "Amazon Customer"
        },
        {id: 10,
        text: "It's the perfect book to consume on a summer's day in the shade of a tree (or be transported to such a day). It touched my soul in ways I did not expect. I thoroughly recommend it.",
        stars: 5,
        name: "Elizabeth Adamou"
        },
        {id: 11,
        text: "I got sucked in right away to reading and couldn’t stop! Every poem is unique and thought provoking. The love, heartbreak, joy, and struggle that the writers capture speaks to my own experiences and makes me feel known by the authors.",
        stars: 5,
        name: "Ava"
        },
        {id: 12,
        text: "There are phenomenons that happen once in every generation that define the identity of a group of people in a period of time and place. It gives voice, meaning and purpose that drives transformational change individually, corporately, and globally. It starts as a spark creating a fire which, when fueled by natural elements and forces, turns into a tsunami of flames. It devours yesterday’s obvious and gives opportunity for new growth to form. Such is the effect of the words, thoughts, and writing, of 2 poetic voices which are blended together as one. The voices of Kelly Fullerton and Vivian Bender, in their poetry collection our future babies are talking. This could not be a more appropriate title, since this collection is not just contemporary. It will be a voice from yesterday that will define the current generation but also speak to future generations.",
        stars: 5,
        name: "Anthony Samchek"
        },

    ]
  return (
    // <div className="fullscreen">
        <Fade duration={2000}>
        {/* // <BlankSpace/>
        // <BlankSpace/> */}
        <div>
        <div className="container align-contents-center">
        <h2 className="pb-4 font-36 bold" >What Readers Are Saying</h2>

        </div>
        <BlankSpace/>
        <BlankSpace/>


        

        <Carousel className="height-50-100"
        autoPlay={true}
        interval={5000}
        controls={true}
        indicators={false}>
            {reviewList.map((rev) => {
                return (
                    <Carousel.Item id={rev.id} className="min-vh-2">
                        <div className="align-middle container w-75">
                            {/* <div className="row"> */}
                        <h4><em>{rev.text}</em></h4>

                            {/* </div> */}
                        <br/>
                        <div className="row justify-content-between w-100">
                        <h4 className="col-lg-3 col-sm-6">- {rev.name}</h4>

                        <div className="col-7 col-sm-6 d-flex justify-content-end">


                        {Array.apply(null, { length: rev.stars }).map((e, i) => (
                          <span className="star-container" key={i}>
                            <img src={star} className="fill-white" height="30rem"/>
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
    </div>

         </Fade>
        // </div>
  )
}

export default Reviews