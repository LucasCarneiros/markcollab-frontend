import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate, Link } from 'react-router-dom';

import './MeusProjetosContratante.css';

const MeusProjetosContratante = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  // Projetos estáticos para exibição
  const projects = [
    {
      projectId: 1,
      projectTitle: 'Projeto de Marketing Digital',
      projectDescription: 'Criação de uma estratégia de marketing digital para aumentar engajamento.',
    },
    {
      projectId: 2,
      projectTitle: 'Desenvolvimento de Website',
      projectDescription: 'Desenvolvimento de um site institucional responsivo.',
    },
    {
      projectId: 3,
      projectTitle: 'Campanha Publicitária',
      projectDescription: 'Elaboração de uma campanha para lançamento de produto.',
    },
  ];

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAnalyzeProposals = () => {
    navigate('/VisualizacaoMeusProjetosContratante');
  };

  const handleDeleteProject = (projectId) => {
    const confirmDelete = window.confirm('Tem certeza de que deseja excluir este projeto?');
    if (!confirmDelete) return;

    alert(`Projeto com ID ${projectId} excluído! `);
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
        </div>
        <div className="meusprojetoscontratante-list">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.projectId} className="meusprojetoscontratante-item">
                <h2 className="meusprojetoscontratante-item-title">{project.projectTitle}</h2>
                <p className="meusprojetoscontratante-item-time">
                  {project.projectDescription}
                </p>
                <button
                  className="meusprojetoscontratante-item-button"
                  onClick={handleAnalyzeProposals}
                >
                  Ver interessados
                </button>
                <div className="meusprojetoscontratante-item-options">
                  <Link to="/editarprojetos" className="meusprojetoscontratante-items">
                    Editar projeto
                  </Link>
                  <button
                    className="meusprojetoscontratante-item-option"
                    onClick={() => handleDeleteProject(project.projectId)}
                  >
                    Excluir projeto
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum projeto encontrado.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeusProjetosContratante;
