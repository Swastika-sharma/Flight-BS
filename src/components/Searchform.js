import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Searchform = () => {
    // const navigate = useNavigate();
    const [source, setsource] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [classType, setClassType] = useState('economy');

    const handlesourceChange = (e) => {
        setsource(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestination(e.target.value);
    };

    const handleDepartureDateChange = (e) => {
        setDepartureDate(e.target.value);
    };

    const handleReturnDateChange = (e) => {
        setReturnDate(e.target.value);
    };

    const handlePassengersChange = (e) => {
        setPassengers(e.target.value);
    };

    const handleClassTypeChange = (e) => {
        setClassType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API or perform search logic here
        console.log('Search flights form submitted:', {
            source,
            destination,
            departureDate,
            returnDate,
            passengers,
            classType,
        });
    };

    return (
        <>
        <div className='bg-light'>
            <Container className="position-relative z-index: 1">
                <img src="/bg.png" alt="Background" className="img-fluid w-100 h-auto object-fit-cover opacity-50" />
                    <div className="search-form position-absolute top-50 start-50 translate-middle align-items-center justify-content-center z-index: 2">
                <Row>
                    <Col className="search-form fw-bolder" md={12} col-sm-12="true">
                        <h2>Search Flights</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} col-sm-12="true">
                        <Form.Group className="search-input fw-bold" controlId="source">
                            <Form.Label>From (City or Airport)</Form.Label>
                            <Form.Control
                                type="text"
                                value={source}
                                onChange={handlesourceChange}
                                placeholder="Enter source"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} col-sm-12="true">
                        <Form.Group className="search-input fw-bold" controlId="destination">
                            <Form.Label>To (City or Airport)</Form.Label>
                            <Form.Control
                                type="text"
                                value={destination}
                                onChange={handleDestinationChange}
                                placeholder="Enter destination"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} col-sm-12="true">
                        <Form.Group className="search-input fw-bold" controlId="departure-date">
                            <Form.Label>Departure Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={departureDate}
                                onChange={handleDepartureDateChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6} col-sm-12="true">
                        <Form.Group className="search-input fw-bold" controlId="return-date">
                            <Form.Label>Return Date (Optional)</Form.Label>
                            <Form.Control
                                type="date"
                                value={returnDate}
                                onChange={handleReturnDateChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} col-sm-12="true">
                        <Form.Group className="search-input fw-bold" controlId="passengers">
                            <Form.Label>Passengers</Form.Label>
                            <Form.Control
                                as="select"
                                value={passengers}
                                onChange={handlePassengersChange}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6} col-sm-12="true">
                        <Form.Group className="search-input fw-bold" controlId="class-type">
                            <Form.Label>Class Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={classType}
                                onChange={handleClassTypeChange}
                            >
                                <option value="economy">Economy</option>
                                <option value="premium-economy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first-class">First Class</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={12} col-sm-14>
                        <Button className="search-button" variant="primary" type="submit" onSubmit={handleSubmit} >
                            Search Flights
                        </Button>
                    </Col>
                </Row>
                </div>
            </Container>   
        </div>
        </>
    );
};

export default Searchform;
