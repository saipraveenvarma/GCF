import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './components/Pages/DashboardPage';
import MenuPage from './components/Pages/MenuPage';
import CycloneModule from './components/Pages/CycloneModule/CycloneModule';
import LoginPage from './components/Pages/LoginPage';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/CycloneModule/*" element={<CycloneModule />} /> 

        <Route path="/LoginPage" element={<LoginPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;