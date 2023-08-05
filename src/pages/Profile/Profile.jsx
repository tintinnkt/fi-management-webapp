import React from 'react';
import './Profile.module.css';

import NavigationBar from '../../components/navbar/nav' 
const Profile = () => {
  return (
    <>
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
    <NavigationBar />
    </>
  );
};

export default Profile;
