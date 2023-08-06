import React, { useState } from 'react';
import Select from 'react-select';
import './selector.css'

function AddSelector({ onSelect }) {
    const selector = [
        { id: 1, type: 'need', label: 'Food & drinks' },
        { id: 2, type: 'need', label: 'Transportation' },
        { id: 3, type: 'need', label: 'Electricity & water' },
        { id: 4, type: 'need', label: 'Phone & internet' },
        { id: 5, type: 'need', label: 'Housing' },
        { id: 6, type: 'want', label: 'Shopping' },
        { id: 7, type: 'want', label: 'Hobby' },
        { id: 8, type: 'want', label: 'Hangout' },
        { id: 9, type: 'want', label: 'Travelling' },
        { id: 10, type: 'want', label: 'Activity' },
        { id: 11, type: 'want', label: 'Collection' },
        { id: 12, type: 'income', label: 'Salary' },
        { id: 13, type: 'income', label: 'Earning' },
        { id: 14, type: 'income', label: 'Payee' },
        { id: 15, type: 'need', label: 'Medical' },
        { id: 16, type: 'income', label: 'Refund' },
        { id: 17, type: 'want', label: 'Entertainment' },

        { id: 100, type: 'want', label: 'Other' },
        { id: 101, type: 'need', label: 'Other' },
        { id: 102, type: 'income', label: 'Other' },
    ];

    const groupedOptions = [
        {
            label: 'Need expense',
            options: selector.filter(item => item.type === 'need').map(item => ({ value: item.label, label: item.label ,type:item.type}))
        },
        {
            label: 'Want expense',
            options: selector.filter(item => item.type === 'want').map(item => ({ value: item.label, label: item.label ,type:item.type}))
        },
        {
            label: 'Income',
            options: selector.filter(item => item.type === 'income').map(item => ({ value: item.label, label: item.label ,type:item.type}))
        }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (selectedOption) => {
        setSelectedOption(selectedOption);
        
        onSelect(selectedOption?.type || null, selectedOption?.label || null);
    };
    
    
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.data.label === 'Other' ? '#c19875' : '#3B5451',
        }),
    };

    return (
            <div className="selector-container">
            <Select
                options={groupedOptions}
                value={selectedOption}
                onChange={handleSelect}
                placeholder="Select an option"
                styles={customStyles}
                />
            </div>
    );
    }

export default AddSelector;
