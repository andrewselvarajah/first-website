import React from 'react'
import { BarChart, XAxis, YAxis, Legend, Bar, Tooltip} from 'recharts'

function Skills(){
  const data = [
    {
      name: 'React-native', level: 2
    },
    {
      name: 'CSS', level: 2
    },
    {
      name: 'Javascript', level: 3
    },
    {
      name: 'HTML', level: 3
    },
    {
      name: 'C++', level: 4
    },

    {
      name: 'Python', level: 4
    },

    {
      name: 'Java', level: 5
    }


  ];
  
  return(
    <div className = "Skills">
      <h1 className = "title">Skills</h1>
      {/* <ResponsiveContainer width={700} height="80%"> */}
        <BarChart className = "chart"
          width={800} 
          height={400}  
          data={data} 
          layout = "vertical"
          margin={{top: 5, right: 30, left: 50, bottom: 5}}>
          <XAxis 
            type = "number"             
            domain = {[0, 'dataMax']}/>
          <YAxis  
            type="category"
            dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey = "level" fill="#99004D"/>
        </BarChart>
      {/* </ResponsiveContainer> */}


    </div>


  )}
export default Skills 