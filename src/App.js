import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './components/Pages/DashboardPage';
import MenuPage from './components/Pages/MenuPage';
import CycloneModule from './components/Pages/CycloneModule/CycloneModule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/CycloneModule" element={<CycloneModule />} />
        
      </Routes>
    </Router>
  );
}

export default App;