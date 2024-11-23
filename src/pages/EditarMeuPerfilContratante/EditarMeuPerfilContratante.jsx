import React, { useState } from 'react';
import './EditarMeuPerfilContratante.css';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const EditarMeuPerfilContratante = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [usuario, setUsuario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tituloProfissional, setTituloProfissional] = useState('');
  const [ramoEmpresa, setRamoEmpresa] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    console.log('Nome da Empresa:', nomeEmpresa);
    console.log('Nome:', nome);
    console.log('Descrição:', descricao);
    console.log('Título Profissional:', tituloProfissional);
    console.log('Ramo da Empresa:', ramoEmpresa);
    console.log('Características:', caracteristicas);
  };

  return (
    <div>
      <Navbar />
      <div className="perfil-container">
        <aside className="perfil-sidebar">
          <nav className="perfil-nav">
            <ul>
              <li>
                <a href="/meu-perfil">
                  <FaUser className="perfil-icon" />
                  Meu Perfil
                </a>
              </li>
              <li>
                <a href="/editar-perfil">
                  <FaEdit className="perfil-icon" />
                  Editar Perfil
                </a>
              </li>
              <li>
                <a href="/configuracoes">
                  <FaCog className="perfil-icon" />
                  Configurações
                </a>
              </li>
              <li>
                <a href="/sair">
                  <FaSignOutAlt className="perfil-icon" />
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="perfil-main">
          <form className="perfil-form" onSubmit={handleSave}>
            <h1 className="perfil-title">Edite seu perfil</h1>
            <div className="perfil-field">
              <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
              <input
                type="text"
                id="nomeEmpresa"
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="Nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricao">Explique um pouco sobre a sua empresa:</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>
            <div className="perfil-field">
              <label htmlFor="tituloProfissional">Título Profissional:</label>
              <input
                type="text"
                id="tituloProfissional"
                value={tituloProfissional}
                onChange={(e) => setTituloProfissional(e.target.value)}
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="ramoEmpresa">Ramo da Empresa:</label>
              <select
                id="ramoEmpresa"
                value={ramoEmpresa}
                onChange={(e) => setRamoEmpresa(e.target.value)}
              >
                <option value="Tecnologia">Tecnologia</option>
                <option value="Finanças">Finanças</option>
                <option value="Educação">Educação</option>
              </select>
            </div>
            <div className="perfil-field">
              <label htmlFor="caracteristicas">Características que você procura em um profissional:</label>
              <textarea
                id="caracteristicas"
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
              ></textarea>
            </div>
            <button className="perfil-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EditarMeuPerfilContratante;
