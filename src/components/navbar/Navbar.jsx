import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail, CiBellOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import Logo from '../../assets/images/logo_markcollab.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import PopUpCadastro from '../../components/PopUpCadastro/PopUpCadastro'; // Importação do PopUpCadastro

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // Estado para controlar a abertura do PopUp

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Fecha a sidebar ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 727) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Função para abrir o PopUpCadastro
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  // Função para fechar o PopUpCadastro
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div>
      <div className='blue_div'>
        <div className='first_nav_icons'>
          <a href=""><FaFacebook className='nav_social_icons'/></a>
          <a href=""><FaInstagram className='nav_social_icons' /></a>
        </div>
        <div className='second_nav_icons'> 
          <a href="mailto:atendimentomarkcollab@gmail.com" className='nav_mail_icons'>
            <CiMail /> atendimentomarkcollab@gmail.com
          </a>
        </div>
      </div>
      <div className='nav2'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <div className='menu-icon'>
            <span>☰</span> {/* Ícone de menu (hamburger) */}
          </div>
        </div>
        <ul className='nav2_list'>
          <li>
            <Link to="/" className='nav2_icons'>Home</Link>
          </li>
          <li>
            <Link to="/sobre" className='nav2_icons'>Sobre</Link>
          </li>
          <li>
            <Link to="/servicos" className='nav2_icons'>Serviços</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="" className='nav2_icons' id='projetos'>Projetos</Link>
              </li>
              <li>
                <Link to="" className='nav2_icons'><CiBellOn /></Link>
              </li>
              <li>
                <Link to="" className='nav2_icons'><VscAccount /></Link>
              </li>
            </>
          ) : (
            <>
              <li className="hidden-on-large">
                <Link to="/login" className='nav2_icons' id='login_btn'>Login</Link>
              </li>
              <li className="hidden-on-large">
                <Link to="#" className='nav2_icons' id='cadastro_btn' onClick={openPopUp}>Cadastro</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {isSidebarOpen && (
        <div className='sidebar'>
          <button className='close-sidebar' onClick={closeSidebar}>✖</button>
          <ul>
            <li><Link to="/" className='nav2_icons' onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/sobre" className='nav2_icons' onClick={closeSidebar}>Sobre</Link></li>
            <li><Link to="/servicos" className='nav2_icons' onClick={closeSidebar}>Serviços</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/projetos" className='nav2_icons' id='projetos' onClick={closeSidebar}>Projetos</Link></li>
                <li><Link to="/notificacoes" className='nav2_icons' onClick={closeSidebar}><CiBellOn />Notificações</Link></li>
                <li><Link to="/perfil" className='nav2_icons' onClick={closeSidebar}><VscAccount />Perfil</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className='nav2_icons' onClick={closeSidebar}>Login</Link></li>
                <li><Link to="/Cadastro" className='nav2_icons' onClick={closeSidebar}>Cadastro</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
      {/* Passando as props para o PopUpCadastro */}
      <PopUpCadastro isOpen={isPopUpOpen} onClose={closePopUp} />
    </div>
  );
};

export default Navbar;
