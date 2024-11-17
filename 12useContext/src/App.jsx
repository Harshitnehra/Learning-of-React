import { useState ,createContext} from 'react'
import CardA from './Components/CardA'
import './App.css'


const themecontext = createContext()
function App() {
  
  const [theme, settheme] = useState("light")

  return (
    <>
    <themecontext.Provider value={{theme ,settheme}}>
      <div id='container' style={{background:theme==="light"?"beige":"black"}}>
      <CardA></CardA>
      </div>
    </themecontext.Provider>
    </>
  )
}

export default App
export {themecontext}
