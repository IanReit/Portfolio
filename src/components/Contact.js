import "./Header.css";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

// bug reporting dependencies
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import background from './assets/coding-02.png';


const Contact = () => {
    return(
        <div className='back-Ground' style= {{backgroundImage: `url(${background})` }}>
            <Card style={{marginTop: 70, width: '100%', height: '5rem', zIndex: "1", backgroundColor: 'black'}}>
            <Card.Text className='Ian-txt'> Contact Me</Card.Text>
            </Card> 
        </div>
    );
};

export default Contact;