import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';

// import styled from "styled-components";

import { BsAirplane } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iz19e06', 'template_t6bqx9o', form.current, {
        publicKey: 'WxmmmAgayl0cgHF_p',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto w-100 d-flex">
              <Navbar.Brand href="/" className="mr-4 justify-content-start text-info"><BsAirplane />FlyHigh</Navbar.Brand>
              {/* <Nav.Link href="/" className="mr-4 mx-5">Home</Nav.Link> */}
              <Nav.Link href="/About" className="mr-4 mx-4">About</Nav.Link>
              <Nav.Link href="/Contact" className="mr-4 mx-4">Contact</Nav.Link>
              <Nav.Link href="/Feedback" className="mr-4 mx-4">Feedback</Nav.Link>
              <Nav.Link href="/Login" className="mr-4 mx-4 justify-content-end"><FaUserCircle /> Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="contact-us-container mt-3">
        <h2 class="text-center">Feel Free to Contact us</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8463773300728!2d-74.36416811481094!3d40.522886497738206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c82d29c39ead%3A0x2dd9cbf8366d1316!2s123%20Main%20St%2C%20Edison%2C%20NJ%2008817%2C%20USA!5e0!3m2!1sen!2sin!4v1718289813754!5m2!1sen!2sin" title="Example iframe content" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className='container mt-3 text-center'>
        <h4>Get in touch with us for any queries or concerns.</h4>

        <div className='contact-form m-auto'>
          <form ref={form} onSubmit={sendEmail}>
              <div class="row">
                <div class="col-sm-4 offset-md-4">
                  <form action='#' method='POST'>
                    <label>Name    :</label>
                      <input type="text" class="form-control w-100 border border-primary" name="user_name" placeholder='Username' autoComplete='off' required />
                  </form>
                </div>
              </div>  
              <br /> 
              <div class="row">
                <div class="col-sm-4 offset-md-4">
                  <form action='#' method='POST'>
                    <label>Email    :</label>
                      <input type="email" class="form-control w-100 border border-primary" name="user_email" placeholder='Email' autoComplete='off' required />
                  </form>
                </div>
              </div>
              <br /> 
              <div class="row">
                <div class="col-sm-4 offset-md-4">
                  <label>Message    :</label>
                    <textarea name="message" class="form-control w-100 border border-primary border-width-2 rounded" cols='30' rows='3' autoComplete='off' required />
                </div>
              </div>
              <br /> <br />
              <div class="row">
                <div class="col-sm-4 offset-md-4">
                  <input type="submit" class="form-control w-100 border border-primary btn btn-primary btn-lg btn-block" value="Send" />
                </div>
              </div>
              <br /> <br />
          </form>
          <address className='text-dark'>
            <p>Flight Booking System</p>
            <p>Address: 123 Main St, Anytown, USA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: [info@flightbookingsystem.com](mailto:info@flightbookingsystem.com)</p>
          </address>
        </div>
      </div>
      </div>


      <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
        <MDBContainer className='p-4'>
          <section className=''>
            <MDBRow>
              <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' alt="" className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' alt=""  className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' alt="" className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' alt="" className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' alt="" className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                <MDBRipple
                  rippleColor='light'
                  className='bg-image hover-overlay shadow-1-strong rounded'
                >
                  <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' alt="" className='w-100' />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>

    </>
  );
};

export default Contact;




