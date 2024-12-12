import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://markcollab-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Armazena o token no localStorage
        localStorage.setItem("authToken", data.token);

        // Atualiza o estado de login
        setIsLoggedIn(true); // <- Isso é importante

        // Navega para a página inicial do freelancer
        navigate("/");
      } else {
        alert("Erro: Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="login-container">
   
      <div className="login-left">
        {/* Espaço reservado para conteúdo ou branding */}
        <Link to="/" className="login-arrow" style={{ cursor: "pointer" }}>
  <svg width="30" height="30" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.918 43.0015L34.2157 23.7779L54.918 4.55435" stroke="white" stroke-width="5.51686" stroke-linecap="square"/>
    <path d="M25.3359 43.0015L4.63364 23.7779L25.3359 4.55435" stroke="white" stroke-width="5.51686" stroke-linecap="square"/>
  </svg>
</Link>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="login-title">Fazer Login</h1>
          <div className="login-field">
            <label htmlFor="">Username:</label>
            <input
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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