import React, { useState } from "react";
import Header from "./Header";
import './styles/RegisterPage.css';
import logo from './assets/logo.png';
import { Link } from "react-router-dom";
import { auth, firestore } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const addUser = async (username, email) => {
    try {
      const userRef = collection(firestore, 'users');
      await addDoc(userRef, {
        username,
        email,
      });
    } catch (error) {
      console.error('Erro ao adicionar usuário: ', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem. Por favor, digite novamente.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      // Adicionar o usuário ao Firestore
      await addUser(username, email);

      // Redirecionar para a tela de login ou fazer qualquer outra ação desejada
      // Exemplo de redirecionamento:
      // history.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header hideSearchBar={true} showLogout={false} />
      <div className="Register_page">
        <img src={logo} alt="Logo" className="Background_logo" />
        <div className="Register_box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input className="input_usuario" type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <input className="input-mail" type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <input className="input_senha" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <input className="input_senha" type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {error && <p className="error-message">{error.toString()}</p>}
            <button className="Button_Register" type="submit">Cadastre-se</button>
            <span className="span_register">Já tem uma conta?<Link to="/login">Faça o login</Link></span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
