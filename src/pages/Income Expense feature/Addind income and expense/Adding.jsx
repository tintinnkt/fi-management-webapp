import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './Adding.module.css';
import 'react-datepicker/dist/react-datepicker.css';

//component
import Topic from '../../../components/topic/topic';
import NavigationBar from '../../../components/navbar/nav';
import AddSelector from '../../../components/selector/AddSelector';

function Adding() {
    const [date, setDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState(null);
    const [selectedLabel, setSelectedLabel] = useState(null);

    const handleOptionSelect = (type, label) => {
        setSelectedType(type);
        setSelectedLabel(label);
    };
    

    const handleRecord = () => {
        const newData = {
            userID: 123, // Replace with the actual user ID
            amount: parseFloat(document.querySelector(`.${styles.money}`).value),
            type: selectedType,
            name: selectedLabel,
            date: date.toISOString().split('T')[0],
        };

        console.log('Collected Data:', newData);

        document.querySelector(`.${styles.money}`).value = '';
        setSelectedType(null);
        setSelectedLabel(null);
        setDate(new Date());
    };

    return (
        <>
            <Topic text="Add Income & Expense" />
            <div className={styles.container}>
                <div className={styles.Howmuch}>How much ?</div>
                <input className={styles.money} type="number" placeholder="Amount" />
                <div className={styles.dropdown}>

                    <AddSelector onSelect={handleOptionSelect} />
                </div>

                <div className={styles.Date}>
                    <DatePicker
                        className={styles.calender}
                        selected={date}
                        onChange={newDate => setDate(newDate)}
                        style={{ fontSize: '10px' }}
                    />
                </div>
            </div>

            <button className={styles.rec} onClick={handleRecord}>Record</button>
            <div className="space"></div>
            <NavigationBar />
        </>
    );
}

export default Adding;
