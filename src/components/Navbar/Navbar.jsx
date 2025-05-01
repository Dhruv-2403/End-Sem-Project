// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1828/1828547.png" 
          alt="GameVerse Logo"
          className="logo-image"
        />
        <Link to="/" className="logo-text">GameVerse Store</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/games" className="nav-link">Games</Link>
        <Link to="/categories" className="nav-link">Categories</Link>
        <Link to="/featured" className="nav-link">Featured</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
      </div>

  
    </nav>
  );
};

export default Navbar;