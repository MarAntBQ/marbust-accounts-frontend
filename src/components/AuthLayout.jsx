import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { ForgetPassword } from './pages/auth/ForgetPassword'
import { ConfirmOTP } from './pages/auth/ConfirmOTP'

export const AuthLayout = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='auth-layout'>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/confirm-otp' element={<ConfirmOTP/>}/>
        <Route path="*" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <div className="copyright">
        <p><strong>Marbust Accounts&reg; 2.5.0</strong></p>
        <p>&copy; {currentYear} <a href='https://marbust.com' target='_blank'>Marbust Technology Company</a> - All Rights Reserved</p>
      </div>
    </div>
  )
}
