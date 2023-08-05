import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import styles from './Adding.module.css'
import 'react-datepicker/dist/react-datepicker.css'

//component
import Topic from '../../../components/topic/topic'
import NavigationBar from '../../../components/navbar/nav'
import AddSelector from '../../../components/selector/AddSelector'

function Adding() {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Topic text="Add Income & Expense" />
            <div className={styles.container}>

                <div className={styles.Howmuch}>How much ?</div>
                <input className={styles.money} type="number" placeholder='Amount' />
                <div className={styles.dropdown}>
                    <AddSelector />
                </div>

                <div className={styles.Date}>
                    <DatePicker className={styles.calender} selected={date} onChange={(date) => setDate(date)} />
                </div>
               
            </div>

            <button className={styles.rec}>Record</button>
            <NavigationBar />
        </>
    )
}

export default Adding