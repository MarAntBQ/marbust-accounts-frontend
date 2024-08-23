import { useState, useEffect } from 'react'
import { DashboardLayout } from './components/DashboardLayout'
import { AuthLayout } from './components/AuthLayout'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null)

  useEffect(() => {
    // Simulación de la obtención del token de login
    const storedToken = localStorage.getItem('loginToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  return (
    <>
      {token ? <DashboardLayout /> : <AuthLayout />}
    </>
  )
}

export default App