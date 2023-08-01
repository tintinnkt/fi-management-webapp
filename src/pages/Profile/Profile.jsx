import React from 'react';
import './Profile.css'; // Import the CSS file if using this JSX in a React component

import NavigationBar from '../../components/navbar/nav' 
const ProfileComponent = () => {
  return (
    <div className="container">
      <div className="profile"><i className="bi bi-person-circle"></i></div>
      <div className="Name">Name</div>
      <div className="Income">Income: xxxx</div>
      <div className="Expense">Expense: xxxx</div>
      <div className="Net">Net: xxxx</div>
      <div className="line"></div>
      <div className="Report"></div>
      <button className="logout">Log out</button>
    </div>
    
  );
};

export default ProfileComponent;
