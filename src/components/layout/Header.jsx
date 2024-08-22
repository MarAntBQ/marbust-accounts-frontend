import React from 'react'

export const Header = () => {
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
    </header>
  )
}
