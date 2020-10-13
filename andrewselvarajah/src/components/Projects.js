import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props){
  return(
     <div className = 'Projects'>
       <div className = "text-project">
         
       <h1 className = "col-title">{props.title}</h1>
       <p className = "sub">{props.subject}</p>
       <button className = "pro-github"><i className="fab fa-github-square fa-3x" /></button>
       </div>

     </div>

  )}
export default Projects 