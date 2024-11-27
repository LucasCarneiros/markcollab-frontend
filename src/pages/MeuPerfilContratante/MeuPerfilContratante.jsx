import React, { useState } from 'react';
import './MeuPerfilContratante.css';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos'; // Importando o pop-up de salvar
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o pop-up de sair

const MeuPerfilContratante = () => {
  const [nome, setNome] = useState('Joao da Silva');
  const [email, setEmail] = useState('joao@example.com');
  const [telefone, setTelefone] = useState('(11) 99999-9999');
  const [descricao, setDescricao] = useState('Descrição breve sobre o contratante.');
  
  const [showPopUpSalvar, setShowPopUpSalvar] = useState(false); // Estado para controlar a visibilidade do pop-up de salvar
  const [showPopUpSair, setShowPopUpSair] = useState(false); // Estado para controlar a visibilidade do pop-up de sair

  const handleSave = (event) => {
    event.preventDefault();
    // Log para confirmar os dados salvos
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Descrição:', descricao);

    // Exibir o pop-up de salvar após a ação
    setShowPopUpSalvar(true);
  };

  // Função para exibir o pop-up de sair
  const handleShowPopUpSair = () => {
    setShowPopUpSair(true); // Exibe o pop-up de sair
  };

  // Função para fechar o pop-up de salvar
  const handleClosePopUpSalvar = () => {
    setShowPopUpSalvar(false);
  };

  // Função para fechar o pop-up de sair
  const handleClosePopUpSair = () => {
    setShowPopUpSair(false);
  };

  return (
    <div>
      <Navbar />
      <div className="perfil-container">
        <aside className="perfil-sidebar">
          <nav className="perfil-nav">
            <ul>
              <li>
                <a href="/meu-perfil">
                  <FaUser className="perfil-icon" />
                  Meu Perfil
                </a>
              </li>
              <li>
                <a href="/editar-perfil">
                  <FaEdit className="perfil-icon" />
                  Editar Perfil
                </a>
              </li>
              <li>
                <a href="/configuracoes">
                  <FaCog className="perfil-icon" />
                  Configurações
                </a>
              </li>
              <li>
                <a href="#" onClick={handleShowPopUpSair}> {/* Ação para abrir o pop-up de sair */}
                  <FaSignOutAlt className="perfil-icon" />
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="perfil-main">
          <form className="perfil-form" onSubmit={handleSave}>
            <h1 className="perfil-title">Meu Perfil</h1>
            <div className="perfil-field">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricao">Descrição:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>
            <button className="perfil-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      <Footer />
      
      {/* Mostrar o pop-up de salvar se o estado 'showPopUpSalvar' for verdadeiro */}
      {showPopUpSalvar && <PopUpSalvarInfos onClose={handleClosePopUpSalvar} />}

      {/* Mostrar o pop-up de sair se o estado 'showPopUpSair' for verdadeiro */}
      {showPopUpSair && <PopUpSairDaConta onClose={handleClosePopUpSair} />}
    </div>
  );
};

export default MeuPerfilContratante;
