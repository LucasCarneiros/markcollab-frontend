import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implementar a lógica de login aqui
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        {/* Espaço reservado para conteúdo ou branding */}
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="login-title">Fazer Login</h1>
          <div className="login-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">Login</button>
          <a href="/esqueci-senha" className="login-forgot-password">Esqueci a senha</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
