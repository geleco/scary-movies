import React, { useState } from "react";
import './styles/RegisterPage.css';
import logo from './assets/logo.png';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="Register_page">
      <img src={logo} alt="Logo" className="Background_logo" />
      <div className="Register_box">
        <form onSubmit={handleSubmit}>
          <h1> Cadastre-se </h1>
          <span>Usuário<input type="text" placeholder="usuário" value={username} onChange={(e) => setUsername(e.target.value)} /></span>
          <span>Senha<input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} /></span>
          <button type="submit">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
