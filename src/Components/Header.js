import React from "react";
import logo from "./assets/logo.png";
import "./styles/Header.css";
import { Link } from "react-router-dom";

function Header({ hideSearchBar, showLogout = true }) { // Define o valor padrão de showLogout como true
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link> <Link to="/login" className="nav-link">Login</Link>{" "}
        <Link to="/register" className="nav-link">Registro</Link>
      </nav>
      <div className="search-container" style={{ display: hideSearchBar ? 'none' : 'block' }}>
        <input
          type="text"
          className="search-input"
          placeholder="Adicione um filme de terror"
        />
      </div>
      {showLogout && ( // Usa a propriedade showLogout para controlar a visibilidade do botão de logout
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
