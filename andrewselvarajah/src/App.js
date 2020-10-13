import React, {useState} from 'react';
import './App.css';
import MyName from './components/Name';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Welcome from './components/WelcomeMsg';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Rl from './components/images/download.jpg';
import Dog from './components/images/me2.jpg';
import Pool from './components/images/koala.jpg';
import {Container, Row, Col,ButtonGroup, ToggleButton} from 'react-bootstrap';

function App() {
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Gaming', value: '1' },
    { name: 'Billiards', value: '2' },
    { name: 'Doggo', value: '3' },
  ];
  // function useForceUpdate(){
  //   const [value, setValue] = useState(0); // integer state
  //   return () => setValue(value => ++value); // update the state to force render
  // }
  // const forceUpdate = useForceUpdate();



  function updateHobbiesSubject(e) {
    console.log(e);
    if(e === '1'){
      return("Thanks for playing");
    }
    else if(e === '2'){
      return('goodbye');
    }
    else{
      return('hello');
    }
  }
  function updateHobbiesImg(e) {
    console.log(e);
    if(e === '1'){
      return(Rl);
    }
    else if(e === '2'){
      return(Dog);
    }
    else{
      return(Pool);
    }
  }
  return (
    <div className="App">
      {/*Font awesome*/}
      <link rel="stylesheet" href = "https://use.fontawesome.com/releases/v5.7.1/css/all.css" crossOrigin = "anonymous"></link>
      <link href = "https://fonts.googleapis.com/css?family=Roboto" rel = "stylesheet"></link>
      <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>


      {/* Navigation bar*/}
      <Navbar></Navbar> 
      <br></br>

      {/*background and text*/}
      <div className = "App-header">  
        <div className = "bg-image"></div>
          <h1 className = "bg-text" ><MyName /></h1>
      </div>
<<<<<<< HEAD
=======

>>>>>>> c8df0fb6890464baa2552fc84b4b5ec58bf12fc4
      {/* Welcome*/}  
      <div className = "welcome-background-holder">
        <div className = "background">
  
          <Welcome></Welcome>
        </div>
      </div> 
<<<<<<< HEAD
=======

>>>>>>> c8df0fb6890464baa2552fc84b4b5ec58bf12fc4
       {/* Projects*/} 
      <div className = 'project-background-holder'>  
        <div className = "background">
          <Container fluid>
            <div>
            <h1 className= "title">Projects</h1>
            </div>
              <Row>
                <Col className = "pro-col">
                  <Projects title = "STUDY BUDDY" subject = "Created within a course called Mobile Devices.  The app is targeted towards students and tutors. The app is a means for commuication between the two parties.  The app has a gps map taken from the google api.  ">

                  </Projects>
                </Col>

                <Col className = "pro-col">
                  <Projects title = "AI TRAINING" subject = "A demonstration of AI prediction algorithm using the keras API.  This program takes in data with different statistics about potential weather and predicts what the weather will be.  "></Projects>
                </Col>

                <Col className = "pro-col">
                  <Projects title = "GRAPHICS" subject = "Using C++, the program displays a moving character with camera control.  "></Projects>
                </Col>
              </Row>
          </Container>
        </div>
      </div>


      <div className = 'skills-background-holder'>  
        <div className = "background">

        <Skills>


        </Skills>
<<<<<<< HEAD
      </Container>
      <br></br>
      <br></br> 
      <div className = 'hobbies-background-holder'>  
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
=======
      </div>
      </div>
>>>>>>> c8df0fb6890464baa2552fc84b4b5ec58bf12fc4

      <div className = 'hobbies-background-holder'>  
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
<<<<<<< HEAD
          </Container>

        </div>
        </div>




=======
       </div> 
>>>>>>> c8df0fb6890464baa2552fc84b4b5ec58bf12fc4
    </div>
  );
}

export default App;
