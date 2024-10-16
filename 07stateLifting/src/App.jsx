import { useState } from 'react'
import Card from "./Components/Card"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card name ="love harshit"></Card>
    </div>
  )
}

export default App
