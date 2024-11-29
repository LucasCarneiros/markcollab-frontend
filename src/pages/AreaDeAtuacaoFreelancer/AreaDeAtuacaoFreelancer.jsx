import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import './AreaDeAtuacaoFreelancer.css';

const AreaDeAtuacaoFreelancer = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para enviar os dados aqui
    console.log('Área:', area);
  };

  return (
    <div>
      <Navbar />
      <div className="atuacao-container">
        <form className="atuacao-form" onSubmit={handleSubmit}>
          <h1 className="atuacao-title">Para criar seu perfil como freelancer nos informe qual sua area de atuação</h1>
          <div className="atuacao-field">
            <label htmlFor="area">Selecione a sua área de atuação</label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="desenvolvimento-web">Desenvolvimento Web</option>
              <option value="design-grafico">Design Gráfico</option>
              <option value="redacao">Redação</option>
              <option value="marketing-digital">Marketing Digital</option>
            </select>
          </div>
          <button className="atuacao-button" type="submit">Criar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AreaDeAtuacaoFreelancer;