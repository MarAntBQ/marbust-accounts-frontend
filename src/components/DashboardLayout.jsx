import React from 'react'
import { Header } from './layout/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

export const DashboardLayout = ({ setToken, token }) => {
  return (
    <div className='dashboard'>
      <Header setToken={setToken}/>
      <main>
      <Routes>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
      </main>
    </div>
  )
}
