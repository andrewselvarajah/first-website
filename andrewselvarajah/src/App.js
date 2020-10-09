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
      <br></br>
      <br></br> 
      {/* Welcome*/}  
      <div className = "welcome-background-holder">
        <div className = "background">
  
          <Welcome></Welcome>
        </div>
      </div> 
      <br></br>  
       {/* Projects*/} 
      <div className = 'project-background-holder'>  
        <div className = "background">
          <Container fluid>
            <div>
            <h1 className= "title">Projects</h1>
            </div>
              <Row>
                <Col className = "pro-col1">
                  <Projects title = "STUDY BUDDY" subject = "Created within a course called Mobile Devices.  The app is used my students and tutors alike as a means for a more efficient and easy way to communicate with each other.  The app has a gps map taken from the google api.  ">

                  </Projects>
                </Col>

                <Col className = "pro-col2">
                  <Projects title = "AI TRAINING" subject = "Just a bunch of text that has no meraning since it is just a placeholder for real text and I cant think of stuff to write so im just writeing whatever comes to my head right now.  I dont know when i should stop but i guess sometime around now would be a good idea!"></Projects>
                </Col>
                <Col className = "pro-col3">
                  <Projects title = "GRAPHICS" subject = "Just a bunch of text that has no meraning since it is just a placeholder for real text and I cant think of stuff to write so im just writeing whatever comes to my head right now.  I dont know when i should stop but i guess sometime around now would be a good idea!"></Projects>
                </Col>
              </Row>
          </Container>
        </div>
      </div>
      <br></br>
      <br></br> 

      <Container>

        <Skills>


        </Skills>
      </Container>
      <br></br>
      <br></br> 
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
  );
}

export default App;
