import React, { useState } from 'react';
import data from '../../../service/data/Record.json';
import './history.css'

//components
import Topic from '../../../components/topic/topic';
import NavigationBar from '../../../components/navbar/nav';
import HistoryCard from '../../../components/card/HistoryCard'
import Returnbtn from '../../../components/returnBtn/returnbtn';

function History() {
    const [filteredData, setFilteredData] = useState(data.filter((rec) => rec.userID === 123));
    filteredData.sort((b, a) => new Date(a.date) - new Date(b.date));
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
                {filteredData.map((rec) => (
                    <HistoryCard prop={rec} />
                ))}
            </div>
            {/* <NavigationBar /> */}
        </React.Fragment>
    );
}

export default History;
