import React from 'react'
import './widget2.scss'
import { AreaChart, Area, ResponsiveContainer } from "recharts";


const data = [
  {
    name: "Page A",
    uv: 300
  },
  {
    name: "Page B",
    uv: 200
  },
  {
    name: "Page C",
    uv: 250
  },
  {
    name: "Page D",
    uv: 200
  },
  {
    name: "Page E",
    uv: 500
  },
  {
    name: "Page F",
    uv: 600
  },
  {
    name: "Page G",
    uv: 800
  },
  {
    name: "Page H",
    uv: 200
  },
  {
    name: "Page I",
    uv: 700
  },
  {
    name: "Page J",
    uv: 800
  },
  {
    name: "Page K",
    uv: 1200
  },
  {
    name: "Page L",
    uv: 900
  },
  {
    name: "Page M",
    uv: 700
  },
  {
    name: "Page N",
    uv: 1100
  },
  {
    name: "Page O",
    uv: 600
  },
  {
    name: "Page P",
    uv: 550
  },
  {
    name: "Page Q",
    uv: 1000
  },
  {
    name: "Page R",
    uv: 400
  },
  {
    name: "Page S",
    uv: 400
  },
  {
    name: "Page T",
    uv: 400
  },
  {
    name: "Page U",
    uv: 1200
  },
  {
    name: "Page V",
    uv: 900
  },
  {
    name: "Page W",
    uv: 1000
  },
  {
    name: "Page X",
    uv: 950
  }
];









const widget2 = () => {
  return (
    <div className='graph'>
        <div className="bal">
            <span style={{fontSize:"20px"}}>Balance</span>
        <hr />
        </div>
        <div className="boxes">
        <div className="box1">
          <span className='moretext'>Earning</span>
          <div className='val1'>43.31%</div>
          <span className='percentage'>+2.5%</span>
        </div>
        <div className="box2">
          <span className='moretext'>Sales Value</span>
          <div className='val2'>$95,422</div>
          <span className='percentage1'>+13.5%</span>
        </div>
        </div>
        <span>
        <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <Area dataKey="uv" stroke="darkblue" fill="lightblue" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
        </span>
        </div>
  )
}

export default widget2