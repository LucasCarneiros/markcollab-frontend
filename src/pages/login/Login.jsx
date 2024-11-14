import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">

      <div className="login-blue-side"></div>
      <div className="login-white-side">
        <h2 className="login-title">Fazer Login</h2>
        <form className="login-form">
          <input className="login-input" type="email" placeholder="Email" required />
          <input className="login-input" type="password" placeholder="Senha" required />
          <button className="login-button" type="submit">Login</button>
        </form>
        <a className="login-link" href="/recuperar-senha">Esqueci a senha</a>
      </div>
    </div>
  );
}

export default Login;
