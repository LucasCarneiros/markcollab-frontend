import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas
import Home from '../pages/home/Home'
import Sobre from '../pages/sobre/sobre'
import Servicos from '../pages/serviços/Serviços';

const AppRoutes = () => {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="sobre" element={<Sobre />} />
    <Route path="servicos" element={<Servicos />} />
    </Routes>
   </Router>
  )
}

export default AppRoutes