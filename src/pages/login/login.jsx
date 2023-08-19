import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import styles from './login.module.css'; // Import the CSS module object
import { Container } from 'react-bootstrap';
import Topic from '../../components/topic/topic';
import DevCard from '../../components/dev/Dev';

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

      <div className={styles.lgbg}>
        <div className={styles.welcome}>WELCOME</div>
        <div className={styles.intro}>We will help you</div>
        <div className={styles.lgbody}>
          <div className={styles.loginspace}>
            <div className={styles.LC}>
              <h2>Login here</h2>
              <div className={styles.signin}>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Google Sign in"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={handleGoogleLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pigspace}>

          <div className={styles.pig}>
            <img src="https://cdn-icons-png.flaticon.com/512/1960/1960025.png" />
          </div>
        </div>
        
        <div className={styles.lgbottom}></div>
      </div>

    </>
  );
};

export default Login;