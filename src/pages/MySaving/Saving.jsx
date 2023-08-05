import React, { useState } from 'react';
import dt from '../../service/data/SavingUser.json';
import Savingcard from '../../components/card/savingcard';
import Topic from '../../components/topic/topic';
import NavigationBar from '../../components/navbar/nav';
import SavingForm from '../../components/card/form/NewSavingForm';
import './Saving.css';

function Saving() {
  const [filteredData, setFilteredData] = useState(dt.filter((save) => save.userid === 101));

  const handleAddSaving = (newSaving) => {
    setFilteredData((prevData) => [...prevData, newSaving]);
  };

  const handleEditSaving = (id, updatedData) => {
    const index = filteredData.findIndex((save) => save.id === id);

    if (index !== -1) {
      const newData = [...filteredData];
      newData[index] = { ...newData[index], ...updatedData };
      setFilteredData(newData);
    }
  };

  filteredData.sort((a, b) => a.id - b.id);

  return (
    <>
      <Topic text="My Saving" />
      <div className="row2">
        {filteredData.map((save) => (
          <Savingcard key={save.id} prop={save} onEdit={handleEditSaving} />
        ))}

      <SavingForm onSave={handleAddSaving} />

      </div>
      <NavigationBar />
    </>
  );
}

export default Saving;