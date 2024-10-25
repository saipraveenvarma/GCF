import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaThLarge } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false); 
  const navigate = useNavigate();

  // Recheck login status from localStorage whenever the component loads
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleHomeClick = () => {
    if (isLoggedIn) {
      navigate('/MenuPage'); // Go to Menu if logged in
    } else {
      navigate('/LoginPage'); // Go to Login if not logged in
    }
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      // Toggle logout box if logged in
      setShowLogoutBox((prev) => !prev);
    } else {
      // Redirect to login page if not logged in
      navigate('/LoginPage');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    setIsLoggedIn(false); // Update state
    setShowLogoutBox(false); // Close logout box
    navigate('/LoginPage'); // Redirect to login page
  };

  return (
    <header>
      <div className="header-content">
        <img src="./timor.png" alt="Logo" className="logo" />
        <div className="text-container">
          <span className="header-text bold-text">DRRDSS</span>
          <span className="header-text">
            DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM
          </span>
        </div>
      </div>
      <div className="icon-container">
        {isLoggedIn && (
          <FaThLarge className="header-icon" onClick={handleHomeClick} />
        )}
        <FaUserCircle className="header-icon" onClick={handleUserIconClick} />
        {showLogoutBox && isLoggedIn && (
          <div className="logout-box">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;