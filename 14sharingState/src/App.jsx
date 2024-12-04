import { useState } from 'react'
import Card1 from './Components/Card1'
import './App.css'

function App() {
  const [text, settext] = useState("harshit")

  return (
    <>
    <Card1 label="First input" text={text} settext={settext}></Card1>
    <Card1 label="second input" text={text} settext={settext}></Card1>
    </>
  )
}

export default App
