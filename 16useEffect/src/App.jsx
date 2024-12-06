import { useState, useEffect } from 'react'
import ModalDialog from './components/ModalDialog'
import './App.css'

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={()=>{setShow(true)}}>
        oppen dialog
      </button>
      <ModalDialog isOpen={show}>
      Hello there!
        <br />
        <button onClick={() => {
          setShow(false);
        }}>Close</button>
      </ModalDialog>
    </div>
  )
}

export default App
