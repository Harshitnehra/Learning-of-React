import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myapp />
  </React.StrictMode>,
)
