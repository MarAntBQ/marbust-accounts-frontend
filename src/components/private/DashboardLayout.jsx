import React from 'react'
import { Header } from './layout/Header'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export const DashboardLayout = () => {
  const {auth} = useAuth();
  return (
    <div className='dashboard'>
      <Header/>
      <main>
      {auth.id ?
      <Outlet/>:
       <Navigate to = '/login'/>
      }
      </main>
    </div>
  )
}
