import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './VisualizacaoMeusProjetosContratante.css';

const VisualizacaoMeusProjetosContratante = () => {
  return (
    <div>
      <Navbar />
      <div className="visualizacao-container">
        <header className="visualizacao-header">
          <a href="/meus-projetos-contratante" className="visualizacao-backlink">Voltar para todos os projetos</a>
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
          <h2 className="visualizacao-proposals-title">Propostas</h2>
          <select className="visualizacao-filter">
            <option value="">Filtrar propostas</option>
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
                <button className="visualizacao-action-button">Mensagem</button>
                <button className="visualizacao-action-button">Aceitar</button>
                <button className="visualizacao-action-button">Recusar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisualizacaoMeusProjetosContratante;

