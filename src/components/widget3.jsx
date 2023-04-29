import React from 'react'
import './widget3.scss'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {
    BarChart,
    Bar,
    } from "recharts";
  
    const data = [
        {
          name: "Page A",
          pv: 4000
        },
        {
          name: "Page B", 
          pv: 9500
        },
        {
          name: "Page C",
          pv: 3500
        },
        {
          name: "Page D",
          pv: 9500,
        },
        {
          name: "Page E", 
          pv: 5000,
        },
        {
          name: "Page F",
          pv: 7500,
        },
        {
          name: "Page G",
          pv: 5000,
        },
        {
          name: "Page H",
          pv: 7500,
        }
      ];


const widget3 = () => {
  return (
    <div className='widget0'>
        <div className='left'>
            <span className="title">New Users</span>
            <span className='numb'>94.2%</span>
            <span className='per'>+6.9%</span>

            <div className='datas'>

        <BarChart
      width={400}
      height={90}
      data={data}
      margin={{
        top: 6,
        right: 0,
        left: 60,
        bottom: 5
      }}
      barSize={30}
    >
    
      <Bar dataKey="pv" fill="#1877F2" background={{ fill: "#eee" }} />
    </BarChart>


        </div>
        </div>
        
        <div className='right'>
            <div className="dot" style={{cursor:"pointer"}}><MoreHorizRoundedIcon/></div>
        </div>
        

        
    </div>
  )
}

export default widget3