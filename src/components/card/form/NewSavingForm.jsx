import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../App';
import './NewForm.css'

function SavingForm({ onSave }) {
    const profile=useContext(AuthContext)
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState(0);
    const [current, setCurrent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSaving = {
            userID: profile.googleId,
            name,
            goal : parseInt(goal),
            current : parseInt(current),
        };
        onSave(newSaving);
        console.log("newSaving Add")
        setName('');
        setGoal(0);
        setCurrent(0);
        setShowForm(0);
    };

    return (
        <>
            {!showForm ? (<div className="plus-icon" onClick={() => setShowForm(true)}>
                <img className="➕"src="https://cdn-icons-png.flaticon.com/512/4677/4677490.png " alt="+" />
            </div>
            ) :(
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2>Add New Saving</h2>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Goal:
                        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} required />
                    </label>
                    <label>
                        Current:
                        <input type="number" value={current} onChange={(e) => setCurrent(e.target.value)} required />
                    </label>
                    <button id="form1"type="submit">Add Saving</button>
                </form>
            </div>
                )}
        </>
  );
}

export default SavingForm;
