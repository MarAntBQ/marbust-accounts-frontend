import React, {useState} from 'react'
import { Header } from './layout/Header'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import DashboardSpinner from '../common/DashboardSpinner'
import { ResponsiveNav } from './layout/ResponsiveNav'

export const DashboardLayout = () => {
  const { auth, loading } = useAuth();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  if (loading) {
    return (
      <div className='dashboard'>
        <Header isMenuVisible={isMenuVisible} />
        <ResponsiveNav toggleMenuVisibility={toggleMenuVisibility} />
          <main>
            <DashboardSpinner/>
          </main>
        </div>
    )
  } else {
    return (
      <div className='dashboard'>
        <Header isMenuVisible={isMenuVisible} />
        <ResponsiveNav toggleMenuVisibility={toggleMenuVisibility} />
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
