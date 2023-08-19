import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import styles from './Profile.module.css';
import dt from '../../service/data/Record.json';

//component
import NavigationBar from '../../components/navbar/nav';
import PieChart from '../../components/pie/PieChart';
import { ProgressBar } from 'react-bootstrap';

import { GoogleLogout } from 'react-google-login';

const ProfileC = ({ logOut }) => {

  const profile = useContext(AuthContext);
  //! from /service/data/userRecord.json
  const calculateSumByTypeAndUser = (data, type, userID) => {
    return data.reduce((total, item) => {
      if (item.type === type && item.userID === userID) {
        return total + item.amount;
      }
      return total;
    }, 0);
  };

  const userID = 123; // Replace with the actual user ID
  const totalIncome = calculateSumByTypeAndUser(dt, 'income', userID);
  const totalWant = calculateSumByTypeAndUser(dt, 'want', userID);
  const totalNeed = calculateSumByTypeAndUser(dt, 'need', userID);
  // Filter the data for 'want' and 'need' expense types
  const wantAndNeedData = dt.filter(item => item.type === 'want' || item.type === 'need');
  //!end

  const clientId = "831352639707-shhtm34vua2bbiibnt88j86lu8fi2bpb.apps.googleusercontent.com"

  return (
    <>
      <div className={styles.container}>

        <div className={styles.profile}>
          <i className={`bi bi-person-circle ${styles['custom-icon']}`}></i>
          <div className={styles.Name}>Name : {profile.name}</div>
        </div>
        <div className={styles.detail}>
          <div className={styles.amoutDatail}>Income: {totalIncome} | </div>
          <div className={styles.amoutDatail}>Expense: {totalWant + totalNeed} |</div>
          <div className={styles.amoutDatail}>Net: {totalIncome - (totalWant + totalNeed)}</div>
        </div>
        <div className={styles.bar}>

          <ProgressBar style={{ fontSize: 15, height: 50 }}>
            <ProgressBar label={`Net ${((totalIncome - totalWant - totalNeed) / totalIncome * 100).toFixed(2)}%`} variant="success" now={(totalIncome - totalWant - totalNeed) / totalIncome * 100} key={1} />
            <ProgressBar label={`Want ${((totalWant / totalIncome * 100).toFixed(0))}%`} variant="warning" now={totalWant / totalIncome * 100} key={2} />
            <ProgressBar label={`Need ${((totalNeed / totalIncome * 100).toFixed(0))}%`} variant="danger" now={totalNeed / totalIncome * 100} key={3} />
          </ProgressBar>
        </div>

        <div className={styles.pie}>
          <PieChart data={wantAndNeedData} />
        </div>
        <div className={styles.logout}><GoogleLogout clientId={clientId} buttonText='Log out' onLogoutSuccess={logOut} /></div>
      </div>

      <NavigationBar />

    </>
  );
};

export default ProfileC;
