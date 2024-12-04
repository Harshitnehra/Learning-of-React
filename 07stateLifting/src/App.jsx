import { useState } from 'react'
import Card from "./Components/Card"
import './App.css'

function App() {
  const [name, setname] = useState("harshit")

  return (
    <div>
      <p>hlooo{name}</p>
      <Card name={name} setname={setname}></Card>
      <Card name={name} setname={setname}></Card>
      <Card name={name} setname={setname}></Card>
    </div>
  )
}

export default App
