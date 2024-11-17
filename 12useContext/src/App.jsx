import { useState ,createContext} from 'react'
import CardA from './Components/CardA'
import './App.css'


const usercontext = createContext()
function App() {
  
  const [user, setuser] = useState({name:"love harshit"})

  return (
    <>
    <usercontext.Provider value={user}>
      <CardA></CardA>
    </usercontext.Provider>
    </>
  )
}

export default App
export {usercontext}
