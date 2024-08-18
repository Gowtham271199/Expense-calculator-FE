import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="container">
    <h1>Welcome to the Expense Tracker</h1>
    <p>Track your expenses, manage your budget, and gain financial control.</p>
    <Link to="/login"><button>Login</button></Link>
    <Link to="/register"><button>Register</button></Link>
  </div>
);

export default Home;
