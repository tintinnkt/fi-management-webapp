import React from 'react'
import { Link } from 'react-router-dom'
import './returnbtn.css'

function Returnbtn({url}) {
  return (
    <>
    <Link to={url} className='re-btn'>
    <img className='re-img' src="https://cdn-icons-png.flaticon.com/512/5544/5544140.png " alt="" />
    </Link>
    </>
  )
}

export default Returnbtn