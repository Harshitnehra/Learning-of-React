import { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Lable from './Components/Lable';
import Contant from './Components/Contant';
import Deshboard from './Components/Deshboard';
import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {path :"/",
    element: <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  },
  {path :"/About",
    element: <div>
    <Navbar></Navbar>
    <About></About>
  </div>
  },
  {path :"/Deshboard",
    element: <div>
    <Navbar></Navbar>
    <Deshboard></Deshboard>
  </div>,
    children: [
      { path: "lable", element: <Lable /> },
      { path: "contant", element: <Contant /> },
    ],
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
