import React from "react";
import './styles/LoginPage.css';
import logo from './assets/logo.png'; 
 function LoginPage () {
    return (
<div class="Login_page">
<img src={logo} alt="Logo" className="Background_logo"/>
<div class="Login_box">
<h1> Log in </h1>
<span>Usuário<input type="text" placeholder="usuário"/> </span>
<span>Senha<input type="password" placeholder="senha"/></span>
<h4>cadastre-se</h4>
<button>Entrar</button>
</div>

</div>
    );

 }
 export default LoginPage