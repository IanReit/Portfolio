import "./Header.css";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

// bug reporting dependencies
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import background from './assets/coding-02.png';

const AboutMe = () => {
    return(
        <article className="article">
            <img className="back-Ground" src={background} alt="background" />
            <Card class="row">
                <div>
                    <h2 className="img-text-wrapper"> About me </h2>  
                </div>
                
            </Card>
        </article>
        
    );
}

export default AboutMe;