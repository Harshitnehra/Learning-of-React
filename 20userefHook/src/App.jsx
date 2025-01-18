import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function handleincrement(){
  setCount(count+1)
}
let btnref = useRef()

function oncolurchange(){
   btnref.current.style.backgroundColor = "red"
   console.log("nhgffh");
   
}
  return (
    <div>
      <button onClick={handleincrement} ref={btnref}>
        increment 
      </button>
      <div>
        count: {count}
      </div>
      <br />
      <button onClick={oncolurchange}>
        uper vale ka change color kr de
      </button>
    </div>
  )
}

export default App
