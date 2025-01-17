import React from 'react'
import { ThemeContext } from '../App'
import { nameContext } from '../App'
import { useContext } from 'react'

const CardC = () => {
   const {theme , setTheme} = useContext(ThemeContext);
   const name  = useContext(nameContext)
   function handleclick(){
    if (theme === "light")
      setTheme("dark")
    else
    setTheme("light")
   }
  return (
    <div>
      
      <button onClick={handleclick}>
        change theme
      </button>
      {name}
    </div>
  )
}

export default CardC
