import React, { useState ,useContext} from 'react';
import DatePicker from 'react-datepicker';
import styles from './Adding.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import { db } from '../../../utilities/firebase-config';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../../App';
//component
import Topic from '../../../components/topic/topic';
import Returnbtn from '../../../components/returnBtn/returnbtn';
import AddSelector from '../../../components/selector/AddSelector';

function Adding() {
    const profile = useContext(AuthContext);
    const [transaction, setTransaction] = useState("");
    const AddTr = async (transactionData) => {
        try {
            const docRef = await addDoc(collection(db, "transaction"), transactionData);
            console.log("Doc written ID:", docRef.id);
        } catch (e) {
            console.error("Error adding transaction:", e);
        }
    };




    const [date, setDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState(null);
    const [selectedLabel, setSelectedLabel] = useState(null);

    const handleOptionSelect = (type, label) => {
        setSelectedType(type);
        setSelectedLabel(label);
    };


    const handleRecord = async () => {
        try {
            const newData = {
                userID: profile.googleId, // Replace with actual user ID
                amount: parseFloat(document.querySelector(`.${styles.money}`).value),
                type: selectedType,
                name: selectedLabel,
                date: date.toISOString().split('T')[0],
            };
    
            await AddTr(newData); // Call the AddTr function with the new data
    
            document.querySelector(`.${styles.money}`).value = '';
            setDate(new Date());
        } catch (error) {
            console.error("Error adding transaction TT:", error);
        }
    };
    


    return (
        <>
            <Topic text="Add Money Record" />
            <Returnbtn url="/" />
            <div className={styles.aaa}>
                <div className={styles.container}>
                    <div className={styles.Howmuch}>How much ?</div>
                    <div className={styles.dropdown}>

                        <AddSelector onSelect={handleOptionSelect} />
                    </div>
                    <input className={styles.money} type="number" placeholder="Amount" />

                    <div className={styles.Date}>
                        <DatePicker
                            className={styles.calender}
                            selected={date}
                            onChange={newDate => setDate(newDate)}
                            style={{ fontSize: '10px' }}
                        />
                    </div>
                </div>

            </div>
            <div className={styles.send}>
                <button className={styles.rec} onClick={handleRecord}>Record</button>
            </div></>
    );
}

export default Adding;
