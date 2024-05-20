import React from 'react'
import Navbar from './component/client/Navbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider2 from './context/UserContextProvider2'

export default function Client() {
  return (
   <UserContextProvider2>
        <Navbar/>
        <Outlet/>
   </UserContextProvider2>   
  )
}
