import React from 'react';
import { format } from 'date-fns';
import './card.css';

function DebtCard({ prop }) {
  const DebtImg = "https://cdn-icons-png.flaticon.com/512/3696/3696177.png";
  const timestamp = prop.deadline;
  const date = timestamp.toDate();

  return (
    <>
      <div className="savecard">
        <img className="img-debt" src={DebtImg} alt="Debt" />
        <div className="Name">💰<span>{prop.name}</span></div>
        <div className="Total">Total : {prop.total}</div>
        <div className="Arrear">Arrear : {prop.arrear}</div>
        <div className="Deadline">Deadline: {format(date, 'dd/MM/yyyy')}</div>
        {/* <i className="bi bi-arrows-angle-expand" /> */}
      </div>
    </>
  )
}

export default DebtCard;
