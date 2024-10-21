import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail, CiBellOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import Logo from '../../assets/images/logo_markcollab.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <Link to="/" className='nav2_icons'>Home</Link>
          </li>
          <li>
            <Link to="" className='nav2_icons' id='projetos'>Projetos</Link>
          </li>
          <li>
            <Link to="" className='nav2_icons'><CiBellOn /></Link>
          </li>
          <li>
            <Link to="" className='nav2_icons'><VscAccount /></Link>
          </li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div className='sidebar'>
          <button className='close-sidebar' onClick={closeSidebar}>✖</button>
          <ul>
            <li><Link to="/" className='nav2_icons' onClick={closeSidebar}>Home</Link></li>
            <li><Link to="" className='nav2_icons' id='projetos' onClick={closeSidebar}>Projetos</Link></li>
            <li><Link to="" className='nav2_icons' onClick={closeSidebar}><CiBellOn />Notificações</Link></li>
            <li><Link to="" className='nav2_icons' onClick={closeSidebar}><VscAccount />Perfil</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
