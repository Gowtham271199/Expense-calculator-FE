import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import './App.css'; // Import the global styles

import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/expenses">Expense List</Link>
          <Link to="/add-expense">Add Expense</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
