import React from 'react'
import './savingcard.css'

function Savingcard({name}) {
  const piggyUrl = "https://cdn-icons-png.flaticon.com/512/9030/9030761.png";
  return (
    <div className="savecard">
        <img className="img"  src={piggyUrl} />
        <div className="Name">Name: <span>{name}</span></div>
        <div className="Goal">Goal : xxx</div>
        <div className="Recent">Status :</div>
        <div className="percent"><span>XX</span>%</div>
    </div>
  )
}

export default Savingcard