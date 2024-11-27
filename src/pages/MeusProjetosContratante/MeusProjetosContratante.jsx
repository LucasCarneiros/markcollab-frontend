import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './MeusProjetosContratante.css';

const MeusProjetosContratante = () => {
  const [status, setStatus] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="meusprojetoscontratante-container">
        <header className="meusprojetoscontratante-header">
          <h1 className="meusprojetoscontratante-title">Meus Projetos</h1>
        </header>
        <div className="meusprojetoscontratante-controls">
          <select
            className="meusprojetoscontratante-status"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Selecione um status</option>
            <option value="analisando">Analisar propostas</option>
            <option value="em-progresso">Em progresso</option>
            <option value="concluido">Concluído</option>
          </select>
          <button className="meusprojetoscontratante-button">
            Encontrar Freelancers
          </button>
        </div>
        <div className="meusprojetoscontratante-list">
          {[1, 2, 3].map((project) => (
            <div key={project} className="meusprojetoscontratante-item">
              <h2 className="meusprojetoscontratante-item-title">Nome do projeto</h2>
              <p className="meusprojetoscontratante-item-time">Publicado há 42 minutos</p>
              <button className="meusprojetoscontratante-item-button">Analisar propostas</button>
              <div className="meusprojetoscontratante-item-options">
                <button className="meusprojetoscontratante-item-option">Editar projeto</button>
                <button className="meusprojetoscontratante-item-option">Cancelar projeto</button>
                <button className="meusprojetoscontratante-item-option">Postar novamente</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeusProjetosContratante;
