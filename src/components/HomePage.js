import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "./Header.css";

// bug reporting dependencies
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import background from './assets/coding-02.png';

const HomePage = () => {
    return(
        <article className="article">
            <img className="back-Ground" src={background} alt="background" />
            <Card class="row">
                <div>
                    <h2 className="img-text-wrapper"> Ian Reitmaier </h2>  
                </div>
            </Card>
        </article>
    );
}

export default HomePage;