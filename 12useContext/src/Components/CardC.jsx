import React from 'react'
import { themecontext } from '../App'
import { useContext } from 'react'


const CardC = () => {
    const {theme ,settheme} = useContext(themecontext)
    function hundleclick(){
        if (theme === "light") {
            settheme("dark")
        } else {
            settheme("light")
        }
        
    }
  return (
    <div>
      <button onClick={hundleclick}>change theme</button>
    </div>
  )
}

export default CardC
