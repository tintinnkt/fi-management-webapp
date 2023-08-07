import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import styles from './Profile.module.css';
import dt from '../../service/data/Record.json';

//component
import NavigationBar from '../../components/navbar/nav';
import PieChart from '../../components/pie/PieChart';
import { ProgressBar } from 'react-bootstrap';

const ProfileC = () => {
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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <i className={`bi bi-person-circle ${styles['custom-icon']}`}></i>
        </div>
        <div className={styles.detail}>
          <div className={styles.Name}>Name</div>
          <div className={styles.Income}>Income: {totalIncome}</div>
          <div className={styles.Expense}>Expense: {totalWant + totalNeed}</div>
          <div className={styles.Net}>Net: {totalIncome - (totalWant + totalNeed)}</div>
          <div className={styles.bar}>
            
            <ProgressBar >
              <ProgressBar label={`Net ${((totalIncome - totalWant - totalNeed) / totalIncome * 100).toFixed(2)}%`} variant="success" now={(totalIncome - totalWant - totalNeed) / totalIncome * 100} key={1} />
              <ProgressBar label="Want" variant="warning" now={totalWant / totalIncome * 100} key={2} />
              <ProgressBar label="Need" variant="danger" now={totalNeed / totalIncome * 100} key={3} />
            </ProgressBar>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Report}></div>
        </div>
        <button className={styles.logout}>Log out</button>
        <div className={styles.pie}>
          <PieChart data={wantAndNeedData}/>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default ProfileC;
