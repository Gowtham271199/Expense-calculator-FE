import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="container">
    <h1>Welcome to the Expense Tracker</h1>
    <p>Track your expenses, manage your budget, and gain financial control.</p>
    <div>
      <Link to="/login">
        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '5px',
            backgroundColor: '#007bff',  // Primary blue color
            width: '120px'  // Same width for both buttons
          }}
        >
          Login
        </button>
      </Link>
      <Link to="/register">
        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '5px',
            backgroundColor: '#28a745',  // Green color for register
            width: '120px'  // Same width for both buttons
          }}
        >
          Register
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
