import React, { useContext, useEffect, useState } from 'react';
import data from '../../../service/data/Record.json';
import { AuthContext } from '../../../App';
import { db } from '../../../utilities/firebase-config';
import { collection, getDocs, query } from 'firebase/firestore';
import './history.css'

//components
import Topic from '../../../components/topic/topic';
import HistoryCard from '../../../components/card/HistoryCard'
import Returnbtn from '../../../components/returnBtn/returnbtn';

function History() {
    const profile = useContext(AuthContext);
    const userID = profile.googleId
    const [Tr, setTr] = useState([]);

    const fetchTr = async () =>{
        await getDocs(collection(db,"transaction")).then((querySnapshot)=>{
            const newTr = querySnapshot.docs.filter((doc)=>{
                return doc.data().userID ===userID
            }).map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }))
            setTr(newTr)
        })
    }
    useEffect(()=>{fetchTr()},[profile])


    Tr.sort((b, a) => new Date(a.date) - new Date(b.date));
    const bgColor = ['#FA5555', '#F7F48B', '#A2EF44'];
    return (
        <React.Fragment>
            <div className="header">
                <Topic text="History" />
                <Returnbtn url='/' />
            </div>
            <div className="guild">
                <div className="g-box" style={{ backgroundColor: bgColor[2] }}>Income</div>
                <div className="g-box" style={{ backgroundColor: bgColor[1] }}>Want Expense</div>
                <div className="g-box" style={{ backgroundColor: bgColor[0] }}>Need Expense</div>

            </div>
            <div className="his-container">
                {Tr.map((rec) => (
                    <HistoryCard prop={rec} />
                ))}
            </div>
            {/* <NavigationBar /> */}
        </React.Fragment>
    );
}

export default History;
