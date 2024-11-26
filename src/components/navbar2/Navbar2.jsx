import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail, CiBellOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import Logo from '../../assets/images/logo_markcollab.png';
import './Navbar2.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login

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
            <Link to="/HomeFreelancer" className='nav2_icons'>Home</Link>
          </li>
          <li>
            <Link to="/EditarMeuPerfilContratante" className='nav2_icons'>Meu Perfil</Link>
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
            // Mantém os links de login e cadastro na navbar, mas os oculta em telas grandes
            <>
              <li className="hidden-on-large">
                <Link to="/MeusProjetosFreelancer" className='nav2_icons' id='login_btn'>Projetos</Link>
        
             <Link to="" className='notification' id="notificacions"><svg width="25" height="25" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5395 4.72852C14.1608 4.72852 9.78954 9.09977 9.78954 14.4785V19.1748C9.78954 20.166 9.36704 21.6773 8.86329 22.5223L6.99454 25.626C5.84079 27.5435 6.63704 29.6723 8.74954 30.3873C15.7533 32.7273 23.3095 32.7273 30.3133 30.3873C32.2795 29.7373 33.1408 27.4135 32.0683 25.626L30.1995 22.5223C29.712 21.6773 29.2895 20.166 29.2895 19.1748V14.4785C29.2895 9.11602 24.902 4.72852 19.5395 4.72852Z" stroke="#2C65F6" stroke-width="2.59615" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M22.5398 5.19984C22.0361 5.05359 21.5161 4.93984 20.9798 4.87484C19.4198 4.67984 17.9248 4.79359 16.5273 5.19984C16.9986 3.99734 18.1686 3.15234 19.5336 3.15234C20.8986 3.15234 22.0686 3.99734 22.5398 5.19984Z" stroke="#2C65F6" stroke-width="2.59615" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.4102 30.9727C24.4102 33.6539 22.2164 35.8477 19.5352 35.8477C18.2027 35.8477 16.9677 35.2952 16.0902 34.4177C15.2127 33.5402 14.6602 32.3052 14.6602 30.9727" stroke="#2C65F6" stroke-width="2.59615" stroke-miterlimit="10"/>
</svg></Link> </li>
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
    </div>
  );
};

export default Navbar;
