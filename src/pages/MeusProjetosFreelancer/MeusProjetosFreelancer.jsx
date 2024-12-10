import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './MeusProjetosFreelancer.css';

const MeusProjetosFreelancer = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // Função para navegação
  const encontrarTrabalhos = () => {
    navigate('/BuscarProjetosFreelancerPrincipal');
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
          
          {/* Botão que usa a navegação */}
          <button
            className="meusprojetosfreelancer-button"
            onClick={encontrarTrabalhos}
          >
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
