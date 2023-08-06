import React from 'react';
import './home.css'; // Import the CSS file if using this JSX in a React component

import NavigationBar from '../../components/navbar/nav'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

      <div className="Title">
        <a href=""><i className="bi bi-bell-fill"></i></a>
        <div className="totalbalance-value">XXXX</div>
        <div className="totalbalance">Total Balance</div>
        <i className="bi bi-emoji-smile"></i>
      </div>
      <div className="spending-rec">Spending Record</div>
      
      <div className="spending-detail">Spending Detail
      <Link to="/history" href="" className='his-img'><img src="https://cdn-icons-png.flaticon.com/512/9485/9485945.png " alt="history" className='his-img' onClick={()=>{}}/></Link>
      </div>

      <div className="Topexpense1">

        <div className="type">food & drinks</div>
        <div className="amount">xxxx</div>
        <div className="percent">XX%</div>
      </div>

      <div className="Topexpense2">

        <div className="type">Transportation</div>
        <div className="amount">xxxx</div>
        <div className="percent">XX%</div>
      </div>
      <div className="Topexpense2">

        <div className="type">Electricity</div>
        <div className="amount">xxxx</div>
        <div className="percent">XX%</div>
      </div>
      <div className="Topexpense2">

        <div className="type">Phone & Internet</div>
        <div className="amount">xxxx</div>
        <div className="percent">XX%</div>
      </div>
      <NavigationBar />
    </>
  );
};

export default Home;
