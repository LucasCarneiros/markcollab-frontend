import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './ProjetoPublicadoContratante.css';

const ProjetoPublicadoContratante = () => {
  return (
    <div>
      <Navbar />
      <div className="projeto-publicado-container">
        <h1 className="projeto-publicado-title">Projeto publicado com sucesso!</h1>
        <a href="/meus-projetos-contratante" className="projeto-publicado-button">Ir para os meus projetos</a>
        <a href="/publicacao-projeto-contratante" className="projeto-publicado-button">Publicar mais projetos</a>
        <p className="projeto-publicado-footer-text">Em alguns instantes você começará a receber propostas</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProjetoPublicadoContratante;
