import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import PopUpAceitarProposta from '../../components/PopUpAceitarProposta/PopUpAceitarProposta'; // PopUpAceitarProposta
import PopUpRejeitarProposta from '../../components/PopUpRejeitarProposta/PopUpRejeitarProposta'; // Importando o PopUpRejeitarProposta
import { Link } from 'react-router-dom'; // Importando o Link do React Router
import './VisualizacaoMeusProjetosContratante.css';

const VisualizacaoMeusProjetosContratante = () => {
  const [isPopUpAceitarVisible, setPopUpAceitarVisible] = useState(false); // Estado para o pop-up de aceitar
  const [isPopUpRejeitarVisible, setPopUpRejeitarVisible] = useState(false); // Estado para o pop-up de rejeitar

  // Função para abrir o pop-up de aceitar proposta
  const handleAcceptProposal = () => {
    setPopUpAceitarVisible(true);
  };

  // Função para fechar o pop-up (quando clica fora dele)
  const handleClosePopUpAceitar = () => {
    setPopUpAceitarVisible(false);
  };

  // Função para abrir o pop-up de rejeitar proposta
  const handleRejectProposal = () => {
    setPopUpRejeitarVisible(true);
  };

  // Função para fechar o pop-up de rejeitar
  const handleClosePopUpRejeitar = () => {
    setPopUpRejeitarVisible(false);
  };

  return (
    <div>
      <Navbar />
      <div className="visualizacao-container">
        <header className="visualizacao-header">
          <Link to="/meusprojetoscontratante" className="visualizacao-backlink">
            Voltar para todos os projetos
          </Link>
          <h1 className="visualizacao-title">Visualização do Projeto</h1>
        </header>
        <div className="visualizacao-details">
          <h2 className="visualizacao-project-title">Nome_do_projeto</h2>
          <p className="visualizacao-project-date">Publicado em 22/7/2015</p>
          <p className="visualizacao-project-description">
            Descrição do projeto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="visualizacao-skills">
            <button className="visualizacao-skill-button">JavaScript</button>
            <button className="visualizacao-skill-button">Java</button>
            <button className="visualizacao-skill-button">HTML/CSS</button>
            <button className="visualizacao-skill-button">SpringBoot</button>
          </div>
        </div>
        <div className="visualizacao-proposals">
          <h2 className="visualizacao-proposals-title">Interessados</h2>
          <select className="visualizacao-filter">
            <option value="">Filtrar perfis</option>
            <option value="recentes">Mais recentes</option>
            <option value="antigas">Mais antigas</option>
            <option value="melhores-avaliadas">Melhores avaliadas</option>
          </select>
          {[1].map((proposal) => (
            <div key={proposal} className="visualizacao-proposal">
              <div className="visualizacao-proposal-header">
                <img src="/path/to/profile-pic.jpg" alt="Freelancer Profile" className="visualizacao-profile-pic" />
                <h3 className="visualizacao-freelancer-name">Nome_do_Freelancer</h3>
                <div className="visualizacao-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="visualizacao-proposal-description">
                Proposta: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="visualizacao-proposal-actions">
                <button className="visualizacao-action-button">Ver Perfil</button>
                <button className="visualizacao-action-button" onClick={handleAcceptProposal}>Contratar</button> {/* Botão "Aceitar" */}
                <button className="visualizacao-action-button" onClick={handleRejectProposal}>Recusar</button> {/* Botão "Recusar" */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* Pop-up para mostrar quando aceitar a proposta */}
      {isPopUpAceitarVisible && <PopUpAceitarProposta onClose={handleClosePopUpAceitar} />} {/* Usando o pop-up de aceitar */}

      {/* Pop-up para mostrar quando recusar a proposta */}
      {isPopUpRejeitarVisible && <PopUpRejeitarProposta onClose={handleClosePopUpRejeitar} />} {/* Usando o pop-up de rejeitar */}
    </div>
  );
};

export default VisualizacaoMeusProjetosContratante;
