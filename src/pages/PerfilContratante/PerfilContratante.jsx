import React, { useState } from 'react';
import Navbar from '../../components/navbar3/navbar3';
import Footer from '../../components/footer/Footer';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import './PerfilContratante.css';

function PerfilContratante() {
  return (
    <div>
      <Navbar />
      
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#perfil">Perfil</a>
          </li>
          <li>
            <a href="#sobre-mim">Sobre Mim</a>
          </li>
          <li>
            <a href="#portifolio">Portfólio</a>
          </li>
          <li>
            <a href="#avaliacoes">Avaliações</a>
          </li>
        </ul>
      </nav>

      {/* Conteúdo da página */}
      <div className="conteudo">
        {/* Header Perfil */}
        <header id="perfil" className="header-perfil">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto do freelancer"
            className="perfil-foto"
          />
          <div>
            <h1>Nome_do_freelancer</h1>
            <p>Freelancer experiente em Programação e tecnologia</p>
            <div className="habilidades">
              <span className="habilidade">Javascript</span>
              <span className="habilidade">Java</span>
              <span className="habilidade">HTML</span>
              <span className="habilidade">SpringBoot</span>
            </div>
          </div>
        </header>
        <aside className="configuracao-sidebar">
          <nav className="configuracao-nav">
            <ul>
              <li>
                <a href="/meu-perfil">
                  <FaUser className="configuracao-icon" />
                  Meu Perfil
                </a>
              </li>
              <li>
                <a href="/editar-perfil">
                  <FaEdit className="configuracao-icon" />
                  Editar Perfil
                </a>
              </li>
              <li>
                <a href="/configuracoes">
                  <FaCog className="configuracao-icon" />
                  Configurações
                </a>
              </li>
              <li>
                <a href="/sair">
                  <FaSignOutAlt className="configuracao-icon" />
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        {/* Sobre Mim */}
        <section id="sobre-mim" className="sobre-mim">
          <h2>Sobre mim</h2>
          <p>
            Olá! Meu nome é Freelancer, programador e desenvolvedor. Desde 2010
            trabalho na área de programação, incluindo projetos para diversas
            empresas de TI. Tenho experiência com as seguintes tecnologias:
            Javascript, Java, HTML, etc.
          </p>
          <h3>Resumo da experiência profissional</h3>
          <p>
            Em 2010, formei-me em Análise e Desenvolvimento de Sistemas pela
            XYZ. Trabalhei em empresas de grande porte como ABC e DEF.
          </p>
        </section>

        {/* Portfólio */}
        <section id="portifolio" className="portifolio">
            
          <h2>Portfólio de Projetos</h2>
          <div className="projetos-grid">
            <div className="projeto">
              <img src="https://via.placeholder.com/150" alt="Projeto 1" />
              <h3>Projeto 1</h3>
            </div>
            <div className="projeto">
              <img src="https://via.placeholder.com/150" alt="Projeto 2" />
              <h3>Projeto 2</h3>
            </div>
            <div className="projeto">
              <img src="https://via.placeholder.com/150" alt="Projeto 3" />
              <h3>Projeto 3</h3>
            </div>
            <div className="projeto">
              <img src="https://via.placeholder.com/150" alt="Projeto 4" />
              <h3>Projeto 4</h3>
            </div>
            <div className="projeto">
              <img src="https://via.placeholder.com/150" alt="Projeto 5" />
              <h3>Projeto 5</h3>
            </div>
            <div className="projeto">
              <img src="https://via.placeholder.com/150" alt="Projeto 6" />
              <h3>Projeto 6</h3>
            </div>
          </div>
        </section>

        {/* Avaliações */}
        <section id="avaliacoes" className="avaliacoes">
          <h2>Avaliações dos Clientes</h2>
          <div className="avaliacoes-lista">
            <div className="avaliacao">
              <p>Excelente trabalho!</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>Cliente 1</p>
            </div>
            <div className="avaliacao">
              <p>Muito bom e ágil!</p>
              <p>⭐⭐⭐⭐</p>
              <p>Cliente 2</p>
            </div>
          </div>
        </section>
    
     </div>
      <Footer /> 
    </div> 
  );
}

export default PerfilContratante;
