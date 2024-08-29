import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '../../../config/config';

export const User = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();


  const handleLogout = () => {
    console.log('Logging out');
    localStorage.removeItem('token')
    //setToken(null)
    navigate('/login');
  }

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log('User component mounted');
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`${API.api}/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('User profile:', response.data);
        setUserData(response.data); // Acceder a los datos directamente en response.data
      } catch (error) {
        navigate('/login');
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className='header-profile' onClick={toggleMenu}>
      <div className="header-profile__section">
        <img src='/img/public/header/profile-ico.png' alt='Default User Icon'/>
        <p>{userData ? userData.firstName : 'User'}</p>
      </div>
      <ul className={`header-profile__options ${isMenuOpen ? 'header-profile__options--open' : ''}`}>
        <li><NavLink to="/dashboard/my-account">Mi Perfil</NavLink></li>
        <li><NavLink to="/dashboard/my-account/edit">Editar Perfil</NavLink></li>
        <li><NavLink to="/dashboard/my-account/change-password">Editar Password</NavLink></li>
        <li><a onClick={handleLogout}>Cerrar Sesión</a></li>
      </ul>
    </div>
  );
};