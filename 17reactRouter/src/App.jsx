import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Content from './components/Content';
import Dependency from './components/Dependency';
import Navbar from './components/Navbar';
import './App.css'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar></Navbar>
        <About></About>
      </div>,
    },
    {
      path:"/Content",
      element: 
      <div>
        <Navbar></Navbar>
        <Content></Content>
      </div>,
    },
    {
      path:"/Dependency",
      element: 
      <div>
        <Navbar></Navbar>
        <Dependency></Dependency>
      </div> ,
    },
  ]
)

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
