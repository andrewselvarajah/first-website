import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import me from './images/me.jpg';

function Welcome(){
  return(
    
    <Container fluid>
      <Row>
      <Col>
        <div className = "welcome-text"  >

            <h1 className = "title" >WELCOME</h1>
            <p className = "sub"> Hello! Welcome to my first website! I am learning react this 2020 summer so I decided to make a website with what I have learned. I am using this website to let potential employers know a little more about me and my skills.  Thank you for visiting!   </p>
          <p></p>
        </div>
       </Col>
       <Col>
       <img className = "me" src = {me} alt="Me" />
        </Col>
      </Row>
    </Container> 
  )}
export default Welcome 