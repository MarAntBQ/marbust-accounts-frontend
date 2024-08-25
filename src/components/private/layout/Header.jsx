import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { User } from './User';

export const Header = ({ setToken }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loginToken')
    setToken(null)
    navigate('/login');
  }
  return (
    <header>
      <User/>
        <nav>
            <ul>
                <li><NavLink to="/dashboard">Inicio</NavLink></li>
                <li><a href='./'>Administración del Sistema</a>
                  <ul>
                    <li><a href='./'>Usuarios</a></li>
                    <li><a href='./'>Roles</a></li>
                    <li><a href='./'>Permisos</a></li>
                  </ul>
                </li>
            </ul>
        </nav>
        <a href='#' onClick={handleLogout}>Cerrar Sesión</a>
    </header>
  )
}
