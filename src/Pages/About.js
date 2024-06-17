import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { BsAirplane } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
const AboutUs = () => {
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

    <Container fluid className="about-us bg-black">
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src="bg1.jpg" alt="Travel" />
        </Col>
      <Col md={6} className="about-us-content mt-3 mb-3">
          <Card>
            <CardBody>
              <CardTitle tag="h2"><b>About Us</b></CardTitle>
              <CardText>
                At FlyHigh, we believe that travel has the power to transform lives. Our mission is to inspire and empower people to explore the world, experience new cultures, and create unforgettable memories.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h2">Our Story</CardTitle>
              <CardText>
                Our journey began with a passion for travel and a desire to share that passion with others. We saw an opportunity to create a platform that would make it easy for people to plan and book their trips, while also providing them with the inspiration and resources they need to make the most of their travels.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h2">Our Values</CardTitle>
              <CardText>
                <ul>
                  <li><strong>Explore</strong>: We believe that travel is a journey, not a destination. We encourage our users to explore new places, try new things, and step out of their comfort zones.</li>
                  <li><strong>Inspire</strong>: We believe that travel has the power to inspire and transform lives. We strive to inspire our users to see the world in a new light and to make a positive impact on the places they visit.</li>
                  <li><strong>Empower</strong>: We believe that travel should be accessible to everyone. We empower our users with the tools and resources they need to plan and book their trips with confidence.</li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>  
      </MDBFooter>  

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 :
        <a className='text-dark' href='https://mdbootstrap.com/'>
          FlyHigh
        </a>
      </div>
    </>
  );
};

export default AboutUs;