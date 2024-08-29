import React from 'react'
import { NavLink } from 'react-router-dom';
import { User } from './User';
import useAuth from '../../../hooks/useAuth';

export const Header = () => {
  const {auth} = useAuth();
  return (
    <header>
      <User/>
        <nav>
            <ul>
                <li><NavLink to="/dashboard">Inicio</NavLink></li>
                {auth.roleId >= 3 && (
                  <>
                  <hr/>
                  <li><a href='./'>Administración del Sistema</a>
                  <ul>
                    <li><a href='./'>Usuarios</a></li>
                    <li><a href='./'>Roles</a></li>
                    <li><a href='./'>Permisos</a></li>
                  </ul>
                </li>
              <hr/>
              </>)}
                <li><NavLink to="./">Marbust Computers</NavLink></li>
                <li><NavLink to="./">MBHostCloud</NavLink></li>
                <li><NavLink to="./">Marbust Sites</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
