import { LineChart, XAxis, YAxis } from 'recharts';
import React from 'react';
import { Line } from 'recharts';

// API data

const ResultData = [
  { id: 1, name: "Ayaan Rahman", physics: 78, math: 85, biology: 90 },
  { id: 2, name: "Sara Ahmed", physics: 65, math: 70, biology: 72 },
  { id: 3, name: "Rafiq Islam", physics: 88, math: 92, biology: 85 },
  { id: 4, name: "Nusrat Jahan", physics: 54, math: 60, biology: 58 },
  { id: 5, name: "Tanvir Hossain", physics: 90, math: 95, biology: 92 },
  { id: 6, name: "Mariam Kabir", physics: 72, math: 68, biology: 75 },
  { id: 7, name: "Sabbir Khan", physics: 80, math: 82, biology: 78 },
  { id: 8, name: "Farhana Akter", physics: 60, math: 55, biology: 65 },
  { id: 9, name: "Jahidul Islam", physics: 85, math: 88, biology: 80 },
  { id: 10, name: "Lamia Rahman", physics: 70, math: 75, biology: 68 }
];


const ResultChart = () => {
  return (
    <div className='py-10 '>
            
            <LineChart width={1300} height={800} data = {ResultData} >
                      <XAxis dataKey={'name'} stroke='white' >  </XAxis>
                      <YAxis  dataKey={'biology'} stroke='white' ></YAxis>
                      <Line dataKey={'math'} stroke='yellow'> </Line>
                      <Line dataKey={'physics'} stroke='red'> </Line>

            </LineChart>

    </div>
  );
};

export default ResultChart;