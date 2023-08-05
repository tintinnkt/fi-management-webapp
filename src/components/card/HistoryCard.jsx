import React from 'react'
import { format } from 'date-fns'
import './HistoryCard.css'

function HistoryCard({prop}) {
  return (
    <>
        <div className="card-history" key={prop.id}>
            {prop.name} | {prop.type} : {prop.amount} {format(new Date(prop.date), 'dd/MM/yyyy')}
        </div>
    </>
  )
}

export default HistoryCard