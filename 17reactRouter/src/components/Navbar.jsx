import React from 'react'
import About from './About'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">adout</Link></li>
        <li><Link to="/Content">Content</Link></li>
        <li><Link to="/Dependency">Dependency</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
