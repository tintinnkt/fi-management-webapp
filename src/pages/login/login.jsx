import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div>
      <div className="Login">Login</div>
      <div className="continue">
        We will help you <i className="bi bi-balloon-heart"></i>
      </div>

      <div className="Username">
        <div className="username" id="">
          Username
        </div>
        <div className="icon">
          <i className="bi bi-person-circle"></i>
        </div>
        <input type="text" className="fillin" id="usn" style={{ fontSize: "50px", color: "black" }} />
      </div>

      <div className="Username">
        <div className="username">Password</div>
        <div className="icon">
          <i className="bi bi-lock"></i>
        </div>
        <input type="password" className="fillin" id="pw" />
      </div>

      <div className="Log">
        <img className="loginbutton" src="./loginpicture/Loginbutton.png" height="1500px" width="1300px" alt="Login" />
      </div>

      <div className="A">
        Don't have an account?
        <div className="B">Sign up</div>
      </div>

      <div className="circle">
        <img className="Circle" src="./loginpicture/circle.png" alt="Circle" />
      </div>
    </div>
  );
};

export default Login;
