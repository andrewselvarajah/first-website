import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Hobbies(props){
  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);
  


  return(
     <div key={Math.random()} className = 'Hobbies'>
       <Container>
       <Row>
          <Col className = "hob-col1" >
            <p className = "sub" data-aos= "fade-up">{props.subject}</p>
          </Col>
          <Col className = "hob-col2">
            <img className = "hob-img" src = {props.image} alt = "pics"  data-aos = "fade-up"/>
          </Col>
        </Row>
       </Container>

       

     </div>

  )}
export default Hobbies 