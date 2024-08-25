import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { AuthLayout } from '../components/public/AuthLayout'
import { Login } from '../components/public/pages/Login'
import { Register } from '../components/public/pages/Register'
import { ForgetPassword } from '../components/public/pages/ForgetPassword'
import { ConfirmOTP } from '../components/public/pages/ConfirmOTP'
import { DashboardLayout } from '../components/private/DashboardLayout'
import { Home } from '../components/private/pages/Home'

export const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='forget-password' element={<ForgetPassword/>}/>
                <Route path='confirm-otp' element={<ConfirmOTP/>}/>
            </Route>
            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
