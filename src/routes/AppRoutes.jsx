import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas contratante
import MeusProjetosContratante from '../pages/MeusProjetosContratante/MeusProjetosContratante';
import VisualizacaoMeusProjetosContratante from '../pages/VisualizacaoMeusProjetosContratante/VisualizacaoMeusProjetosContratante';
import PublicacaoProjetoContratante from '../pages/PublicacaoProjetoContratante/PublicacaoProjetoContratante';
import ProjetoPublicadoContratante from '../pages/ProjetoPublicadoContratante/ProjetoPublicadoContratante';
import MeuPerfilContratante from '../pages/MeuPerfilContratante/MeuPerfilContratante';
import EditarMeuPerfilContratante from '../pages/EditarMeuPerfilContratante/EditarMeuPerfilContratante';
import ConfiguracaoMeuPerfilContratante from '../pages/ConfiguracaoMeuPerfilContratante/ConfiguracaoMeuPerfilContratante';


// Páginas freelancer
import MeusProjetosFreelancer from '../pages/MeusProjetosFreelancer/MeusProjetosFreelancer';
import EditarMeuPerfilFreelancer from '../pages/EditarMeuPerfilFreelancer/EditarMeuPerfilFreelancer';
import ConfiguracaoMeuPerfilFreelancer from '../pages/ConfiguracaoMeuPerfilFreelancer/ConfiguracaoMeuPerfilFreelancer';
import AreaDeAtuacaoFreelancer from '../pages/AreaDeAtuacaoFreelancer/AreaDeAtuacaoFreelancer';
import BuscarProjetosFreelancerVisualizacao from '../pages/BuscarProjetosFreelancerVisualizacao/BuscarProjetosFreelancerVisualizacao';
import BuscarProjetosFreelancerPrincipal from '../pages/BuscarProjetosFreelancerPrincipal/BuscarProjetosFreelancerPrincipal';

// Páginas gerais
import Home from '../pages/home/Home';
import Sobre from '../pages/sobre/sobre';
import Servicos from '../pages/serviços/Serviços';
import Login from '../pages/login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="Login" element={<Login />} />"
        <Route path="Cadastro" element={<Cadastro />} />
        
        <Route path="meusProjetosContratante" element={<MeusProjetosContratante />} />
        <Route path="visualizacaoMeusProjetosContratante" element={<VisualizacaoMeusProjetosContratante />} />
        <Route path="publicacaoProjetoContratante" element={<PublicacaoProjetoContratante />} />
        <Route path="projetoPublicadoContratante" element={<ProjetoPublicadoContratante />} />
        <Route path="meuPerfilContratante" element={<MeuPerfilContratante />} />
        <Route path="editarMeuPerfilContratante" element={<EditarMeuPerfilContratante />} />
        <Route path="configuracaoMeuPerfilContratante" element={<ConfiguracaoMeuPerfilContratante />} />

        <Route path="meusProjetosFreelancer" element={<MeusProjetosFreelancer />} />
        <Route path="areaDeAtuacaoFreelancer" element={<AreaDeAtuacaoFreelancer />} />
        <Route path="editarMeuPerfilFreelancer" element={<EditarMeuPerfilFreelancer />} />
        <Route path="configuracaoMeuPerfilFreelancer" element={<ConfiguracaoMeuPerfilFreelancer />} />
        <Route path="buscarProjetosFreelancerVisualizacao" element={<BuscarProjetosFreelancerVisualizacao />} />
        <Route path="buscarProjetosFreelancerPrincipal" element={<BuscarProjetosFreelancerPrincipal />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
