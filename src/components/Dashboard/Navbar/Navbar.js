import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownData = {
    Cyclone: {
      info: "Cyclones",
      points: ["Wind Speed", "Wind Direction", "Atmospheric Pressure", "Sea Surface Temp", "Historical Data", "Cyclone Path", "Storm Surge", "Triggers/Thresholds", "Alerts/Warning Levels"],
      image: "./Banner/Cyclone.png",
    },
    Landslide: {
      info: "Landslides",
      points: ["Elevation Data", "Vulnerable Locations", "Slope gradient", "Solid type and composition", "Fault lines", "Rainfall data", "Solid moisture", "Groundwater level", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Landslide.webp",
    },
    Earthquake: {
      info: "Earthquakes",
      points: ["EQ magnitude", "Depth of focus", "Epicenter", "EQ intensity map", "EQ historical database", "Solid type and composition", "Elevation data", "Seismic sensors", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Earthquake.jpg",
    },
    "City Fire": {
      info: "City Fires",
      points: ["Industrial Data", "Temperature Index", "Precipitation Index", "Wind Speed", "Wind Direction", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/cityfire.jpg",
    },
    "Road Accidents": {
      info: "Road Accidents",
      points: ["Type of Road", "Traffic Network", "Vehicle Type", "Vehicle Speed/Acceleration", "Accident Database", "Road and Environment Conditions", "Geographical Position", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Roadaccident.webp",
    },
    Flood: {
      info: "Floods",
      points: ["Real-time rainfall", "Historical rainfall", "Forest rainfall", "Industrial maps", "Flood hazard maps", "Critical infrastructures", "Elevation maps", "Population density", "Land cover/Land use", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/flood1.jpg",
    },
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHoveredButton(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
          <span className="nav-button home-button">Home</span>
          {Object.keys(dropdownData).map((button) => (
            <span
              key={button}
              className="nav-button"
              onMouseEnter={() => setHoveredButton(button)}
            >
              {button}
            </span>
          ))}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className="info-bar">
          <p>EMPOWERING COMMUNITIES, SAFEGUARDING FUTURES</p>
        </div>
      </nav>
      <div className={`hover-box ${hoveredButton ? 'visible' : ''}`} ref={dropdownRef}>
        {hoveredButton && (
          <div className="hover-content">
            <div className="hover-text">{dropdownData[hoveredButton].info}</div>
            <div className="hover-points">
              {dropdownData[hoveredButton].points.map((point, index) => (
                <div key={index} className="point">{point}</div>
              ))}
            </div>
            <div className="hover-image">
              <img src={dropdownData[hoveredButton].image} alt={hoveredButton} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;