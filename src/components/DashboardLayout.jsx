import React from 'react'
import { Header } from './layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

export const DashboardLayout = () => {
  return (
    <div className='dashboard'>
      <Header />
      <main>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path="*" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
      </main>
    </div>
  )
}
