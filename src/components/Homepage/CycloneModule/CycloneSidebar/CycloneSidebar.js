import React, { useState, useEffect, useMemo } from 'react';
import './CycloneSidebar.css';
import { FaChevronLeft, FaChevronRight, FaThLarge, FaHome, FaUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const CycloneSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(() => [
    { icon: '🌪️', label: 'Cyclone Disturbance Track', path: '/CycloneModule/CycloneDisturbanceTrack' },
    { icon: '📍', label: 'Impact Forecast', path: '/CycloneModule/ImpactForecast' },
    { icon: '🌊', label: 'Ocean State Information', path: '/CycloneModule/OceanStateInformation' },
    { icon: '⚖️', label: 'Comparison', path: '/CycloneModule/Comparison' },
    { icon: '🗓️', label: 'Historical Cyclone', path: '/CycloneModule/HistoricalCyclone' },
    { icon: '🗺️', label: 'Report', path: '/CycloneModule/Report' },
    { icon: '📢', label: 'Awareness', path: '/CycloneModule/Awareness' },
    { icon: '⚠️', label: 'Data Panel', path: '/CycloneModule/DataPanel' },
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
  const handleLoginPageClick = () => navigate("/LoginPage");

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="arrow-icon-wrapper">
        <div className="arrow-icon" onClick={toggleSidebar}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </div>
      </div>

      <div className="menu-button-wrapper">
        <div className="icon-container">
          <FaUserCircle className="header-icon" onClick={handleLoginPageClick} />
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