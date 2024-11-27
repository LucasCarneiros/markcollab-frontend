import React, { useState } from 'react';
import './Cadastro.css';
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
