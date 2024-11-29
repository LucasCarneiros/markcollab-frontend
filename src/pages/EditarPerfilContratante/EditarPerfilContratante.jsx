import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import './EditarPerfilContratante.css';
import { Link } from 'react-router-dom';

const EditarPerfilContratante = () => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [ramo, setRamo] = useState('');
  const [Caracteristicas, setCaracteristicas] = useState('');
  const [descricao, setDescricao] = useState('');
  const [portfolios, setPortfolios] = useState(null);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para salvar as alterações do perfil
    console.log('Nome da empresa:', nome);
    console.log('Usuario:', usuario);
    console.log('Ramo:', ramo);
    console.log('Principal Atuação:', principalAtuacao);
    console.log('Descrição:', descricao);
    console.log('Portfólios:', portfolios);
  };

  return (
    <div>
      <Navbar />
      <div className="perfil-container">
      
        <main className="perfil-main">
          <form className="perfil-form" onSubmit={handleSubmit}>
            <h1 className="perfil-title">Edite seu perfil</h1>
            <div className="perfil-field">
              <label htmlFor="nome">Nome da Empresa:</label>
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
              <label htmlFor="ramo">Ramo profissional:</label>
              <input
                type="text"
                id="ramo"
                value={ramo}
                onChange={(e) => setRamo(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="Caracteristicas">Características que você procura em um profissional:</label>
              <input
                type="text"
                id="Caracteristicas"
                value={Caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricao">Explique um pouco sobre a empresa:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>
            <div className="perfil-field">
              <label htmlFor="portfolios">Portfólio de projetos:</label>
              <input
                type="file"
                id="portfolios"
                onChange={(e) => setPortfolios(e.target.files[0])}
              />
            </div>
            <button className="perfil-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EditarPerfilContratante;
