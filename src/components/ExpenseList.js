import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await axios.get('http://localhost:5000/api/expenses', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setExpenses(res.data);
    };
    fetchExpenses();
  }, []);

  return (
    <div className="container">
      <h2>Your Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.category}: ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
