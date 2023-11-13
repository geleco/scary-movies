import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./styles/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header({ hideSearchBar, showLogout = true }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/?search=${searchTerm}`);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Registro</Link>
      </nav>
      <div className="search-container" style={{ display: hideSearchBar ? 'none' : 'block' }}>
      <form onSubmit={handleSearchSubmit} className="search-form">
    <input
        type="text"
        className="search-input"
        placeholder="Pesquise um filme de terror"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type="submit" className="search-button">Pesquisar</button>
</form>

      </div>
      {showLogout && (
        <div className="logout-container">
          <button className="nav-link" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
