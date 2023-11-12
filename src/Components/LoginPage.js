import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import logo from './assets/logo.png';
import './styles/LoginPage.css';
import Header from "./Header";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Novo estado para a mensagem de sucesso
  const [FailMessage, setFailMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      console.log(userCredential.user);

     
      setSuccessMessage("Login bem-sucedido! Redirecionando para a Homepage...");
     setTimeout(() => {
        navigate("/");
      }, 2000); 
    } catch (error) {
      console.error('Erro de autenticação:', error.message);
      setFailMessage("Você não possue conta, registre-se");
      setTimeout(() => {
        setFailMessage("");}, 2000);
    }
  };

  return (
    <>
      <div>
        <Header hideSearchBar={true} showLogout={false} />
      </div>
      <div className="Login_page">
        <img src={logo} alt="Logo" className="Background_logo" />
        <div className="Login_box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Usuário" className="input_usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Senha" className="input_senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="button_login">Entrar</button>
            <span className="span_login">Não tem uma conta?<Link to="/register">Registre-se</Link></span>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {FailMessage && <p class name="fail-message">{FailMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
