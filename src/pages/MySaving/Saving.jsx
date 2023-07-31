import React from 'react'

//component
import Savingcard from '../../components/savingcard/savingcard'
import Topic from '../../components/topic/topic'

//css
import './Saving.css'
import NavigationBar from '../../components/navbar/nav'

function Saving() {
  return (
    <>
    <Topic text="My Saving"/>
    <div className="row2">
      <Savingcard name="Taylor Concert"/>
      <Savingcard name="Tesla model Y"/>
      <Savingcard name="Medical Provide"/>
      <Savingcard name="???"/>
    </div>
    <div className="row">
      
      
    </div>

    <NavigationBar />
    </>
  )
}

export default Saving