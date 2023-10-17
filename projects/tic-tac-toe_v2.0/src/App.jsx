import { useState } from 'react'
import './App.css'
import Square from './assets/components/Square'
import Board from './assets/components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board/>
    </>
  )
}

export default App
