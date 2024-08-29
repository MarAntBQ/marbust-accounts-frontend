import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const {auth, setAuth} = useAuth();
  console.log(auth);


  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setAuth({});
    navigate('/login');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-profile' onClick={toggleMenu}>
      <div className="header-profile__section">
        <img src='/img/public/header/profile-ico.png' alt='Default User Icon'/>
        <p>{auth.firstName ? auth.firstName : 'User' }</p>
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