import React from 'react'
import { useNavigate } from "react-router-dom"
const About = () => {
  const navigate = useNavigate();
  function handleclick(){
    navigate("/Dependency")
  }
  return (
    <div>
      <h1>about</h1>
      <button onClick={handleclick}>
        click to go deshbord
      </button>
    </div>
  )
}

export default About
