import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { AuthLayout } from '../components/public/AuthLayout'
import { Login } from '../components/public/pages/Login'
import { Register } from '../components/public/pages/Register'
import { ForgetPassword } from '../components/public/pages/ForgetPassword'
import { ConfirmOTP } from '../components/public/pages/ConfirmOTP'
// Dashboard Components
import { DashboardLayout } from '../components/private/DashboardLayout'
import { Home } from '../components/private/pages/Home'
import { MarbustEducation } from '../components/private/pages/MarbustEducation'
import MyAccountLayout from '../components/private/pages/user/MyAccountLayout';
import { MyProfile } from '../components/private/pages/user/MyProfile'
import { ChangePassword } from '../components/private/pages/user/ChangePassword'
import { EditMyProfile } from '../components/private/pages/user/EditMyProfile'
import { AuthProvider } from '../components/AuthProvider'

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='forget-password' element={<ForgetPassword/>}/>
                <Route path='confirm-otp' element={<ConfirmOTP/>}/>
                <Route path='*' element={<Navigate to = '/login'/>}/>
            </Route>
            <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='marbust-education' element={<MarbustEducation/>}/>
                <Route path='my-account' element={<MyAccountLayout />}>
                  <Route index element={<MyProfile/>}/>
                  <Route path='edit' element={<EditMyProfile/>}/>
                  <Route path='change-password' element={<ChangePassword/>}/>
                </Route>
                <Route path="*" element={<Navigate to = '/dashboard'/>}/>
            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
