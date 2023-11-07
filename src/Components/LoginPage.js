import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import './styles/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="Login_page">
      <img src={logo} alt="Logo" className="Background_logo" />
      <div className="Login_box">
      <h1>Log in</h1>
       <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="usuário" className="input_usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="senha" className="input_senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="button_login">Entrar</button> 
          <p>ou</p><br/>
          <Link to="/register">Cadastre-se</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
