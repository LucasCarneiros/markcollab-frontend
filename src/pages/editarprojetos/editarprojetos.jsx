import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './editarprojetos.css';

const Editarprojetos = () => {
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [especificacao, setEspecificacao] = useState('');
  const [preco, setPreco] = useState('');
  const [projectId, setProjectId] = useState(''); // Novo campo para o ID do projeto
  const [status, setStatus] = useState(''); // Campo para o novo status do projeto
  const [employerCpf] = useState('98765432110'); // CPF mockado

  const handleEditProject = async (event) => {
    event.preventDefault();

    try {
      const payload = {
        projectTitle: nomeProjeto,
        projectDescription: descricaoProjeto,
        projectSpecifications: especificacao,
        projectPrice: parseFloat(preco),
      };

      // Faz a requisição para editar o projeto
      const response = await axios.put(
        `https://markcollab-backend.onrender.com/api/projects/${projectId}/${employerCpf}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Projeto atualizado com sucesso:', response.data);
      alert('Projeto atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o projeto:', error);
      alert('Erro ao atualizar o projeto. Verifique os dados e tente novamente.');
    }
  };

  const handleUpdateStatus = async () => {
    try {
      const response = await axios.put(
        `https://markcollab-backend.onrender.com/api/projects/${projectId}/status/${employerCpf}`,
        status, // Envia o novo status diretamente no corpo
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Status atualizado com sucesso:', response.data);
      alert('Status atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar o status:', error);
      alert('Erro ao atualizar o status. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <Navbar />
      <a href="/meusprojetoscontratante" className="meusprojetos-button">
        Ir para os meus projetos publicados
      </a>
      <div className="publicacao-container">
        <header className="publicacao-header">
          <h1 className="publicacao-title">Editar projeto:</h1>
        </header>
        <form className="publicacao-form" onSubmit={handleEditProject}>
          <div className="publicacao-field">
            <label htmlFor="projectId">ID do projeto:</label>
            <input
              type="text"
              id="projectId"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="nomeProjeto">Nome do projeto:</label>
            <input
              type="text"
              id="nomeProjeto"
              value={nomeProjeto}
              onChange={(e) => setNomeProjeto(e.target.value)}
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="descricaoProjeto">Descrição do projeto:</label>
            <textarea
              id="descricaoProjeto"
              value={descricaoProjeto}
              onChange={(e) => setDescricaoProjeto(e.target.value)}
            ></textarea>
          </div>
          <div className="publicacao-field">
            <label htmlFor="especificacao">Especificações do projeto:</label>
            <input
              type="text"
              id="especificacao"
              value={especificacao}
              onChange={(e) => setEspecificacao(e.target.value)}
            />
          </div>
          <div className="publicacao-field">
            <label htmlFor="preco">Preço:</label>
            <input
              type="text"
              id="preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <button className="publicacao-button" type="submit">
            Atualizar Projeto
          </button>
        </form>
        <div className="status-update">
          <label htmlFor="status">Atualizar Status do Projeto:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Selecione um status</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
          <button onClick={handleUpdateStatus}>Atualizar Status</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editarprojetos;
