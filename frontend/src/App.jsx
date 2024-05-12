import React from 'react'
import './App.css'
import Navbar from './component/admin/Navbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    
    <UserContextProvider>
      <Navbar/>
      <Outlet/>
    </UserContextProvider>
  
  )
}

export default App
