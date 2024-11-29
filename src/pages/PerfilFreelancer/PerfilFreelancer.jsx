import React, { useState } from 'react';
import Navbar from '../../components/navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import './PerfilFreelancer.css';
import { Link } from 'react-router-dom';
import PopUpSairDaConta from '../../components/PopUpSairDaConta/PopUpSairDaConta'; // Importando o pop-up

function PerfilContratante() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // Estado para controlar a visibilidade do pop-up

  // Função para abrir o pop-up
  const handleOpenPopUp = () => {
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
          <li>
            <Link to=''>Editar Perfil</Link>
          </li>
          <li>
          <Link to='/ConfiguracaoMeuPerfilFreelancer'>Configurações</Link>
          </li>
          <li>
          <Link to='/PerfilFreelancer'>Sair</Link>  
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
        {/* Sobre Mim */}
        <section id="sobre-mim" className="sobre-mim">
          <h2>Sobre mim</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h3 className='h3-PerfilContratante'>Resumo da experiência profissional</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

export default PerfilContratante;
