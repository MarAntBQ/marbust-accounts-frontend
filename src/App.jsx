import { useState } from 'react'
import { DashboardLayout } from './components/DashboardLayout'
import { AuthLayout } from './components/AuthLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthLayout />
      {/* <DashboardLayout /> */}
    </>
  )
}

export default App
