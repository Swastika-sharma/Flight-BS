import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


import { BsAirplane } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import { GiCommercialAirplane } from "react-icons/gi";
import { LiaHotelSolid } from "react-icons/lia";
import { FaCarSide } from "react-icons/fa";

const CustomNavbar = () => {
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
                <div>
                    <Nav className="ml-auto w-100 d-inline-flex v-align-middle">
                        <Button href="#Flights" className="m-2"><GiCommercialAirplane /> Flights</Button>
                        <Button href="#Hotels" className="m-2 mx-2"><LiaHotelSolid /> Hotels </Button>
                        <Button href="#CarHire" className="m-2 mx-2"><FaCarSide /> Car Hire</Button>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
