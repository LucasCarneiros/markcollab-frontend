import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './AreaDeAtuacaoFreelancer.css';

const AreaDeAtuacaoFreelancer = () => {
  const [area, setArea] = useState('');
  const [funcao, setFuncao] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [linguas, setLinguas] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para enviar os dados aqui
    console.log('Área:', area);
    console.log('Função:', funcao);
    console.log('Habilidades:', habilidades);
    console.log('Línguas:', linguas);
    console.log('Telefone:', telefone);
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
              <option value="">Área de atuação</option>
              <option value="desenvolvimento-web">Desenvolvimento Web</option>
              <option value="design-grafico">Design Gráfico</option>
              <option value="redacao">Redação</option>
              <option value="marketing-digital">Marketing Digital</option>
            </select>
          </div>
          <div className="atuacao-field">
            <label htmlFor="funcao">Selecione a função na sua área de atuação</label>
            <input
              type="text"
              id="funcao"
              value={funcao}
              onChange={(e) => setFuncao(e.target.value)}
              required
            />
          </div>
          <div className="atuacao-field">
            <label htmlFor="habilidades">Quais são suas principais habilidades você procura? </label>
            <input
              type="text"
              id="habilidades"
              value={habilidades}
              onChange={(e) => setHabilidades(e.target.value)}
              required
            />
          </div>
          <div className="atuacao-field">
            <label htmlFor="linguas">Selecione seus idiomas</label>
            <input
              type="text"
              id="linguas"
              value={linguas}
              onChange={(e) => setLinguas(e.target.value)}
              required
            />
          </div>
          <div className="atuacao-field">
            <label htmlFor="telefone">Qual seu número de telefone?</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <button className="atuacao-button" type="submit">Criar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AreaDeAtuacaoFreelancer;