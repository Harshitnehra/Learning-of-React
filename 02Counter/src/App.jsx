import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5
  let [counter , setcounter] = useState(10)
  const addvalue = () =>{ 
    if(counter < 20){
      counter = counter+1
    setcounter(counter)
    }
  }
  const removevalue= () =>{
    if(counter > 0){
      counter = counter-1
    setcounter(counter)
    }
  }
  return (
   <>
   <h1>chai cur code {counter}</h1>
   <h2>Counter value : {counter}</h2>
   <button onClick={addvalue}>add value</button>
   <br />
   <button onClick={removevalue}>remove value</button>
   </>
  )
}

export default App
