import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import './AreaDeAtuacaoFreelancer.css';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

const AreaDeAtuacaoFreelancer = () => {
  const [ramo, setRamo] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para enviar os dados aqui
    console.log('Ramo:', ramo);

    // Redirecionar para a tela "HomeContratante" após a seleção
    navigate('/HomeContratante');
  };

  return (
    <div>
      <Navbar />
      <div className="atuacao-container">
        <form className="atuacao-form" onSubmit={handleSubmit}>
          <h1 className="atuacao-title">Para criar seu perfil de freelancer nos informe qual sua área:</h1>
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
              <option value="outro">Outro</option>
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
