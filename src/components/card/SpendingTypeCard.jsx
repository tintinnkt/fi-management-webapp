import React from 'react'
import './HistoryCard.css'
function SpendingTypeCard({prop,total}) {
  return (
    <div className='card-history2'>
      <div className='💩'>
        <div className="name">{prop.name}</div>
        <div className="amount">{(prop.totalAmount/total*100).toFixed(1)}%</div>
      </div>
        <div className="money">{prop.totalAmount}</div>
    </div>
  )
}

export default SpendingTypeCard