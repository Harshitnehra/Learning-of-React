
import Card from "./Components/Card"
import './App.css'
import Button from "./Components/Button"
import { useState } from "react"

function App() {
  const [count , setcount] = useState(0)
  function onclickme(){
    setcount(count+1)
  }
  return (
    <div>
      <Button onclickme = {onclickme} text="click me">
        <h1>{count}</h1>
      </Button>
      <Card>
        <h1>harshit accha hain</h1>
      </Card>
      <Card children="i love you">
         
      </Card>
    </div>
  )
}

export default App
