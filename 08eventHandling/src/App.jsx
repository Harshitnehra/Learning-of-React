import { useState } from 'react'
import './App.css'

function App() {
  function togglebutton() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }
  return (
    <div>
      <button onClick={togglebutton}>click me to light and dark mode</button>
    </div>
  )
}

export default App
