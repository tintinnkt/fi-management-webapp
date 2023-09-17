import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { db } from '../../utilities/firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import './card.css';

function Savingcard({ prop }) {
  const [showupdate, setShowupdate] = useState(false);
  const [editedData, setEditedData] = useState({ name: prop.name, goal: prop.goal, current: prop.current });
  const piggyUrl = "https://cdn-icons-png.flaticon.com/512/9030/9030761.png";
  const percent = (editedData.current / editedData.goal * 100).toFixed(1);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };
    const updateSavingData = async () => {
      try {
        const docRef = doc(db, "Savingbox", prop.id);
    
        await setDoc(docRef, editedData, { merge: true });
    
        console.log('Saving updated successfully');
      } catch (error) {
        console.error('Error updating document:', error);
      }
    };
  
  const handleSave = () => {
    updateSavingData()
    setShowupdate(false);
  };
  

  const handleDiscard = () => {
    setEditedData({ name: prop.name, goal: prop.goal, current: prop.current });
    setShowupdate(false);
  };

  return (
    <div className='save-con'>
      {!showupdate ? (
        <div className="savecard">
          <i className="bi bi-arrows-angle-expand" onClick={() => setShowupdate(1)} />
          <img className="img-pig" src={piggyUrl} alt="Piggy Bank" />
          <div className="Name">{editedData.name}</div>
          <div className="perc">
            <div className="bar"><ProgressBar now={percent} label={`${percent}%`} /></div>
            {percent<=25 ? <div className="p-label"> {percent}%</div>: null}
          </div>
          <div className="Goal">Goal : {editedData.goal}</div>
          <div className="Recent">Current : {editedData.current}</div>
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
            name="goal"
            value={editedData.goal}
            onChange={handleInputChange}
          />
          <input
            className="Updateinput"
            type="number"
            name="current"
            value={editedData.current}
            onChange={handleInputChange}
          />
          <div className="update-button-container">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="discard-button" onClick={handleDiscard}>Discard</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Savingcard;
