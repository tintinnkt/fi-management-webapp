import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../App';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './NewForm.css';

function NewDebtForm({ onCreate }) {
  const profile = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);
  const [deadline, setDeadline] = useState(new Date());
  const [arrear, setArrear] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDebt = {
      id: Date.now(),
      userID: profile.googleId,
      name,
      total,
      deadline,
      arrear,
    };
    onCreate(newDebt);
    setName('');
    setTotal(0);
    setDeadline(new Date());
    setArrear(0);
    setShowForm(false);
    console.log("newDebt add")
  };

  return (
    <>
      {!showForm ? (
        <div className="plus-icon" onClick={() => setShowForm(true)}>
          <img className="➕" src="https://cdn-icons-png.flaticon.com/512/4677/4677490.png " alt="+" />
        </div>
      ) : (
        <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Add New Debt</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Total:
            <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} required />
          </label>
          <label>
            Deadline:
            <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
          </label>
          <label>
            Arrear:
            <input type="number" value={arrear} onChange={(e) => setArrear(e.target.value)} required />
          </label>
          <button id="form1"type="submit">Add Debt</button>
        </form>
        </div>
      )}
    </>
  );
}

export default NewDebtForm;
