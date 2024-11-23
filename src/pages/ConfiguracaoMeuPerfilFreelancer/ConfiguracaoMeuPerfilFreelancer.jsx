import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import './ConfiguracaoMeuPerfilFreelancer.css';

const ConfiguracaoMeuPerfilFreelancer = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    // Implementar a lógica para salvar as alterações de configuração
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone);
    console.log('Endereço:', endereco);
    console.log('Cidade:', cidade);
    console.log('Estado:', estado);
  };

  return (
    <div>
      <Navbar />
      <div className="configuracao-container">
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
        <main className="configuracao-main">
          <form className="configuracao-form" onSubmit={handleSave}>
            <h1 className="configuracao-title">Configurações do Freelancer</h1>
            <div className="configuracao-field">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className="configuracao-field">
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
            <button className="configuracao-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ConfiguracaoMeuPerfilFreelancer;
