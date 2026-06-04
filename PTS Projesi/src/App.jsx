import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      {
        employees.map((employees) => (
          <employees key={employees.id} />
        ))
      }
    </div>
  )
}

export default App
