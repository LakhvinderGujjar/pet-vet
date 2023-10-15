import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
     
        <i className="fas fa-paw"></i> {/* Large paw icon */}
       
        <h1>Pet-VeT Shop</h1>
      </div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/pet-list">Pet List</Link>
        <Link to="/services">Services</Link>
      </nav>
    </header>
  );
};

export default Header;
