import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './components/Pages/DashboardPage';
import MenuPage from './components/Pages/MenuPage'; // Import MenuPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} /> {/* Default route */}
        <Route path="/MenuPage" element={<MenuPage />} /> {/* Route to MenuPage */}
      </Routes>
    </Router>
  );
}

export default App;