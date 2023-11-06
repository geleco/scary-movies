import React from "react";
import './styles/RegisterPage.css';
import logo from './assets/logo.png'; 

 function RegisterPage () {
    return (

<div class="Register_page">
<img src={logo} alt="Logo" className="Background_logo"/>
<div class="Register_box">
<h1> Cadastre-se </h1>
<span>Usuário<input type="text" placeholder="usuário"/> </span>
<span>Senha<input type="password" placeholder="senha"/></span>
<button>Cadastre-se</button>
</div>
</div>
    );

 }
 export default RegisterPage