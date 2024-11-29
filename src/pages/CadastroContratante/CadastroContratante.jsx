import React, { useState } from 'react';
import './CadastroContratante.css';
import { Link } from 'react-router-dom';
import PopUpCadastro from '../../components/PopUpCadastro/PopUpCadastro'; // Caminho corrigido para o PopUpCadastro

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do pop-up
  const [selectedRole, setSelectedRole] = useState(''); // Estado para armazenar o papel selecionado

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para quando o usuário escolher Freelancer
  const handleFreelancer = () => {
    setSelectedRole('Freelancer');
    closeModal(); // Fecha o pop-up após a escolha
  };

  // Função para quando o usuário escolher Contratante
  const handleContratante = () => {
    setSelectedRole('Contratante');
    closeModal(); // Fecha o pop-up após a escolha
  };

  const handleCadastro = (event) => {
    event.preventDefault();
    // Implementar a lógica de cadastro aqui
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);
    console.log('Papel:', selectedRole); // Exibindo o papel escolhido
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        {/* Espaço reservado para conteúdo ou branding */}
        <Link to="/" className="login-arrow" style={{ cursor: "pointer" }}>
  <svg width="30" height="30" viewBox="0 0 59 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.918 43.0015L34.2157 23.7779L54.918 4.55435" stroke="white" stroke-width="5.51686" stroke-linecap="square"/>
    <path d="M25.3359 43.0015L4.63364 23.7779L25.3359 4.55435" stroke="white" stroke-width="5.51686" stroke-linecap="square"/>
  </svg>
</Link>
      </div>
      <div className="cadastro-right">
        <form className="cadastro-form" onSubmit={handleCadastro}>
          <h1 className="cadastro-title">Cadastre-se</h1>
          <div className="cadastro-field">
            <label htmlFor="nome">Nome completo:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="cadastro-field">
            <label htmlFor="email">Email:</label>
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
            type="button" // Alterado para "button" para abrir o pop-up
            onClick={openModal} // Abre o pop-up ao clicar
          >
            Criar Conta
          </button>
        </form>
      </div>

      {/* Importando o PopUpCadastro e passando as props */}
      <PopUpCadastro
        isOpen={isModalOpen}
        onClose={closeModal}
        onFreelancer={handleFreelancer}
        onContratante={handleContratante}
      />
    </div>
  );
};

export default Cadastro;
