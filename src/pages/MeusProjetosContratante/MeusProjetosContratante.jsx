import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import './MeusProjetosContratante.css';

const MeusProjetosContratante = () => {
  const [status, setStatus] = useState('');
  const [projects, setProjects] = useState([]);
  const employerCpf = '98765432110'; // Substitua com o CPF do empregador logado (use um contexto de autenticação, se aplicável)
  const navigate = useNavigate();

  // Carregar os projetos publicados pelo empregador
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://markcollab-backend.onrender.com/api/projects/employer/${employerCpf}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setProjects(response.data); // Atualiza os projetos com os dados recebidos do backend
      } catch (error) {
        console.error('Erro ao carregar projetos:', error.response || error.message);
        alert(
          `Erro ao carregar projetos: ${
            error.response?.data?.message || error.message || 'Erro desconhecido'
          }`
        );
      }
    };

    fetchProjects();
  }, [employerCpf]); // Executa ao montar o componente ou se o CPF mudar

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAnalyzeProposals = () => {
    navigate('/VisualizacaoMeusProjetosContratante');
  };

  const handleDeleteProject = async (projectId, employerCpf) => {
    const confirmDelete = window.confirm('Tem certeza de que deseja excluir este projeto?');
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://markcollab-backend.onrender.com/api/projects/${projectId}/${employerCpf}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Projeto excluído com sucesso!');
      setProjects(projects.filter((project) => project.projectId !== projectId));
    } catch (error) {
      console.error('Erro ao excluir o projeto:', error.response || error.message);
      alert(
        `Erro ao excluir o projeto: ${
          error.response?.data?.message || error.message || 'Erro desconhecido'
        }`
      );
    }
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
                    onClick={() => handleDeleteProject(project.projectId, employerCpf)}
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