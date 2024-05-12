import React, { useState } from 'react'
import UserContext from './Usercontext'

export default function UserContextProvider({children}) {
    let [login,setLogin] =useState(true)

  return (
    <UserContext.Provider value={{login,setLogin}}>
        {children}
    </UserContext.Provider>
  )
}
