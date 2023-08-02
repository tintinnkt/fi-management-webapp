import React from 'react'
import './Adding.css'

//component
import Topic from '../../../components/topic/topic'
import NavigationBar from '../../../components/navbar/nav'

function Adding() {
    return (
        <>
            <Topic text="Add Income & Expense"/>
            <div id="container">

                <div className="Howmuch">How much ?</div>
                <input className="money" type="number"  />
                <div className="type"><a href=""><i className="bi bi-arrow-down-circle"></i></a></div>
                <div className="Date">Date</div>
                <div className="calender"></div>

            </div>

            <button>Record</button>
            <NavigationBar />
        </>
    )
}

export default Adding