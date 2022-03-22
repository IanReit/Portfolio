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
import { Row, Col } from "react-bootstrap";
import HomePage from "./HomePage";


const Header = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container class="row">
                <Navbar.Collapse class="navbar-collapse collapse">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Row>
                    <Nav>
                        <Col>
                            <Nav.Link class="col-md-6" style={{fontWeight: "bold", fontSize: 25, color: "grey"}} as={Link} to={"/Contact"}>Contact</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link class="col-md-6" style={{fontWeight: "bold", fontSize: 25, color: "grey"}} as={Link} to={"/AboutMe"}>AboutMe</Nav.Link>
                        </Col>
                    </Nav>
                </Row>
                </Navbar.Collapse>
            </Container>
            <Container>
                    <Col>
                    <Navbar.Brand class="navbar-brand" style={{marginRight: 780, color: "Teal", fontSize:"50px", fontWeight: "bold"}} href="/">Home</Navbar.Brand>
                    </Col>
            </Container>
        </Navbar>
    );
}

export default Header;