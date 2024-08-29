import React from 'react'
import { Header } from './layout/Header'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import DashboardSpinner from '../common/DashboardSpinner'

export const DashboardLayout = () => {
  const {auth, loading} = useAuth();

  if (loading) {
    return (
      <div className='dashboard'>
        <Header/>
          <main>
            <DashboardSpinner/>
          </main>
        </div>
    )
  } else {
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
}
