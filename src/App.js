// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './components/Pages/DashboardPage';
import MenuPage from './components/Pages/MenuPage';
import CycloneModule from './components/Pages/CycloneModule/CycloneModule';
import LoginPage from './components/Pages/LoginPage';
import NotFound from './components/NotFound'; 
import ProtectedRoute from './components/Context/ProtectedRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route 
          path="/MenuPage" 
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/CycloneModule/*" 
          element={
            <ProtectedRoute>
              <CycloneModule />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;