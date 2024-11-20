import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">

      <div className="login-blue-side">
        <svg className="login-arrow" width="30" height="30" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.918 43.0015L34.2157 23.7779L54.918 4.55435" stroke="white" stroke-width="5.51686" stroke-linecap="square"/>
        <path d="M25.3359 43.0015L4.63364 23.7779L25.3359 4.55435" stroke="white" stroke-width="5.51686" stroke-linecap="square"/>
        </svg>
      </div>
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
