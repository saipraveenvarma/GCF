// App.js
import React, { useState } from 'react';
import Header from './components/Dashboard/Header/Header';
import Navbar from './components/Dashboard/Navbar/Navbar';
import Home from './components/Dashboard/Home/Home';
import Cyclone from './components/Dashboard/Cyclone/Cyclone';
import Landslide from './components/Dashboard/Landslide/Landslide';
import Earthquake from './components/Dashboard/Earthquake/Earthquake';
import Cityfire from './components/Dashboard/Cityfire/Cityfiire';
import RoadAccident from './components/Dashboard/Roadaccident/Roadaccident';
import Flood from './components/Dashboard/Flood/Flood';
import Footer from './components/Dashboard/Footer/Footer';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('Home'); // Track the active view

  const renderView = () => {
    switch (activeView) {
      case 'Home':
        return <Home />;
      case 'Cyclone':
        return <Cyclone />;
      case 'Landslide':
        return <Landslide />;
      case 'Earthquake':
        return <Earthquake />;
      case 'City Fire':
        return <Cityfire />;
      case 'Road Accidents':
        return <RoadAccident />;
      case 'Flood':
        return <Flood />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Navbar setActiveView={setActiveView} />
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;