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
            <div class="row">
                <Navbar.Collapse class="navbar-collapse collapse">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav class="col-md-6 me-auto">
                        <Nav.Link class="col-md-6" style={{fontWeight: "bold", fontSize: 25, color: "grey", marginRight: 40}} as={Link} to={"/Contact"}>Contact</Nav.Link>
                        <Nav.Link class="col-md-6" style={{fontWeight: "bold", fontSize: 25, color: "grey", marginRight: 40}} as={Link} to={"/AboutMe"}>AboutMe</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            <div className="center">
                <Navbar.Brand class="navbar-brand" style={{ marginLeft: 500, color: "Teal", fontSize:"50px", fontWeight: "bold"}} href="/">Ian's Home Page</Navbar.Brand>
            </div>
        </Navbar>
    );
}

export default Header;