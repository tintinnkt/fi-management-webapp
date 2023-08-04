import React from 'react'
import './card.css'

function Savingcard({name , goal,current}) {
  const piggyUrl = "https://cdn-icons-png.flaticon.com/512/9030/9030761.png";
  return (
    <div className="savecard">
        <img className="img"  src={piggyUrl} />
        <div className="Name">Name: <span>{name}</span></div>
        <div className="Goal">Goal : {goal}</div>
        <div className="Recent">Current : {current}</div>
        <div className="percent"><span>{(current/goal * 100).toFixed(1)}</span>%</div>
    </div>
  )
}

export default Savingcard