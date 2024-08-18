import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const predefinedCategories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Health', 'Others'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalCategory = customCategory ? customCategory : category;
      await axios.post(
        'https://expense-calculator-be-2.onrender.com/api/expenses',
        { amount, category: finalCategory, description },
        { headers: { 'x-auth-token': localStorage.getItem('token') } }
      );
      navigate('/expenses');
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {predefinedCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Or add a custom category"
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
