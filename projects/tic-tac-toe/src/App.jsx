import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'
import Card from './components/Card'

const App = () => {
  return (
    <div className='App'>

      <h1>Software Engineering</h1>
      <h4>Software Engineering Cards</h4>
      <table className='table-grid'>
        <tr>
        <td><Card title= "Testing" info="We learning about testing"/></td>
        <td><Card title = "S.Development" info="software development"/></td>
        <td><Card title = "S.Testing" info="Software Testing"/></td>
        <td><Card title = "Automation" info="Software Automation"/></td>
        </tr>
        <tr>
        <td><Card title = "Database" info="Database Design and implementation"/></td>
        <td><Card title = "Calculus" info="Multi-variant calculus"/></td>
        <td><Card title = "D.Modeling" info="Database modeling"/></td>
        <td><Card title = "Ops. Research" info="Queing theory"/></td>
        </tr>
        <tr>
        <td><Card title = "Data Structures" info="Data structures"/></td>
        <td><Card title = "UI/UX Design" info="Human Interaction Design"/></td>
        <td><Card title = "Algorithims" info="Designing Algorithims"/></td>
        <td><Card title = "Security" info="Software security design methods"/></td>
        </tr>
      </table>
    </div>
    
  )
}

export default App
