import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import me from './images/me.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Welcome(){
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);
  return(
    
    <Container fluid>
      <Row>
      <Col>
        <div className = "welcome-text" data-aos = "fade-right" >

            <h1 className = "title" >WELCOME</h1>
            <p className = "sub"> Hello! Welcome to my first website! I am learning react this 2020 summer so I decided to make a website with what I have learned. I am using this website to let potential employers know a little more about me and my skills.  Thank you for visiting!   </p>
          <p></p>
        </div>
       </Col>
       <Col>
       <img className = "me" data-aos = "fade-left" src = {me} alt="Me" />
        </Col>
      </Row>
    </Container> 
  )}
export default Welcome 