import React, { useState } from 'react';
import './NewForm.css'

function SavingForm({ onSave }) {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState(0);
    const [current, setCurrent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSaving = {
            id: Date.now(),
            userid: 101, // Set the user ID
            name,
            goal,
            current,
        };
        onSave(newSaving);
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
                    <button type="submit">Add Saving</button>
                </form>
            </div>
                )}
        </>
  );
}

export default SavingForm;
