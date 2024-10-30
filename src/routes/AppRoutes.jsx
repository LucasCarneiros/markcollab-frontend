import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas
import Home from '../pages/home/Home'
import Sobre from '../pages/sobre/sobre'

const AppRoutes = () => {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="sobre" element={<Sobre />} />
    </Routes>
   </Router>
  )
}

export default AppRoutes