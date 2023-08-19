import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import styles from './login.module.css'; // Import the CSS module object
import { Container } from 'react-bootstrap';

const clientId = "831352639707-shhtm34vua2bbiibnt88j86lu8fi2bpb.apps.googleusercontent.com"




const Login = ({ responseGoogleSuccess, responseGoogleFailure, logOut }) => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {

    console.log('yay', response.profileObj.name);
    responseGoogleSuccess(response.profileObj);
    navigate('/');
  };

  const handleGoogleLoginFailure = (response) => {
    console.log("FAIL");
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
    <>
    
    <div className={styles.lc}></div>
      <div className={styles.LC}>
        <h2>Login right here</h2>
        <div className={styles.signin}>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      </div>
      
      <div className={styles.pig}><img src="https://cdn-icons-png.flaticon.com/512/1960/1960025.png"></img></div>
      <div className={styles.Circle}></div>
      <div className={styles.circle}></div>



    </>
  );
};

export default Login;