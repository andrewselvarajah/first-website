import React, {useState, useRef, useEffect, state} from 'react';
import './App.css';
import MyName from './components/Name';
import Projects from './components/Projects';
import Welcome from './components/WelcomeMsg';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Rl from './components/images/game.jpg';
import Dog from './components/images/dog.jpeg';
import Pool from './components/images/pool.jpg';

import {Container, Row, Col,ButtonGroup, ToggleButton, Navbar,Nav} from 'react-bootstrap';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-50)  


function App() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Gaming', value: '1' },
    { name: 'Billiards', value: '2' },
    { name: 'Doggo', value: '3' },
  ];
  const welcomeRef = useRef(null)
  const projectRef = useRef(null)
  const skillsRef = useRef(null)
  const hobbiesRef = useRef(null)

  // function callbackFunction(childData) {
  //     this.setState({ref: childData})
  // }
 
  

	// useMountEffect(() => scrollToRef(myRef)) // Scroll on mount



//used to update hobbies text 
  function updateHobbiesSubject(e) {
    console.log(e);
    if(e === '1'){
      return("I enjoy playing games during the periods that I am free.   I tend to usually play with a group of people as most of my freinds play games too.  Team oriented games are among my favourite kind as I enjoy working with playing/working with others.  Games that I enjoy playing currently are Valorant, Rocket League and League of Legends!  ");
    }
    else if(e === '2'){
      return('Another hobby of mine is to play billiards.  During my undergraduate degree I was joined the pool club and learned how to play. Form then on, I went out to join the  Canadian Pool Association (CPA) and become president of the club during my last year. ');
    }
    else{
      return("My Dog, Sparks!  He was born in 2010 and has always been a loyal and loving dog.  Docile in nature and does not like it when you cuddle for too long, but he will always be there to greet you with a tail wag when you walk in!");
    }
  }
  //used to update hobbies image
  function updateHobbiesImg(e) {
    console.log(e);
    if(e === '1'){
      return(Rl);
    }
    else if(e === '2'){
      return(Pool);
    }
    else{
      return(Dog);
    }
  }
  return (
    <div className="App">
      {/*Font awesome*/}
      <link rel="stylesheet" href = "https://use.fontawesome.com/releases/v5.7.1/css/all.css" crossOrigin = "anonymous"></link>
      <link href = "https://fonts.googleapis.com/css?family=Roboto" rel = "stylesheet"></link>
      <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      {/* scroll into view */}



      {/* Navigation bar*/}
    
      <div className = "nav">
    <Navbar fixed = "top" bg="dark" variant="dark">
      <Nav className="mr-auto" style = {{float: 'right'}} >
        <Nav.Link href = "#Welcome" onClick={()=>scrollToRef(welcomeRef)}>Welcome</Nav.Link>
        <Nav.Link href = "#Projects" onClick={()=>scrollToRef(projectRef)}>Projects</Nav.Link>
        <Nav.Link href = "#Skills" onClick={()=>scrollToRef(skillsRef)}>Skills</Nav.Link>
        <Nav.Link href = "#Hobbies" onClick={()=>scrollToRef(hobbiesRef)}>Hobbies</Nav.Link>
      </Nav>
      <Nav className="links"  >
        <Nav.Link href="https://www.twitch.tv/skyzthel1m1t" target="_blank"><i className="fab fa-twitch"></i></Nav.Link>
        <Nav.Link href="https://github.com/andrewselvarajah" target="_blank"><i className="fab fa-github"></i></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/andrew-selvarajah-265495114/" target="_blank"><i className="fab fa-linkedin"></i></Nav.Link>
        <Nav.Link href="https://www.instagram.com/denewshman/" target="_blank"><i class="fab fa-instagram"></i></Nav.Link>
      </Nav>    
  </Navbar>
  </div> 
      <br></br>

      {/*background and text*/}
      <div className = "App-header">  
        <div className = "bg-image"></div>
          <h1 className = "bg-text" ><MyName /></h1>
      </div>
      {/* Welcome*/}  
      <div ref = {welcomeRef} className = "welcome-background-holder">
        <div  className = "background">
  
          <Welcome></Welcome>
        </div>
      </div> 
       {/* Projects*/} 
      <div ref = {projectRef} className = 'project-background-holder'>  
        <div className = "background">
          <Container fluid>
            <div>
            <h1 className= "title">Projects</h1>
            </div>
              <Row>
                <Col className = "pro-col">
                  <Projects title = "STUDY BUDDY" subject = "Created within a course called Mobile Devices.  The app is targeted towards students and tutors. The app is a means for commuication between the two parties.  The app has a gps map taken from the google api in order to pinpoint locations where sessions are held.  " link = "https://github.com/adwansyed/Android-StudyBuddy">

                  </Projects>
                </Col>

                <Col className = "pro-col">
                  <Projects title = "AI TRAINING" subject = "A demonstration of AI prediction algorithm using the keras API.  This program takes in data with different statistics about potential weather and predicts what the weather will be.  " link = "https://github.com/andrewselvarajah/Mnist_Training"></Projects>
                </Col>

                <Col className = "pro-col">
                  <Projects title = "GRAPHICS" subject = "Using C++, the program displays a moving character with camera control.  Uses fragments and shaders in order to render the components." link = "https://github.com/andrewselvarajah/GraphicsFinal"></Projects>
                </Col>
              </Row>
          </Container>
        </div>
      </div>


      <div ref = {skillsRef} className = 'skills-background-holder'>  
        <div className = "background">

        <Skills>


        </Skills>
      </div>
      </div>

      <div ref = {hobbiesRef} className = 'hobbies-background-holder'>  
        <div className = "background">

          <Container fluid>
          <h1 className= "title">Hobbies</h1>
          <div className = "buttons-container">
            <ButtonGroup toggle>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  className = "hob-but"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  //onChange={(e) => forceUpdate()}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
          <br>
          </br>
          <div>
             <Hobbies subject = {updateHobbiesSubject(radioValue)} image = {updateHobbiesImg(radioValue)}>
             </Hobbies>

          </div>
         </Container>
        </div>
       </div> 
    </div>
  );
}

export default App;
