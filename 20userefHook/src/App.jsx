import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let btnref = useRef()

function oncolurchange(){
   btnref.current.style.backgroundColor = "red"
   console.log("nhgffh");
   
}
  return (
    <div>
      <button ref={btnref}>
        increment 
      </button>
      <br />
      <button onClick={oncolurchange}>
        uper vale ka change colur kr de
      </button>
    </div>
  )
}

export default App
