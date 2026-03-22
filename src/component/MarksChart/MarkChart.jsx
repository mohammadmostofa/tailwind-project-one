import { Bold } from 'lucide-react';
import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {
  
  const  markDataRes = use(marksPromise)
  const  markData = markDataRes.data.students;
  console.log(markData)

  // data processing for the chart //map korar pore sobgulo data ekta object ye serial
  //  hobe nested teke nested nested upadan gulo same object ye chole asbe fole kaj kra easy hobe
  
     const markChartData = markData.map(studentData => {
            
      const student =  {

             id:studentData.id,
             name:studentData.name,
             physics:studentData.marks.physics,
             math:studentData.marks.math,
             biology:studentData.marks.biology,


     }

    //  adding any mathmatical         
    const avg = (student.math + student.physics + student.physics) / 3 ; 
      student.avg = avg ;    
    

         return student;

     } )

     console.log(markChartData)


  return (
    <div>
             
             <BarChart width={600} height={500} data={markChartData} >
              <XAxis dataKey={'name'} stroke='white'></XAxis>
              <YAxis stroke='white'></YAxis>
              <Bar dataKey={'math'} stroke='red' fill='magenta'></Bar>
              <Bar dataKey={'physics'} stroke='yellow' fill='coral' ></Bar>
              <Bar dataKey={'biology'} stroke='green' fill= 'aqua' ></Bar>
              <Bar dataKey={'avg'} stroke='blue' fill='orange' ></Bar>
              <Tooltip></Tooltip>
              <Legend layout='horizontal' verticalAlign='top'
               align='center' wrapperStyle={{fontSize:16, fontWeight:Bold}} ></Legend>

             </BarChart>

    </div>
  );
};

export default MarkChart;