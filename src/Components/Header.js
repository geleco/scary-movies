import React from 'react';
import logo from './assets/logo.png'; 
import './styles/Header.css';

function Header() {
  return (
<header className="header">
  <div className="logo-container">
  <img src={logo} alt="Logo" className="header-logo" />
  </div>
  <div className="search-container">
    <input type="text" className="search-input" placeholder="Adicione um filme de terror" />
  </div>
  <div className="logout-container">
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  </div>
</header>
  );
}

function handleLogout() {
  console.log('Logout clicked');
}

export default Header;
