import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from './User';
import useAuth from '../../../hooks/useAuth';

export const Header = () => {
  const { auth } = useAuth();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menu]: !prevOpenMenus[menu],
    }));
  };

  return (
    <header>
      <User />
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Inicio</NavLink></li>
          {auth.roleId >= 3 && (
            <>
              <hr />
              <li>
                <a onClick={() => toggleMenu('admin')} className="menu-toggle">
                  Administración del Sistema <i className={`fas fa-chevron-${openMenus['admin'] ? 'up' : 'down'}`}></i>
                </a>
                <ul className={`submenu ${openMenus['admin'] ? 'open' : ''}`}>
                  <li><a href='./'>Usuarios</a></li>
                  <li><a href='./'>Roles</a></li>
                  <li><a href='./'>Permisos</a></li>
                </ul>
              </li>
              <hr />
            </>
          )}
          <li><NavLink to="./">Marbust Computers</NavLink></li>
          <li><NavLink to="./">MBHostCloud</NavLink></li>
          <li><NavLink to="./">Marbust Sites</NavLink></li>
          <li><NavLink to="./">Marbust News</NavLink></li>
          <li><NavLink to="./">Marbust Ads</NavLink></li>
          <li><NavLink to="./">Marbust Support</NavLink></li>
          <li><NavLink to="./">Marbust Support</NavLink></li>
          <li><NavLink to="./">Marbust Support</NavLink></li>
          <li><NavLink to="./">Marbust Support</NavLink></li>
          <li><NavLink to="./">Marbust Support</NavLink></li>
          <li><NavLink to="./">Marbust Support</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};