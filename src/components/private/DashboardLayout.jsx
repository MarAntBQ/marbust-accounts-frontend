import React from 'react'
import { Header } from './layout/Header'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  console.log('DashboardLayout component rendered');
  return (
    <div className='dashboard'>
      <Header/>
      <main>
      <Outlet/>
      </main>
    </div>
  )
}
