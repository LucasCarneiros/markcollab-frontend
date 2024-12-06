import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importa o Axios
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './PublicacaoProjetoContratante.css';

const PublicacaoProjetoContratante = () => {
  const navigate = useNavigate();
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [descricaoProjeto, setDescricaoProjeto] = useState('');
  const [especificacao, setEspecificacao] = useState('');
  const [preco, setPreco] = useState('');
  const [employerCpf] = useState('98765432110'); // CPF mockado

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Remover a autenticação (sem necessidade de token)
    try {
      const payload = {
        projectTitle: nomeProjeto,
        projectDescription: descricaoProjeto,
        projectSpecifications: especificacao,
        projectPrice: parseFloat(preco), // Certifique-se de que o preço seja um número
      };

      // Usando o CPF mockado (98765432110)
      const response = await axios.post(
        `https://markcollab-backend.onrender.com/api/projects/${employerCpf}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Projeto criado com sucesso:', response.data);
      alert('Projeto publicado com sucesso!');

      // Navega para a tela de ProjetoPublicadoContratante
      navigate('/ProjetoPublicadoContratante');
    } catch (error) {
      console.error('Erro ao criar o projeto:', error);
      alert('Erro ao criar o projeto. Verifique os dados e tente novamente.');
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
          <h1 className="publicacao-title">Publicação de Projeto</h1>
        </header>
        <form className="publicacao-form" onSubmit={handleSubmit}>
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
          <div className="publicacao-field">
            <label htmlFor="employerCpf">CPF do empregador:</label>
            <input
              type="text"
              id="employerCpf"
              value={employerCpf}
              onChange={(e) => setEmployerCpf(e.target.value)}
              disabled // Campo desabilitado pois o CPF está mockado
            />
          </div>
          <button className="publicacao-button" type="submit">
            Publicar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PublicacaoProjetoContratante;