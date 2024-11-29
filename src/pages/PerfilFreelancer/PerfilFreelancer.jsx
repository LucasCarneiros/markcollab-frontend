import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import './PerfilFreelancer.css';
import { Link } from 'react-router-dom';
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o pop-up

function PerfilFreelancer() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // Estado para controlar a visibilidade do pop-up

  // Função para abrir o pop-up
  const handleOpenPopUp = (e) => {
    e.preventDefault(); // Impede o redirecionamento do link
    setIsPopUpOpen(true);
  };

  // Função para fechar o pop-up
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  // Função para confirmar a saída
  const handleConfirmExit = () => {
    console.log('Usuário saiu da conta');
    // Aqui você pode adicionar a lógica para realmente sair da conta, como redirecionamento ou logout
    setIsPopUpOpen(false); // Fecha o pop-up após confirmar
  };

  return (
    <div>
      <Navbar />
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to='/PerfilFreelancer'>Meu Perfil</Link>
          </li>
          {/* Link para Editar Perfil */}
          <li>
            <Link to='/EditarMeuPerfilFreelancer'>Editar Perfil</Link>
          </li>
          {/* Link para Configurações */}
          <li>
            <Link to='/ConfiguracaoMeuPerfilFreelancer'>Configurações</Link>
          </li>
          {/* Link "Sair" que agora abre o pop-up */}
          <li>
            <Link to="#" onClick={handleOpenPopUp}>Sair</Link>
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

        {/* Outras seções */}
        <section id="sobre-mim" className="sobre-mim">
          <h2>Sobre mim</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
            {/* Outros projetos */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* PopUp Sair da Conta - Só será exibido se isPopUpOpen for true */}
      {isPopUpOpen && (
        <PopUpSairDaConta
          isOpen={isPopUpOpen}
          onClose={handleClosePopUp}
          onConfirm={handleConfirmExit}
        />
      )}
    </div>
  );
}

export default PerfilFreelancer;
