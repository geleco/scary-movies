import React, { useState } from "react";
import './styles/RegisterPage.css';
import logo from './assets/logo.png';
import { Link } from "react-router-dom";
import Header from "./Header";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <><div>
      <Header hideSearchBar={true} showLogout={false} />
    </div>

    <div className="Register_page">
        <img src={logo} alt="Logo" className="Background_logo" />
        <div className="Register_box">

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input className="input_usuario" type="text" placeholder="     Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <input className="input-mail" type="text" placeholder="     E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input className="input_senha" type="password" placeholder="     Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <input className="input_senha" type="password" placeholder="     Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button className="Button_Register" type="submit">Cadastre-se</button>
            <span className="span_register">Já tem uma conta?<Link to="/login">Faça o login</Link></span>
          </form>
        </div>
      </div></>
  );
}

export default RegisterPage;
