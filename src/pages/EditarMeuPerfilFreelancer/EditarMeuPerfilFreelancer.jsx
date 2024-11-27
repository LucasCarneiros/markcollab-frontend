import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos'; // Importando o pop-up de salvar
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o pop-up de sair
import './EditarMeuPerfilFreelancer.css';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';

const EditarMeuPerfilFreelancer = () => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [titulo, setTitulo] = useState('');
  const [principalAtuacao, setPrincipalAtuacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [portfolios, setPortfolios] = useState(null);
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  
  const [showPopUpSalvar, setShowPopUpSalvar] = useState(false); // Estado para controlar a visibilidade do pop-up de salvar
  const [showPopUpSair, setShowPopUpSair] = useState(false); // Estado para controlar a visibilidade do pop-up de sair

  // Função para salvar as alterações e mostrar o pop-up de salvar
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome:', nome);
    console.log('Usuario:', usuario);
    console.log('Título:', titulo);
    console.log('Principal Atuação:', principalAtuacao);
    console.log('Descrição:', descricao);
    console.log('Habilidades:', habilidades);
    console.log('Portfólios:', portfolios);
    console.log('Descrição do Projeto:', descricaoProjeto);

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
      <div className="perfil-container">
        <aside className="perfil-sidebar">
          <nav className="perfil-nav">
            <ul>
              <li>
                <a href="/meu-perfil">Meu Perfil</a>
              </li>
              <li>
                <a href="/editar-perfil">Editar Perfil</a>
              </li>
              <li>
                <a href="/configuracoes">Configurações</a>
              </li>
              <li>
                <a href="#" onClick={handleShowPopUpSair}> {/* Ação para abrir o pop-up de sair */}
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="perfil-main">
          <form className="perfil-form" onSubmit={handleSubmit}>
            <h1 className="perfil-title">Edite seu perfil</h1>
            <div className="perfil-field">
              <label htmlFor="nome">Nome completo:</label>
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
              <label htmlFor="titulo">Título profissional:</label>
              <input
                type="text"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="principalAtuacao">Principal atuação:</label>
              <input
                type="text"
                id="principalAtuacao"
                value={principalAtuacao}
                onChange={(e) => setPrincipalAtuacao(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricao">Escreva sobre você e suas experiências profissionais:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>
            <div className="perfil-field">
              <label htmlFor="habilidades">Selecione as suas principais habilidades:</label>
              <select
                id="habilidades"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="desenvolvimento-web">Desenvolvimento Web</option>
                <option value="design-grafico">Design Gráfico</option>
                <option value="redacao">Redação</option>
                <option value="marketing-digital">Marketing Digital</option>
              </select>
            </div>
            <div className="perfil-field">
              <label htmlFor="portfolios">Portfólio de projetos:</label>
              <input
                type="file"
                id="portfolios"
                onChange={(e) => setPortfolios(e.target.files[0])}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricaoProjeto">Dê uma breve descrição sobre o seu projeto:</label>
              <textarea
                id="descricaoProjeto"
                value={descricaoProjeto}
                onChange={(e) => setDescricaoProjeto(e.target.value)}
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

export default EditarMeuPerfilFreelancer;
