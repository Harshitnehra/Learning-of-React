import { useState ,createContext} from 'react'
import CardA from './Components/CardA'
import './App.css'
const ThemeContext = createContext();
const nameContext = createContext();
function App() {
const [theme , setTheme]= useState("light")
const [name , setname] = useState({name1:"harshit"})
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{background:theme==="light"?"beige":"black"}}>
         <CardA/>
      </div>
      <nameContext.Provider value={name}>

      </nameContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
export {ThemeContext}
export {nameContext}
