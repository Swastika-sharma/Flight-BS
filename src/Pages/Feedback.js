import React, { useState } from 'react';
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap';


import { BsAirplane } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";



const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to submit feedback
    console.log('Feedback submitted:', feedback);
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

      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="feedback" class="mt-5">
          <FormLabel>Feedback:</FormLabel> <br/>
          <FormControl
            type="textarea"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            placeholder="Enter your feedback"
          />
        </FormGroup>
        <br/>
        <Button type="submit">Submit</Button>
      </Form>


    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

  </>  
  );
}

export default FeedbackForm;