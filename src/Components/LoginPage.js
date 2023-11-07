import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import './styles/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submit logic
    console.log(username, password);
  };

  return (
    <div className="Login_page">
      <img src={logo} alt="Logo" className="Background_logo" />
      <div className="Login_box">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <span>Usuário<input type="text" placeholder="usuário" value={username} onChange={(e) => setUsername(e.target.value)} /></span>
          <span>Senha<input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} /></span>
          <Link to="/register">Cadastre-se</Link>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
