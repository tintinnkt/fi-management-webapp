import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { AuthContext } from '../../App';
import { db } from '../../utilities/firebase-config';
import {  collection, getDocs } from 'firebase/firestore';

import BarGraph from '../../components/bargraph/barGraph';
import NavigationBar from '../../components/navbar/nav'
import SpendingTypeCard from '../../components/card/SpendingTypeCard';

const Home = () => {
  const profile = useContext(AuthContext);
  const [Tr, setTr] = useState([]);

  const fetchTr = async () => {
    await getDocs(collection(db, "transaction")).then((querySnapshot) => {
      const newTr = querySnapshot.docs.filter((doc) => {
        return doc.data().userID === profile.googleId;
      }).map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTr(newTr);

    });
  };

  useEffect(() => { fetchTr(); }, [profile]);

  //! from /service/data/userRecord.json

  const calculateSumByTypeAndUser = (data, type) => {
    return data.reduce((total, item) => {
      if (item.type === type ) {
        return total + item.amount;
      }
      return total;
    }, 0);
  };

  const totalIncome = calculateSumByTypeAndUser(Tr, 'income');
  const totalWant = calculateSumByTypeAndUser(Tr, 'want');
  const totalNeed = calculateSumByTypeAndUser(Tr, 'need');
  // Filter the data for 'want' and 'need' expense types
  const wantAndNeedData = Tr.filter(item => (item.type === 'want' || item.type === 'need'));
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
1
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
          <div className="spending-rec">Transaction Record</div>
          <div className="rec-body">
            <BarGraph data={Tr}/>

          </div>
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
