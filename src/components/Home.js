// Home Component
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <div className="container">
    <h1>Welcome to the Expense Tracker</h1>
    <p>Track your expenses, manage your budget, and gain financial control.</p>
    <Link to="/login"><button className="login">Login</button></Link>
    <Link to="/register"><button className="register">Register</button></Link>
  </div>
);

export default Home;
