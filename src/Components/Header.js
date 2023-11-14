import React, { useState, useContext } from "react";
import logo from "./assets/logo.png";
import "./styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import FontSizeContext from './FontSizeContext'; // Importe o FontSizeContext

function Header({ hideSearchBar, showLogout = true, hideNavLinks = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { increaseFontSize } = useContext(FontSizeContext); // Utilize o contexto de tamanho da fonte

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/home?search=${searchTerm}`);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>
      
      {!hideNavLinks && (
        <nav className={isMenuOpen ? 'nav-active' : ''}>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Registro</Link>
        </nav>
      )}

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
          <Link to='/'>
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      )}

      {/* Botão para aumentar o tamanho da fonte */}
      <button onClick={increaseFontSize}>Aumentar Fonte</button>
    </header>
  );
}

export default Header;
