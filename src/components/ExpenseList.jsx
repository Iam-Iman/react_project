import React from 'react';

const ExpenseList = ({ items, deleteItems }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div className='card' key={index}>
                    <div className='card-header'>{item.description}</div>
                    <div className='card-body'>
                        <div>Amount: R{item.amount}</div>
                        <div>Category: {item.category}</div>
                        <button 
                            className='btn btn-outline-danger' 
                            onClick={() => deleteItems(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <div className='card'>
                <div className='card-header'>Total</div>
                <div className='card-body'>
                    <div>
                        R{items.reduce((total, item) => total + parseInt(item.amount), 0).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseList;
