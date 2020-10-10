import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip, data } from 'recharts'

function Skills(){
  return(
    <div className = "Skills">
      <h1 className = "title">Skills</h1>
      <BarChart width={730} height={250}  layout = "vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>


    </div>


  )}
export default Skills 