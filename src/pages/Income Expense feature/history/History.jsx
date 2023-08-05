import React, { useState } from 'react';
import data from '../../../service/data/Record.json';
import './history.css'

//components
import Topic from '../../../components/topic/topic';
import NavigationBar from '../../../components/navbar/nav';
import HistoryCard from '../../../components/card/HistoryCard'

function History() {
    const [filteredData, setFilteredData] = useState(data.filter((rec) => rec.userID === 123));
    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <React.Fragment>
            <Topic text="History" />
            <div className="container">
                <p>heeeeello</p>
                {filteredData.map((rec) => (
                    <HistoryCard prop={rec}/>
                ))}
            </div>
            <NavigationBar />
        </React.Fragment>
    );
}

export default History;
