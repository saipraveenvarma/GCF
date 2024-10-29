import React from 'react';
import { FaWind, FaMountain, FaGlobe, FaFireAlt, FaCarCrash, FaWater } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MenuBody.css';

const MenuBody = () => {
  const navigate = useNavigate(); // Initialize the hook

  const menuItems = [
    { icon: <FaWind />, labeltext: 'Cyclone', className: 'box-cyclone', route: '/CycloneModule/CycloneDisturbanceTrack' },
    { icon: <FaMountain />, labeltext: 'Landslide', className: 'box-landslide' , route: '/LandslideModule/ElevationData' },
    { icon: <FaGlobe />, labeltext: 'Earthquake', className: 'box-earthquake' },
    { icon: <FaFireAlt />, labeltext: 'City Fire', className: 'box-fire' },
    { icon: <FaCarCrash />, labeltext: 'Road Accidents', className: 'box-accidents' },
    { icon: <FaWater />, labeltext: 'Flood', className: 'box-flood' },
  ];

  const handleNavigation = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="menu-body">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`box ${item.className}`}
          onClick={() => handleNavigation(item.route)} // Trigger navigation on click
        >
          <div className="icon">{item.icon}</div>
          <div className="labeltext">{item.labeltext}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuBody;