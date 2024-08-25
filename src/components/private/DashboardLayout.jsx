import React from 'react'
import { Header } from './layout/Header'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = ({ setToken, token }) => {
  return (
    <div className='dashboard'>
      <Header setToken={setToken}/>
      <main>
      <Outlet/>
      </main>
    </div>
  )
}
