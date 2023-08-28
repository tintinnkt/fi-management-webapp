import React from 'react';
import './adjustdebt.css'; // Make sure to adjust the path to your CSS file

function AdjustDebt() {
    return (
        <div className="adjust-container">
            <div className="Name">Name : XXXX</div>
            <div className="Total">Total : XXXX</div>
            <div className="Deadline">Deadline:<br/> XX/XX/XXXX </div>
            <div className="Arrear">Arrear : XXXX</div>
            <div className="Add">Add money here</div>
            <input type="text" className="add" />
            <button className="record">Record</button>
        </div>
    );
}

export default AdjustDebt;
