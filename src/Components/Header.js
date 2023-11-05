import React from 'react';
import logo from './assets/logo.png'; 
import './styles/Header.css';

function Header() {
  return (
<header class="header">
  <div class="logo-container">
  <img src={logo} alt="Logo" className="header-logo" />
  </div>
  <div class="search-container">
    <input type="text" class="search-input" placeholder="Adicione um filme de terror" />
  </div>
  <div class="logout-container">
    <button class="logout-button">Logout</button>
  </div>
</header>
  );
}

// Função de placeholder para o manejo do logout
function handleLogout() {
  console.log('Logout clicked'); // Aqui você faria a lógica de logout
}

export default Header;
