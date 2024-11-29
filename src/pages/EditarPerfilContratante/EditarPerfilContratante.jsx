import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './EditarPerfilContratante.css';
import { Link } from 'react-router-dom';
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos'; // Importando o pop-up de salvar
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o pop-up de sair

const EditarPerfilContratante = () => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [ramo, setRamo] = useState('');
  const [caracteristicas, setCaracteristicas] = useState(''); // Corrigido: nome do estado
  const [descricao, setDescricao] = useState('');
  const [portfolios, setPortfolios] = useState(null);

  const [showPopUpSalvar, setShowPopUpSalvar] = useState(false); // Estado para controlar a visibilidade do pop-up de salvar
  const [showPopUpSair, setShowPopUpSair] = useState(false); // Estado para controlar a visibilidade do pop-up de sair

  // Função para envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para salvar as alterações do perfil
    console.log('Nome da empresa:', nome);
    console.log('Usuário:', usuario);
    console.log('Ramo:', ramo);
    console.log('Características:', caracteristicas); // Corrigido: estado correto
    console.log('Descrição:', descricao);
    console.log('Portfólios:', portfolios);

    // Mostrar o pop-up após o envio do formulário
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
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/PerfilContratante">Meu Perfil</Link>
          </li>
          {/* Link para Editar Perfil */}
          <li>
            <Link to="/EditarPerfilContratante">Editar Perfil</Link>
          </li>
          {/* Link para Configurações */}
          <li>
            <Link to="/ConfiguracaoMeuPerfilContratante">Configurações</Link>
          </li>
          {/* Link "Sair" que agora abre o pop-up */}
          <li>
            <Link to="#" onClick={handleShowPopUpSair}>Sair</Link>
          </li>
        </ul>
      </nav>
      <div className="perfil-container">
        <main className="perfil-main">
          <form className="perfil-form" onSubmit={handleSubmit}>
            <h1 className="perfil-title">Edite seu perfil</h1>
            <div className="perfil-field">
              <label htmlFor="nome">Nome da Empresa:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="usuario">Usuário:</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="ramo">Ramo profissional:</label>
              <input
                type="text"
                id="ramo"
                value={ramo}
                onChange={(e) => setRamo(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="caracteristicas">
                Características que você procura em um profissional:
              </label>
              <input
                type="text"
                id="caracteristicas"
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricao">Explique um pouco sobre a empresa:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>
            <div className="perfil-field">
              <label htmlFor="portfolios">Portfólio de projetos:</label>
              <input
                type="file"
                id="portfolios"
                onChange={(e) => setPortfolios(e.target.files[0])}
              />
            </div>
            <button className="perfil-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      {showPopUpSalvar && (
        <PopUpSalvarInfos onClose={handleClosePopUpSalvar} />
      )}
      {showPopUpSair && (
        <PopUpSairDaConta onClose={handleClosePopUpSair} />
      )}
      <Footer />
    </div>
  );
};

export default EditarPerfilContratante;
