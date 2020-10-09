import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navigation(){
  return(
    <div className = "nav">
    <Navbar fixed = "top" bg="dark" variant="dark">
      <Nav className="mr-auto" style = {{float: 'right'}} >
        <Nav.Link >Bio</Nav.Link>
        <Nav.Link >Programs</Nav.Link>
        <Nav.Link >Hobbies</Nav.Link>
      </Nav>
      <Nav className="links"  >
        <Nav.Link ><i className="fab fa-twitch"></i></Nav.Link>
        <Nav.Link ><i className="fab fa-discord"></i></Nav.Link>
        <Nav.Link ><i className="fab fa-github"></i></Nav.Link>
        <Nav.Link ><i className="fab fa-linkedin"></i></Nav.Link>
      </Nav>    
  </Navbar>
  </div>


  )}
export default Navigation 