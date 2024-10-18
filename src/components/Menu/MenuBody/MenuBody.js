import React from 'react';
import { FaWind, FaMountain, FaGlobe, FaFireAlt, FaCarCrash, FaWater } from 'react-icons/fa'; // Import relevant icons
import './MenuBody.css';

const MenuBody = () => {
  const menuItems = [
    { icon: <FaWind />, label: 'Cyclone', className: 'box-cyclone' },
    { icon: <FaMountain />, label: 'Landslide', className: 'box-landslide' },
    { icon: <FaGlobe />, label: 'Earthquake', className: 'box-earthquake' },
    { icon: <FaFireAlt />, label: 'City Fire', className: 'box-fire' },
    { icon: <FaCarCrash />, label: 'Road Accidents', className: 'box-accidents' },
    { icon: <FaWater />, label: 'Flood', className: 'box-flood' },
  ];

  return (
    <div className="menu-body">
      {menuItems.map((item, index) => (
        <div key={index} className={`box ${item.className}`}>
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuBody;