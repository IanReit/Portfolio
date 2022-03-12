import "./Header.css";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory } from "react-router";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// bug reporting dependencies
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import HomePage from "./HomePage";


const Header = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <div>
            <Container>
                <Navbar.Brand href="/">Ian's Home Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
                        <Nav.Link as={Link} to={"/AboutMe"}>AboutMe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </div>
        </Navbar>
    );
}

export default Header;