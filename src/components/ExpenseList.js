import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({ date: '', category: '', amount: '' });

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('https://expense-calculator-be-2.onrender.com/api/expenses', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setExpenses(response.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };
    fetchExpenses();
  }, []);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (filter.date ? new Date(expense.date).toLocaleDateString() === new Date(filter.date).toLocaleDateString() : true) &&
      (filter.category ? expense.category === filter.category : true) &&
      (filter.amount ? expense.amount === Number(filter.amount) : true)
    );
  });

  return (
    <div className="container">
      <h2>Expense List</h2>
      <div>
        <input type="date" name="date" placeholder="Filter by date" onChange={handleFilterChange} />
        <input type="text" name="category" placeholder="Filter by category" onChange={handleFilterChange} />
        <input type="number" name="amount" placeholder="Filter by amount" onChange={handleFilterChange} />
      </div>
      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense._id}>
            {expense.date} - {expense.category} - ${expense.amount} - {expense.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
