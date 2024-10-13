import React from 'react'
import { useState } from "react";
import  './Counter.css'
const counter = () => {
    const [count, setcount] = useState(0);
    // let button = document.querySelector("#btn")
    // button.addEventListener('click', )
  return (
    <div className='counter-counter'>
      <p id="para">you have click {count} time</p>
      <button id='btn' onClick={()=> {setcount(count+1)}}>Click me</button>
      <button id='btn' onClick={()=> {setcount(count-1)}}>Click me</button>
    </div>
  )
}

export default counter
