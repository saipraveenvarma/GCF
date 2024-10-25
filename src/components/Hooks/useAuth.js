// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/MenuPage');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/LoginPage');
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate('/LoginPage');
    }
  };

  return { isLoggedIn, handleLogin, handleLogout, handleUserIconClick };
};

export default useAuth;