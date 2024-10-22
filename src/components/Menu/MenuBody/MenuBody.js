import React from 'react';
import { FaWind, FaMountain, FaGlobe, FaFireAlt, FaCarCrash, FaWater } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MenuBody.css';

const MenuBody = () => {
  const navigate = useNavigate(); // Initialize the hook

  const menuItems = [
    { icon: <FaWind />, label: 'Cyclone', className: 'box-cyclone', route: '/WindSpeed' },
    { icon: <FaMountain />, label: 'Landslide', className: 'box-landslide' },
    { icon: <FaGlobe />, label: 'Earthquake', className: 'box-earthquake' },
    { icon: <FaFireAlt />, label: 'City Fire', className: 'box-fire' },
    { icon: <FaCarCrash />, label: 'Road Accidents', className: 'box-accidents' },
    { icon: <FaWater />, label: 'Flood', className: 'box-flood' },
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
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuBody;