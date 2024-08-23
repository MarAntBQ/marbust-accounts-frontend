import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = ({ setToken }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loginToken')
    setToken(null)
    navigate('/login');
  }
  return (
    <header>
        <nav>
            <ul>
                <li><a href='./'>Inicio</a></li>
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
