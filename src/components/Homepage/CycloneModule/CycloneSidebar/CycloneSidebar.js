import React, { useState, useEffect } from 'react';
import './CycloneSidebar.css';
import { 
  FaWind, FaCompass, FaTachometerAlt, FaTemperatureHigh, 
  FaHistory, FaMapMarkedAlt, FaWater, FaExclamationTriangle, FaBell, FaBars, 
  FaThLarge, FaHome 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CycloneSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const menuItems = [
    { icon: <FaWind />, label: 'Wind Speed', path: '/WindSpeed' },
    { icon: <FaCompass />, label: 'Wind Direction', path: '/WindDirection' },
    { icon: <FaTachometerAlt />, label: 'Atmospheric Pressure' },
    { icon: <FaTemperatureHigh />, label: 'Sea Surface Temp' },
    { icon: <FaHistory />, label: 'Historical Data' },
    { icon: <FaMapMarkedAlt />, label: 'Cyclone Path' },
    { icon: <FaWater />, label: 'Storm Surge' },
    { icon: <FaExclamationTriangle />, label: 'Triggers/Thresholds' },
    { icon: <FaBell />, label: 'Alerts/Warning Levels' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index, path) => {
    setActiveIndex(index);
    if (path) navigate(path);
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setIsCollapsed(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHomeClick = () => navigate("/");
  const handleMenuClick = () => navigate("/MenuPage");

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="menu-button-wrapper">
        <button className="toggle-button menu-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="icon-container">
          <FaThLarge className="header-icon" onClick={handleMenuClick} />
          <FaHome className="header-icon" onClick={handleHomeClick} />
        </div>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <button
              className={`sidebar-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleButtonClick(index, item.path)}
            >
              <span className="icon">{item.icon}</span>
              {!isMobile && (
                <span className={`label ${isCollapsed ? 'hidden' : ''}`}>
                  {item.label}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CycloneSidebar;