import React from 'react'
import './card.css'

function DebtCard({prop}) {
  const DebtImg =["https://cdn-icons-png.flaticon.com/512/3696/3696177.png","   https://cdn-icons-png.flaticon.com/512/2544/2544087.png"];
  return (
    <>
    <div className="save">
            <img className="img" src={DebtImg[prop.type]}/>
            <div className="Name">Name : <span>{prop.name}</span></div>
            <div className="Total">Total : {prop.total}</div>
            <div className="Deadline">Deadline :  </div>
            <div className="Arrear">Arrear : {prop.arrear}</div>
    </div>
    </>
  )
}

export default DebtCard