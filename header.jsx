import React from 'react';
import './header.css';
import {Outlet, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
        <h2 className="logo">DEV@DEAKIN</h2>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="options">
          <button className="option">POST</button>
          <Link to="/login">
           <button className="option"> LOGIN</button>
          </Link>
          <Outlet/>
        </div>
      </header>
    </div>
  );
}

export default Header;
