import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({ date: '', category: '', amount: '' });
  const [summary, setSummary] = useState({ total: 0, perCategory: {} });

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('https://expense-calculator-be-2.onrender.com/api/expenses', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        const expensesData = response.data;
        setExpenses(expensesData);

        // Calculate summary
        const total = expensesData.reduce((acc, expense) => acc + expense.amount, 0);
        const perCategory = expensesData.reduce((acc, expense) => {
          acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
          return acc;
        }, {});

        setSummary({ total, perCategory });
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
      <h3>Expense Summary</h3>
      <p>Total Expenses: ${summary.total}</p>
      <ul>
        {Object.entries(summary.perCategory).map(([category, total]) => (
          <li key={category}>
            {category}: ${total}
          </li>
        ))}
      </ul>
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
