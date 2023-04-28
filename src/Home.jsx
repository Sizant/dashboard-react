import React from 'react'
import Sidebar from './components/Sidebar';
import './home.scss'
import Navbar from './components/Navbar';
import Widget from './components/Widget';
import Widget2 from './components/widget2';
import Widget3 from './components/widget3';
import Table from './components/Table';

export const Home = () => {
  return (
    <div className='home'>
   <Sidebar /> 
   <div className="homeContainer">
    <Navbar />
    <div className='head'>
   
    <div className='widgets'>
      <Widget/>
      <Widget3/>
    </div>
    
    <Widget2/>
  
    </div>
    <div className="table">
      <Table/>
    </div>
   </div>
   </div>
  )
}

export default Home;