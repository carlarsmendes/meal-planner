import { useState } from 'react'
import './App.css'
import MealPlanner from './components/MealPlanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MealPlanner /> 
    </>
  )
}

export default App
