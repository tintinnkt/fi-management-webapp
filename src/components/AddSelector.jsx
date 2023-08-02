import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AddSelectorDropdown() {
    const selector = [
        { id: 1, text: 'Electricity', type: 'need' },
        { id: 2, text: 'Foods and Drinks', type: 'need' },
        { id: 3, text: 'internet', type: 'need' },
        { id: 4, text: 'Travel', type: 'want' },
        { id: 5, text: 'Shopping', type: 'want' },
        { id: 6, text: 'Salary', type: 'Income' },
        { id: 7, text: 'Recieve', type: 'Income' },
    ]

    return (
        <DropdownButton
            align="end"
            title={'Select an option'} // Show the selected text or default message
            id="dropdown-menu-align-end"
            
        >
            <Dropdown.Header>Need expense</Dropdown.Header>
            {selector.map(item => (
                item.type === 'need' &&
                <Dropdown.Item key={item.id} eventKey={item.id}>
                    {item.text}
                </Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Header>Want expense</Dropdown.Header>
            {selector.map(item => (
                item.type === 'want' &&
                <Dropdown.Item key={item.id} eventKey={item.id}>
                    {item.text}
                </Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Header>Want expense</Dropdown.Header>
            {selector.map(item => (
                item.type === 'want' &&
                <Dropdown.Item key={item.id} eventKey={item.id}>
                    {item.text}
                </Dropdown.Item>
            ))}
            <Dropdown.Divider />
        </DropdownButton>
    );
}

export default AddSelectorDropdown;
