import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import './MeusProjetosFreelancer.css';

const MeusProjetosFreelancer = () => {
  const [status, setStatus] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="meusprojetosfreelancer-container">
        <header className="meusprojetosfreelancer-header">
          <h1 className="meusprojetosfreelancer-title">Meus Projetos Freelancer</h1>
        </header>
        <div className="meusprojetosfreelancer-controls">
          <select
            className="meusprojetosfreelancer-status"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Selecione um status</option>
            <option value="concluido">Concluído</option>
            <option value="em-progresso">Em progresso</option>
            <option value="analisando">Analisando propostas</option>
          </select>
          <button className="meusprojetosfreelancer-button">
          Encontrar Trabalhos
          </button>
        </div>
        <div className="meusprojetosfreelancer-list">
          {[1, 2, 3].map((project) => (
            <div key={project} className="meusprojetosfreelancer-item">
              <h2 className="meusprojetosfreelancer-item-title">Nome do projeto</h2>
              <p className="meusprojetosfreelancer-item-time">Publicado há 42 minutos</p>
              <button className="meusprojetosfreelancer-item-button">Concluído</button>
              <div className="meusprojetosfreelancer-item-options">
                <button className="meusprojetosfreelancer-item-option">Editar projeto</button>
                <button className="meusprojetosfreelancer-item-option">Cancelar projeto</button>
                <button className="meusprojetosfreelancer-item-option">Postar novamente</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeusProjetosFreelancer;
