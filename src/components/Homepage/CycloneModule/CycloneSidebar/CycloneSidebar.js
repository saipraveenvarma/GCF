import React, { useState, useEffect, useMemo } from 'react';
import './CycloneSidebar.css';
import { 
  FaWind, FaCompass, FaTachometerAlt, FaTemperatureHigh, 
  FaHistory, FaMapMarkedAlt, FaWater, FaExclamationTriangle, 
  FaBell, FaBars, FaThLarge, FaHome 
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const CycloneSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeIndex, setActiveIndex] = useState(null); // No default button selected

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(() => [
    { icon: <FaWind />, label: 'Cyclone distrurbance track', path: '/CycloneModule/CycloneDisturbanceTrack' },
    { icon: <FaCompass />, label: 'Impact forecast', path: '/CycloneModule/ImpactForecast' },
    { icon: <FaTachometerAlt />, label: 'Ocean state information', path: '/CycloneModule/OceanStateInformation' },
    { icon: <FaTemperatureHigh />, label: 'Comparison', path: '/CycloneModule/Comparison' },
    { icon: <FaHistory />, label: 'Historical Cyclone', path: '/CycloneModule/HistoricalCyclone' },
    { icon: <FaMapMarkedAlt />, label: 'Report', path: '/CycloneModule/Report' },
    { icon: <FaWater />, label: 'Awareness', path: '/CycloneModule/Awareness' },
    { icon: <FaExclamationTriangle />, label: 'Data panel', path: '/CycloneModule/Data panel' },
  ], []);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = menuItems.findIndex(item => item.path === currentPath);
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location.pathname, menuItems]);

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