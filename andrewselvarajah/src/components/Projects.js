import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props){
  return(
     <div className = 'Projects'>
       <div className = "text-project">
         
       <h1 className = "col-title">{props.title}</h1>
       <p className = "sub">{props.subject}</p>
       </div>

     </div>

  )}
export default Projects 