import { useState } from 'react'
import Card from "./Components/Card"
import './App.css'

function App() {
  const [name, setname] = useState("harshit")

  return (
    <div>
      <Card name={name} setname={setname}></Card>
      <h1>prents value : {name}</h1>
    </div>
  )
}

export default App
