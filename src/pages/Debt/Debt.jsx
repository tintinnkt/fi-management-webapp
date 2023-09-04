import React, { useState,useEffect,useContext} from 'react';
import { AuthContext } from '../../App';
import { db } from '../../utilities/firebase-config';
import { collection,addDoc,getDocs } from 'firebase/firestore';

import Topic from '../../components/topic/topic';
import NavigationBar from '../../components/navbar/nav';
import DebtCard from '../../components/card/DebtCard';
import NewDebtForm from '../../components/card/form/NewDebtForm';
import './Debt.css';

function Debt() {
  const profile = useContext(AuthContext);
  const userID = profile.googleId
  const [debtBox,setDebtBox]=useState([]);
  const fetchDebt = async () => {
    await getDocs(collection(db, "Debtbox")).then((querySnapshot) => {
      const newRecieveDebt = querySnapshot.docs.filter((doc) => {
        return doc.data().userID ===userID
      }).map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDebtBox(newRecieveDebt);
      console.log(newRecieveDebt)
      console.log("h",debtBox)
    });
  };
  useEffect(()=>{fetchDebt()},[profile])
  
  const [filteredData, setFilteredData] = useState(debtBox);

  const handleEdit = (id, updatedData) => {
    const index = filteredData.findIndex((debt) => debt.id === id);

    if (index !== -1) {
      const newData = [...filteredData];
      newData[index] = { ...newData[index], ...updatedData };
      setFilteredData(newData);
    }
  };


  const handleCreate = async (newDebt) => {
    setFilteredData((prevData) => [...prevData, newDebt]);
    try{
      const docRef = await addDoc(collection(db,"Debtbox"),newDebt)
      console.log("DebtRec ID: ",docRef.id)
    }catch(e){
      console.error("Error Add Debt ",e)
    }
  };


  return (
    <>
      <Topic text="Debt" />
      <div className="row2">
        {debtBox.map((debt) => (
          <DebtCard key={debt.id} prop={debt} onEdit={handleEdit} />
        ))}
        <NewDebtForm onCreate={handleCreate} />
      </div>


      <NavigationBar />
    </>
  );
}

export default Debt;
