import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
    const [expenses, setExpenses] = useState([
        { id: 1, description: '1 loaf of brown bread', amount: 20, category: 'essentials' },
        { id: 2, description: 'attend party', amount: 250, category: 'entertainment' },
        { id: 3, description: '1 muffin and tea', amount: 50, category: 'food and beverages' },
        { id: 4, description: 'spar potato, tomatoes, onion combo', amount: 150, category: 'groceries' },
        { id: 5, description: '1 body lotion', amount: 55, category: 'personal care' },
        { id: 6, description: 'daily taxi fare', amount: 60, category: 'transport' },
        { id: 7, description: 'mtn data', amount: 400, category: 'utilities' }

    ]);
    
    const addItems = (data) => {
        console.log(data);
        setExpenses(() => [...expenses, data]);
    };

    const deleteItems = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const filterItems = (categories) => {
        setExpenses(expenses.filter(expense => expense.category === categories));
    };

    return (
        <>
            <h1 style={{ color: '#001d4a', textAlign: 'center' }}>My Expense App</h1>
            <ExpenseForm addExpense={addItems} />
            <ExpenseFilter filterItems={filterItems} />
            <ExpenseList items={expenses} deleteItems={deleteItems} />
        </>
    );
}

export default App;
