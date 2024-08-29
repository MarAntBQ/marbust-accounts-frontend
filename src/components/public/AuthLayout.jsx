import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Spinner from '../common/Spinner'

export const AuthLayout = () => {
  const currentYear = new Date().getFullYear()

  const {auth, loading} = useAuth();

  if (loading) {
    return (
    <div className='auth-layout'>
      <div className="auth-layout__block auth-layout__block--loading">
        <Spinner/>
      </div>
      <div className="copyright">
        <p><strong>Marbust Accounts&reg; 2.5.0</strong></p>
        <p>&copy; {currentYear} <a href='https://marbust.com' target='_blank'>Marbust Technology Company</a> - All Rights Reserved</p>
      </div>
    </div>
  )
  } else {
  return (
    <div className='auth-layout'>
      {!auth.id ?
      <Outlet/>:
       <Navigate to = '/dashboard'/>
      }
      <div className="copyright">
        <p><strong>Marbust Accounts&reg; 2.5.0</strong></p>
        <p>&copy; {currentYear} <a href='https://marbust.com' target='_blank'>Marbust Technology Company</a> - All Rights Reserved</p>
      </div>
    </div>
    )
  }
}
