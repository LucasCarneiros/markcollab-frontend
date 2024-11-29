import React, { useState } from 'react';
import './CadastroContratante.css';
import { Link, useNavigate } from 'react-router-dom'; // Importando o useNavigate

const CadastroContratante = () => {
  const navigate = useNavigate(); // Hook para navegação
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (event) => {
    event.preventDefault();
    // Implementar a lógica de cadastro aqui, se necessário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);

    // Após o cadastro, redirecionar para a tela de HomeFreelancer
    navigate('/HomeContratante');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        {/* Espaço reservado para conteúdo ou branding */}
        <Link to="/" className="login-arrow" style={{ cursor: "pointer" }}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 59 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.918 43.0015L34.2157 23.7779L54.918 4.55435"
              stroke="white"
              strokeWidth="5.51686"
              strokeLinecap="square"
            />
            <path
              d="M25.3359 43.0015L4.63364 23.7779L25.3359 4.55435"
              stroke="white"
              strokeWidth="5.51686"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
      <div className="cadastro-right">
        <form className="cadastro-form" onSubmit={handleCadastro}>
          <h1 className="cadastro-title">Cadastre-se</h1>
          <div className="cadastro-field">
            <label htmlFor="nome">Nome da empresa:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="email">Email Corporativo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button 
            className="cadastro-button" 
            type="submit" // Botão agora é de submit
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroContratante;
