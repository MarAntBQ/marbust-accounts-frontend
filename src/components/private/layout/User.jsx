import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

export const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='header-profile'>
        <div className="header-profile__section" onClick={toggleMenu}>
          <img src='/img/public/header/profile-ico.png' alt='Default User Icon'/>
          <p>MarAntBQasddddassasadadssdaadaadsdasdsaasdaadsasdasdads</p>
        </div>
        <ul className={`header-profile__options ${isMenuOpen ? 'header-profile__options--open' : ''}`}>
          <li><NavLink to="/dashboard/my-account">Mi Perfil</NavLink></li>
          <li><NavLink to="/dashboard/my-account/change-password">Editar Password</NavLink></li>
          <li><NavLink to="/login">Cerrar Sesión</NavLink></li>
        </ul>
    </div>
  )
}
