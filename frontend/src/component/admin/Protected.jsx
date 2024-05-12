import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
import UserContext from '../../context/Usercontext'
export default function Protected({children}) {
  let {login}=useContext(UserContext)
if(login==true){
  return children
}else{
  return <Navigate to='/admin/login'/>
}
}
