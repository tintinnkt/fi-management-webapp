import React, { useState } from 'react';
import dt from '../../service/data/DebtUser.json';
import Topic from '../../components/topic/topic';
import NavigationBar from '../../components/navbar/nav';
import DebtCard from '../../components/card/DebtCard';
import NewDebtForm from '../../components/card/form/NewDebtForm';
import './Debt.css';

function Debt() {
  const [filteredData, setFilteredData] = useState(dt.filter((debt) => debt.userID === 102));

  const handleEdit = (id, updatedData) => {
    const index = filteredData.findIndex((debt) => debt.id === id);
  
    if (index !== -1) {
      const newData = [...filteredData];
      newData[index] = { ...newData[index], ...updatedData };
      setFilteredData(newData);
    }
  };
  

  const handleCreate = (newDebt) => {
    setFilteredData((prevData) => [...prevData, newDebt]);
  };

  filteredData.sort((a, b) => a.id - b.id);

  return (
    <>
      <Topic text="Debt" />
      <div className="row2">
        {filteredData.map((debt) => (
          <DebtCard key={debt.id} prop={debt} onEdit={handleEdit} />
        ))}
      <NewDebtForm onCreate={handleCreate} /> 
      </div>

      
      <NavigationBar />
    </>
  );
}

export default Debt;
