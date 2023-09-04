import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './card.css';

function Savingcard({ prop }) {
  const piggyUrl = "https://cdn-icons-png.flaticon.com/512/9030/9030761.png";
  const percent = (prop.current / prop.goal * 100).toFixed(1);

  return (
    <div className="savecard">
      <img className="img-pig" src={piggyUrl} />
      <div className="Name">{prop.name}</div>
      <div className="perc">
        <div className="bar"><ProgressBar now={percent} label={`${percent}%`} /></div>
        <div className="p-label"> {percent}%</div>
      </div>
      <div className="Goal">Goal : {prop.goal}</div>
      <div className="Recent">Current : {prop.current}</div>
      {/* <i className="bi bi-arrows-angle-expand"/> */}
    </div>
  );
}

export default Savingcard;
