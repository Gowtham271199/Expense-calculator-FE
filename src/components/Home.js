// Home Component
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="container">
    <h1>Welcome to the Expense Tracker</h1>
    <p>Track your expenses, manage your budget, and gain financial control.</p>
    <Link to="/login">   <button
        style={{
          padding: '10px 20px',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          margin: '5px',
          backgroundColor: '#007bff'  // Primary blue color
        }}
      >Login</button></Link>
    <Link to="/register"><button className="register">Register</button></Link>
  </div>
);

export default Home;
