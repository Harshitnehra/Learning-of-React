import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    function handleclick(){
        navigate("/About")
    }
  return (
    <div>
      Home
      <button onClick={handleclick}>
        move to about page
      </button>
    </div>
  )
}

export default Home
