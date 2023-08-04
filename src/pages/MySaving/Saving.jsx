import React from 'react'
import dt from '../../service/data/SavingUser.json'

//component
import Savingcard from '../../components/savingcard/savingcard'
import Topic from '../../components/topic/topic'
import NavigationBar from '../../components/navbar/nav'

//css
import './Saving.css'

function Saving() {
  const filteredData = dt.filter((save) => save.userid === 101);
  filteredData.sort((a, b) => a.id - b.id);
  return (
    <>
    <Topic text="My Saving"/>
    <div className="row2">
    {filteredData.map((save) => (
            <Savingcard name={save.name} goal={save.goal} current={save.current} />
          ))}
    </div>
    <div className="row">
      
      
    </div>

    <NavigationBar />
    </>
  )
}

export default Saving