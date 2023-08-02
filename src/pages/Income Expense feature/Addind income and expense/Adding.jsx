import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import './Adding.css'
import 'react-datepicker/dist/react-datepicker.css'

//component
import Topic from '../../../components/topic/topic'
import NavigationBar from '../../../components/navbar/nav'
import AddSelectorDropdown from '../../../components/AddSelector'

function Adding() {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Topic text="Add Income & Expense" />
            <div className="container">

                <div className="Howmuch">How much ?</div>
                <input className="money" type="number" placeholder='Amount' />
                <div className="dropdown">
                    <AddSelectorDropdown />
                </div>

                <div className="Date">
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                </div>
                <div className="calender"></div>
            </div>

            <button className="rec-btn">Record</button>
            <NavigationBar />
        </>
    )
}

export default Adding