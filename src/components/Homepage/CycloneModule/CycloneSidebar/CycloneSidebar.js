import React, { useState, useEffect, useMemo } from 'react';
import './CycloneSidebar.css';
import { FaChevronLeft, FaChevronRight, FaThLarge, FaHome, FaUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const CycloneSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showLogoutBox, setShowLogoutBox] = useState(false); // Logout box state

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
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
    const activeItemIndex = menuItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location.pathname, menuItems]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setIsCollapsed(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = (index, path) => {
    setActiveIndex(index);
    if (path) navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/LoginPage');
  };

  const toggleLogoutBox = () => setShowLogoutBox(!showLogoutBox);

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="arrow-icon-wrapper" onClick={toggleSidebar}>
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </div>

      <div className="menu-button-wrapper">
        <div className="icon-container">
          <FaUserCircle className="header-icon" onClick={toggleLogoutBox} />
          {showLogoutBox && isLoggedIn && (
            <div className="logout-box">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="user-image"
              />
              <span className="user-name">Admin</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          <FaThLarge className="header-icon" onClick={() => navigate('/MenuPage')} />
          <FaHome className="header-icon" onClick={() => navigate('/')} />
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