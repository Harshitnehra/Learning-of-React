import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, settime] = useState(0)
  let timeref = useRef(null)
function starttimer(){
 timeref.current= setInterval(()=>{settime( time => time+1)},1000)
}
function stoptimer(){
clearInterval(timeref.current)
}
function resettimer(){
  stoptimer()
  settime(0)
}
  return (
    <div>
      <h1>stop watch {time}</h1>
      <br />
      <button onClick={starttimer}>
        start
      </button>
      <button onClick={stoptimer}>
        stop
      </button>
      <button onClick={resettimer}>
        reset
      </button>
    </div>
  )
}

export default App
