import React from 'react';
import './home.css'; // Import the CSS file if using this JSX in a React component

import NavigationBar from '../../components/navbar/nav'

const Home = () => {
  return (
    <>
    
      <div className="Title">
        <a href=""><i className="bi bi-bell-fill"></i></a>
        <div className="totalbalance-value">XXXX</div>
        <div className="totalbalance">Total Balance</div>
        <i className="bi bi-emoji-smile"></i>
      </div>
      <div className="spending-rec">

      </div>
      <div className="spending-detail"></div>
      
      <NavigationBar />
    </>
  );
};

export default Home;
