import React, { useState } from 'react'
import UserContext from './Usercontext'

export default function UserContextProvider2({children}) {
    let [cartList,setCartList]=useState('')
    let [login,setLogin]= useState('')
  return (
    <UserContext.Provider value={{cartList,setCartList ,login,setLogin}}>
        {children}
    </UserContext.Provider>
  )
}
