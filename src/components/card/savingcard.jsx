import React from 'react'
import './card.css'

function Savingcard({prop}) {
  const piggyUrl = "https://cdn-icons-png.flaticon.com/512/9030/9030761.png";
  return (
    <div className="savecard">
        <img className="img"  src={piggyUrl} />
        <div className="Name">Name: <span>{prop.name}</span></div>
        <div className="Goal">Goal : {prop.goal}</div>
        <div className="Recent">Current : {prop.current}</div>
        <div className="percent"><span>{(prop.current/prop.goal * 100).toFixed(1)}</span>%</div>
    </div>
  )
}

export default Savingcard