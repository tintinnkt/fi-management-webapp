import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import styles from './Profile.module.css'; // Import the CSS module with styles object

//component
import NavigationBar from '../../components/navbar/nav'

const ProfileC = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.profile}>
        <i className={`bi bi-person-circle ${styles['custom-icon']}`}></i>
      </div>

      <div className={styles.Name}>Name</div>
      <div className={styles.Income}>Income: xxxx</div>
      <div className={styles.Expense}>Expense: xxxx</div>
      <div className={styles.Net}>Net: xxxx</div>
      <div className={styles.line}></div>
      <div className={styles.Report}></div>
      <button className={styles.logout}>Log out</button>
    </div>
      <NavigationBar />
    </>
  );
};

export default ProfileC;
