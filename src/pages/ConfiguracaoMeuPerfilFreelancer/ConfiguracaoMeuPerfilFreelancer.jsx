import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import './ConfiguracaoMeuPerfilFreelancer.css';
import PopUpSalvarInfos from '../../components/PopUpSalvarInfos/PopUpSalvarInfos';  // Importando o PopUpSalvarInfos
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o PopUpSairDaConta

const ConfiguracaoMeuPerfilFreelancer = () => {
  const [nome, setNome] = useState('');
  const [cidade, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  
  const [showPopUpSalvar, setShowPopUpSalvar] = useState(false);  // Controle para mostrar o pop-up de salvar
  const [showPopUpSair, setShowPopUpSair] = useState(false); // Controle para mostrar o pop-up de sair

  // Função que é chamada ao clicar em "Salvar"
  const handleSave = (event) => {
    event.preventDefault();
    // Exibir o pop-up quando o usuário clicar em "Salvar"
    setShowPopUpSalvar(true);

    // Implementar a lógica para salvar as alterações do perfil
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone);
    console.log('Endereço:', endereco);
    
    
  };

  // Função para mostrar o pop-up de sair
  const handleShowPopUpSair = () => {
    setShowPopUpSair(true); // Exibe o pop-up de sair
  };

  // Função para fechar o pop-up de salvar
  const handleClosePopUpSalvar = () => {
    setShowPopUpSalvar(false);
  };

  // Função para fechar o pop-up de sair
  const handleClosePopUpSair = () => {
    setShowPopUpSair(false);
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
                <a href="#" onClick={handleShowPopUpSair}> {/* Ação para abrir o pop-up de sair */}
                  <FaSignOutAlt className="configuracao-icon" />
                  Sair da Conta
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
              <label htmlFor="cidade">Sobrenome:</label>
              <input
                type="text"
                id="Sobrenome"
                value={cidade}
                onChange={(e) => setSobrenome(e.target.value)}
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
          
            <button className="configuracao-button" type="submit">Salvar</button>
          </form>
        </main>
      </div>
      <Footer />

      {/* Mostrar o pop-up de salvar se o estado 'showPopUpSalvar' for verdadeiro */}
      {showPopUpSalvar && <PopUpSalvarInfos onClose={handleClosePopUpSalvar} />}

      {/* Mostrar o pop-up de sair se o estado 'showPopUpSair' for verdadeiro */}
      {showPopUpSair && <PopUpSairDaConta onClose={handleClosePopUpSair} />}
    </div>
  );
};

export default ConfiguracaoMeuPerfilFreelancer;
