import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function handleinput(){
  console.log("somet");
  
}
  return (
    <>
    <input onChange={handleinput}/>
      <button onClick={() =>{alert("i am clicked")}}>click me</button>
    </> 
  )
}

export default App
