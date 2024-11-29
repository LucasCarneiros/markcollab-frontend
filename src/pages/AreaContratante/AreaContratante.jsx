import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import './AreaContratante.css';

const AreaDeAtuacaoFreelancer = () => {
  const [ramo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para enviar os dados aqui
    console.log('Ramo:', ramo);

  };

  return (
    <div>
      <Navbar />
      <div className="atuacao-container">
        <form className="atuacao-form" onSubmit={handleSubmit}>
          <h1 className="atuacao-title">Para criar seu perfil de empresa nos informe qual o ramo do negócio:</h1>
          <div className="atuacao-field">
            <select
              id="Ramo"
              value={ramo}
              onChange={(e) => setRamo(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="desenvolvimento-web">Desenvolvimento Web</option>
              <option value="design-grafico">Design Gráfico</option>
              <option value="redacao">Redação</option>
              <option value="marketing-digital">Marketing Digital</option>
              <option value="marketing-digital">Outro</option>
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