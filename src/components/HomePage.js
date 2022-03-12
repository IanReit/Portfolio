import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "./Header.css";

// bug reporting dependencies
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/coding-02.png';
import git from './assets/765900ba9-article-200807-github-gitguardbody-text.png';

const HomePage = () => {
    return(
        <div className='back-Ground' style= {{backgroundImage: `url(${background})` }}>
            <Card style={{marginTop: 70, width: '100%', height: '5rem', zIndex: "1", backgroundColor: 'black'}}>
               <Card.Text className='Ian-txt'> Ian Reitmaier - Software Developer</Card.Text>
            </Card> 
            <div class="row" style={{flexDirection:"space-evenly",position: "absolute", marginTop: 150}}>
                <Card class="col" style={{marginLeft:50, marginTop:160,width: '45rem', height: '25rem', backgroundColor: 'black'}}>
                    <Card.Img style={{alignSelf: "center",height: '15rem', width: '45rem'}} src='./assets/github_PNG65.png?text=Image cap'/>
                </Card>
                <Card class="col" style={{marginLeft:200,marginTop:160,width: '45rem', height: '25rem', backgroundColor: 'blue'}}>

                </Card>
            </div>
        </div>
       
    );
}

export default HomePage;