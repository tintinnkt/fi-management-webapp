import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './card.css';

function Savingcard({ prop }) {
  const [showupdate, setShowupdate] = useState(false);
  const [editedData, setEditedData] = useState({ name: prop.name, goal: prop.goal, current: prop.current });
  const piggyUrl = "https://cdn-icons-png.flaticon.com/512/9030/9030761.png";
  const percent = (editedData.current / editedData.goal * 100).toFixed(1);

  function showhideupdate() {
    setShowupdate(!showupdate);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // You can add code here to save the editedData to your backend or perform any other actions
    setShowupdate(false);
  };
  

  const handleDiscard = () => {
    // Reset the edited data back to the original data and hide the update section
    setEditedData({ name: prop.name, goal: prop.goal, current: prop.current });
    setShowupdate(false);
  };

  return (
    <div className='save-con'>
      {!showupdate ? (
        <div className="savecard">
          <i className="bi bi-arrows-angle-expand" onClick={() => showhideupdate()} />
          <img className="img-pig" src={piggyUrl} alt="Piggy Bank" />
          <div className="Name">{editedData.name}</div>
          <div className="perc">
            <div className="bar"><ProgressBar now={percent} label={`${percent}%`} /></div>
            <div className="p-label"> {percent}%</div>
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
          <div className="p-label"> {percent}%</div>
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
