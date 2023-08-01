import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const NavigationBar = () => {
  return (
    <nav className="bottom-navigation">
      <Link to="/" className="nav-item">
        <div className="logo-placeholder">
          <img src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png" alt="Home" />
        </div>
        <div className="Name">Home</div>
      </Link>
      <Link to="/saving" className="nav-item1">
        <div className="logo-placeholder">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6108/6108908.png"
            alt="Saving"
            title="Saving"
            className="img-small"
          />
        </div>
        <div className="Name">Saving</div>
      </Link>
      <Link to="/debt" className="nav-item2">
        <div className="logo-placeholder">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3696/3696177.png"
            alt="Debt"
            title="Debt"
            className="img-small"
          />
        </div>
        <div className="Name">Debt</div>
      </Link>
      <Link to="/profile" className="nav-item">
        <div className="logo-placeholder">
          <img
            src="https://cdn-icons-png.flaticon.com/512/436/436356.png"
            alt="Profile"
            title="Profile"
            className="img-small"
          />
        </div>
        <div className="Name">Profile</div>
      </Link>
      <Link to="/create" className="nav-item special">
        <i className="material-icons">add</i>
      </Link>
    </nav>
  );
};

export default NavigationBar;
