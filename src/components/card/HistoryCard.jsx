import React from 'react';
import { format } from 'date-fns';
import './HistoryCard.css';

function HistoryCard({ prop }) {
  let bgColor;
  if (prop.type === 'need') {
    bgColor = '#f77c4c';
  } else if (prop.type === 'want') {
    bgColor = '#ecff99';
  } else if (prop.type === 'income') {
    bgColor = '#85ffa3';
  }

  return (
    <div className="card-history" key={prop.id} style={{ backgroundColor: bgColor }}>
      <div className="💩">
        <div className="name">{prop.name}</div>
        <div className="amount">{prop.amount}</div>
      </div>
      <div className="date">{format(new Date(prop.date), 'dd/MM/yyyy')}</div>

    </div>
  );
}

export default HistoryCard;
