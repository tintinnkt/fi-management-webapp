import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = "340099942190-mln2be557pfliu1qs7eg7hh8b7b7vb4m.apps.googleusercontent.com"

const Login = ({ responseGoogleSuccess, responseGoogleFailure, logOut }) => {
  const navigate = useNavigate();
  
  const handleGoogleLoginSuccess = (response) => {
    
      console.log('yay', response);
      responseGoogleSuccess();
      navigate('/');
  };

  const handleGoogleLoginFailure = (response) => {
      console.log(response);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: 'email',
      });
    }
  gapi.load('client:auth2', start);
  }, []);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />

    
    </div>
  );
};

export default Login;