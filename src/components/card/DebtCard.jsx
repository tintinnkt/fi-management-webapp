import React from 'react'
import './card.css'

function DebtCard() {
  const DebtImg =["https://cdn-icons-png.flaticon.com/512/3696/3696177.png","   https://cdn-icons-png.flaticon.com/512/2544/2544087.png"];
  return (
    <>
    <div class="save">
            <img class="img" src={DebtImg[0]}/>
            <div class="Name">Name : xxx</div>
            <div class="Total">Total : xxx</div>
            <div class="Deadline">Deadline : xx/xx/xx </div>
            <div class="Arrear">Arrear : xxx</div>
        </div>
    </>
  )
}

export default DebtCard