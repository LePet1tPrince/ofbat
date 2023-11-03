import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import Desk from '../images/Desk.jpg';
import MyModal from './MyModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Fade from 'react-reveal/Fade';




const ContactForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3qciw9y', 'template_4sqg1sy', form.current, 'dTGtGo1_I0ESELnMg')
        .then((result) => {
            console.log(result.text);
            setShow(true)
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };

    return (
        <div id="contact" className="fullscreen" 
        // style={{ backgroundImage: `url(${Desk})`}}
        >
            <Fade duration={2000}>
            <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="container">
        <div className="row d-flex align-content-center justify-content-center">
          <div className="row mt-5 w-50-100 h-50 align-left rounded-4">  
              <h2 className="pb-4 font-36 bold">Reach Out</h2>
              <p>Send us a message or email us at OFBATauthors@gmail.com</p>
              <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 form-floating">
                      <input type="text" name="from_name"  class="form-control bg-bright contact-textbox text-white" id="floatingName" placeholder="Name" required />
                      <label for="floatingInput" className="">Name</label>
                  </div>
                  <div className="mb-3 form-floating">
                      <input type="email" name="from_email" class="form-control bg-bright contact-textbox text-white" id="floatingEmail" placeholder="name@example.com" required />
                      <label for="floatingInput">Email</label>
                  </div>
                  
                  <div className="mb-3 form-floating">
                      <textarea name="message" className="form-control bg-bright contact-textbox text-white" id="floatingTextArea" placeholder="What is your biggest bookkeeping issue?" required></textarea>
                      <label for="floatingTextarea">Message</label>
                      
                  </div>
              <input type="submit" className="btn bg-bright py-2 px-5 pill text-light fs-3 hover-brighten" value="Send" />
              </form>

              <Modal 
              show={show}
                // show="True"
               onHide={handleClose} className="contact-modal">
                <Modal.Header className="border border-white">
                <Modal.Title>Thanks For Reaching Out</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border border-white">We are looking forward to reading your message.</Modal.Body>
                <Modal.Footer className="border border-white">
                <button onClick={handleClose} className="btn border border-2 py-2 px-5 rounded-pill text-light fs-3">
                    OK
                </button>
                </Modal.Footer>
            </Modal>
          </div>
        
        </div>
        
      </div>
      
            </div>
            </Fade>

            
            
            
        </div>
    )
}

export default ContactForm;