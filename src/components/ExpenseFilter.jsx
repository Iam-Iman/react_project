import React from 'react';

const ExpenseFilter = ({ filterItems }) => {
    return (
        <select 
            name='' 
            id='' 
            className='form-select mb-3' 
            onChange={(event) => filterItems(event.target.value)}
        >
            <option value=''></option>
            <option value='essentials'>Essentials</option>
            <option value='entertainment'>Entertainment</option>
            <option value='food and beverages'>Food and Beverages</option>
            <option value='groceries'>Groceries</option>
            <option value='personal care'>Personal Care</option>
            <option value='transport'>Transport</option>
            <option value='utilities'>Utilities</option>
        </select>
    );
};

export default ExpenseFilter;
