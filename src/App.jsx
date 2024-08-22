import { useState } from 'react'
import { DashboardLayout } from './components/DashboardLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashboardLayout />
    </>
  )
}

export default App
