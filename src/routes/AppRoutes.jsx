import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas
import Home from '../pages/home/Home'

const AppRoutes = () => {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

export default AppRoutes