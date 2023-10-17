import { useState } from 'react'
import './App.css'
import Square from './assets/components/Square'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Square/>
    </>
  )
}

export default App
