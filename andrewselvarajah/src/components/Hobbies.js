import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function Hobbies(props){


  return(
     <div key={Math.random()} className = 'Hobbies'>
       <Container>
       <Row>
          <Col className = "hob-col1" >
            <p className = "sub">{props.subject}</p>
          </Col>
          <Col className = "hob-col2">
            <img className = "hob-img" src = {props.image} alt = "pics" />
          </Col>
        </Row>
       </Container>

       

     </div>

  )}
export default Hobbies 