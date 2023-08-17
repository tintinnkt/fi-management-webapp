import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file if using this JSX in a React component

import dt from '../../service/data/Record.json';
import NavigationBar from '../../components/navbar/nav'
import SpendingTypeCard from '../../components/card/SpendingTypeCard';

const Home = () => {

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
  const wantAndNeedData = dt.filter(item => (item.type === 'want' || item.type === 'need'));
  const totalExpense = totalNeed + totalWant


  const groupedData = wantAndNeedData.reduce((result, item) => {
    if (!result[item.name]) {
      result[item.name] = {
        name: item.name,
        totalAmount: 0,
        type: item.type,
      };
    }
    result[item.name].totalAmount += item.amount;
    return result;
  }, {});

  const groupedValues = Object.values(groupedData);
  groupedValues.sort((a, b) => b.totalAmount - a.totalAmount);

  //!end
  return (
    <>

      <div className="Title">
        <a href=""><i className="bi bi-bell-fill"></i></a>
        <div className="totalbalance-value">{(totalIncome - totalExpense).toFixed(2)}</div>
        <div className="totalbalance">Total Balance</div>
        <i className="bi bi-emoji-smile"></i>
      </div>
      <div className="home-con">
        <div className="rec-con">
      <div className="spending-rec">Spending Record</div>
      <div className="rec-body"></div>
        </div>

      <div className="spending-detail">Spending Detail
        <Link to="/history" href="" className='his-img'><img src="https://cdn-icons-png.flaticon.com/512/9485/9485945.png " alt="history" className='his-img' onClick={() => { }} /></Link>
      </div>
      <div className="spending-con">
      {groupedValues.map((rec) => (
        <div className="spending">
          <SpendingTypeCard prop={rec} total={totalExpense} />
        </div>
      ))}
      </div>

        <NavigationBar />

      </div>

    </>
  );
};

export default Home;
