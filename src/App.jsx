import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoWrapper from './Components/ToDoWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ToDoWrapper/>
    </>
  )
}

export default App
