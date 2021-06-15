import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">EvverWeather</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/TenDayForecast">10 Day Forecast</Nav.Link>
                    <Nav.Link as={Link} to="/HourlyForecast">Hourly Forecast</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}