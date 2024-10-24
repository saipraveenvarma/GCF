import React from 'react';
import { FaUserCircle, FaThLarge } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/MenuPage'); 
  };

  const handleLoginClick = () => {
    navigate('/LoginPage'); 
  };

  return (
    <header>
      <div className="header-content">
        <img src="./timor.png" alt="Logo" className="logo" />
        <div className="text-container">
          <span className="header-text bold-text">DRRDSS</span>
          <span className="header-text">DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM</span>
        </div>
      </div>
      <div className="icon-container">
        <FaThLarge className="header-icon" onClick={handleHomeClick} /> {/* Add onClick */}
        <FaUserCircle className="header-icon" onClick={handleLoginClick} />
      </div>
    </header>
  );
};

export default Header;