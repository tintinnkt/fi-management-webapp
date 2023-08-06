import React, { useState } from 'react';
import Select from 'react-select';
import './selector.css'

function AddSelector() {
    const selector = [
        { id: 1, type: 'need', text: 'Food & drinks' },
        { id: 2, type: 'need', text: 'Transportation' },
        { id: 3, type: 'need', text: 'Electricity & water' },
        { id: 4, type: 'need', text: 'Phone & internet' },
        { id: 5, type: 'need', text: 'Housing' },
        { id: 6, type: 'want', text: 'Shopping' },
        { id: 7, type: 'want', text: 'Hobby' },
        { id: 8, type: 'want', text: 'Hangout' },
        { id: 9, type: 'want', text: 'Travelling' },
        { id: 10, type: 'want', text: 'Activity' },
        { id: 11, type: 'want', text: 'Collection' },
        { id: 12, type: 'income', text: 'Salary' },
        { id: 13, type: 'income', text: 'Earning' },
        { id: 14, type: 'income', text: 'Payee' },
        { id: 15, type: 'need', text: 'Medical' },
        { id: 16, type: 'income', text: 'Refund' },
        { id: 17, type: 'want', text: 'Entertainment' },
    ];

    const groupedOptions = [
        {
            label: 'Need expense',
            options: selector.filter(item => item.type === 'need').map(item => ({ value: item.text, label: item.text }))
        },
        {
            label: 'Want expense',
            options: selector.filter(item => item.type === 'want').map(item => ({ value: item.text, label: item.text }))
        },
        {
            label: 'Income',
            options: selector.filter(item => item.type === 'income').map(item => ({ value: item.text, label: item.text }))
        }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
            <div className="selector-container">
            <Select
                options={groupedOptions}
                value={selectedOption}
                onChange={handleSelect}
                placeholder="Select an option"
                />
            </div>
    );
}

export default AddSelector;
