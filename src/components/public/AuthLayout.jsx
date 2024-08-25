import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = ({ setToken, token }) => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='auth-layout'>
      <Outlet/>
      <div className="copyright">
        <p><strong>Marbust Accounts&reg; 2.5.0</strong></p>
        <p>&copy; {currentYear} <a href='https://marbust.com' target='_blank'>Marbust Technology Company</a> - All Rights Reserved</p>
      </div>
    </div>
  )
}
