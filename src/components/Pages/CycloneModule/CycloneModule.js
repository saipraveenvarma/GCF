import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CycloneSidebar from '../../Homepage/CycloneModule/CycloneSidebar/CycloneSidebar';
import WindSpeedCyclone from '../../Homepage/CycloneModule/WindSpeedCyclone/WindSpeedCyclone';
import WindDirection from '../../Homepage/CycloneModule/WindDirection/WindDirection';
import UnderConstruction from '../../UnderConstruction'; // Import only once
import './CycloneModule.css';

const CycloneModule = () => {
  return (
    <div className="cyclone-module-container">
      <CycloneSidebar />
      <div className="main-content">
        <Routes>
          <Route path="WindSpeed" element={<WindSpeedCyclone />} />
          <Route path="WindDirection" element={<WindDirection />} />
          <Route path="*" element={<UnderConstruction />} /> {/* This will show UnderConstruction for any unmatched routes */}
        </Routes>
      </div>
    </div>
  );
};

export default CycloneModule;