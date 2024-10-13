import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="./timor.png" alt="Logo" className="logo" />
        <div className="text-container">
          <span className="header-text bold-text">DRRDSS</span>
          <span className="header-text">DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM</span>
        </div>
      </div>
      <div className="login-icon">
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;