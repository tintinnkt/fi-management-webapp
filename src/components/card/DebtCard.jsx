import React, { useState } from 'react';
import { format } from 'date-fns';
import { db } from '../../utilities/firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the DatePicker
import { forwardRef } from 'react';

function DebtCard({ prop }) {
  const DebtImg = "https://cdn-icons-png.flaticon.com/512/3696/3696177.png";
  const [editedData, setEditedData] = useState({
    name: prop.name,
    total: prop.total,
    arrear: prop.arrear,
    deadline: prop.deadline.toDate(),
  });
  const [showUpdate, setShowUpdate] = useState(false);

  const handleShowHideUpdate = () => {
    setShowUpdate(!showUpdate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const updateDebtData = async () => {
    try {
      const docRef = doc(db, "Debtbox", prop.id);

      await setDoc(docRef, editedData, { merge: true });

      console.log('Debt updated successfully');
      // Optionally, you can perform some actions after a successful update.
      // For example, you can reload the updated data.
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleSave = () => {
    updateDebtData();
    setShowUpdate(false);
  };

  const handleDiscard = () => {
    // Reset edited data to the original values
    setEditedData({
      name: prop.name,
      total: prop.total,
      arrear: prop.arrear,
      deadline: prop.deadline.toDate(),
    });
    setShowUpdate(false);
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ))

  return (
    <div className='save-con'>
      {!showUpdate ? (
        <div className="savecard">
          <img className="img-debt" src={DebtImg} alt="Debt" />
          <div className="Name">💰<span>{editedData.name}</span></div>
          <div className="Total">Total : {editedData.total}</div>
          <div className="Arrear">Arrear : {editedData.arrear}</div>
          <div className="Deadline">Deadline: {format(editedData.deadline, 'dd/MM/yyyy')}</div>
          <i className="bi bi-arrows-angle-expand" onClick={handleShowHideUpdate} />
        </div>
      ) : (
        <div className="updatecard">
          <input
            className="Updateinput"
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleInputChange}
          />
          <input
            className="Updateinput"
            type="number"
            name="total"
            value={editedData.total}
            onChange={handleInputChange}
          />
          <input
            className="Updateinput"
            type="number"
            name="arrear"
            value={editedData.arrear}
            onChange={handleInputChange}
          />
          <div className="Updateinput datepicker-container" >
            <DatePicker
              selected={editedData.deadline}
              onChange={(date) => setEditedData({ ...editedData, deadline: date })}
              dateFormat="dd/MM/yyyy"
              customInput={<ExampleCustomInput />}
            />
          </div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDiscard}>Discard</button>
        </div>
      )}
    </div>
  );
}

export default DebtCard;
