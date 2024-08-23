import { useState, useEffect } from 'react'
import { DashboardLayout } from './components/DashboardLayout'
import { AuthLayout } from './components/AuthLayout'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    // Simulación de la obtención del token de login
    const storedToken = localStorage.getItem('loginToken')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  return (
    <BrowserRouter>
      {token ? (<DashboardLayout
      setToken={setToken}
      token={token}
      />) : (<AuthLayout
      setToken={setToken}
      token={token}
      />)}
    </BrowserRouter>
  )
}

export default App