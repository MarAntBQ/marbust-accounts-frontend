import React from 'react'
import { NavLink } from 'react-router-dom';
import { User } from './User';

export const Header = () => {
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
    </header>
  )
}
