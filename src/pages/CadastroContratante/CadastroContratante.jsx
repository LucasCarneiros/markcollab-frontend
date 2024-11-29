import React, { useState } from 'react';
import './CadastroContratante.css';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate(); // Hook para navegação

  const handleCadastro = (event) => {
    event.preventDefault();

    // Simular lógica de cadastro ou validação (se necessário)
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);

    // Redirecionar para a tela "AreaContratante" após o cadastro
    navigate('/AreaContratante');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        {/* Espaço reservado para conteúdo ou branding */}
      </div>
      <div className="cadastro-right">
        <form className="cadastro-form" onSubmit={handleCadastro}>
          <h1 className="cadastro-title">Cadastre-se</h1>
          <div className="cadastro-field">
            <label htmlFor="nome">Nome da Empresa:</label>
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
          <button className="cadastro-button" type="submit">
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
