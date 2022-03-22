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
    const gitHubWeb = () => {
        window.open("https://github.com/IanReit");
    }
    const linkedInWeb = () => {
        window.open("https://www.linkedin.com/in/ian-reitmaier-98925b225/");
    }
    return(
        <div className='back-Ground' style= {{backgroundImage: `url(${background})` }}>
            <Card style={{marginTop: 70, width: '100%', height: '5rem', zIndex: "1", backgroundColor: 'black'}}>
               <Card.Text className='Ian-txt'> Ian Reitmaier - Software Developer</Card.Text>
            </Card> 
            <div class="row" style={{flexDirection:"space-evenly",position: "absolute", marginTop: 150}}>
                <Card class="col" style={{marginLeft:50, marginTop:120,width: '45rem', height: '33rem', backgroundColor: 'black'}}>
                    <Card.Img style={{alignSelf: "center",height: '15rem', width: '27rem',}} src={require('./assets/765900ba9-article-200807-github-gitguardbody-text.png')}/>
                    <Card.Text className='cardText'>
                        I have used Git thoughout my entire time of schooling!
                    </Card.Text>
                    <Button className='button' onClick={() => gitHubWeb()}>
                    GitHub
                    </Button>
                </Card>
                <Card class="col" style={{marginLeft:200,marginTop:120,width: '45rem', height: '33rem', backgroundColor: 'white'}}>
                    <Card.Img style={{alignSelf: "center",height: '15rem', width: '25rem',}} src={require('./assets/download-1.png')}/>
                    <Card.Text className='cardLinkedText'>
                        Linked Below is my LinkedIn profile!
                    </Card.Text>
                    <Button className='button' onClick={() => linkedInWeb()}>
                    LinkedIn
                    </Button>
                </Card>
            </div>
        </div>
       
    );
}

export default HomePage;