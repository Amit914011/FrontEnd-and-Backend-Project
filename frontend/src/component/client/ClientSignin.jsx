import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import UserContext from '../../context/Usercontext'

export default function ClientSignin() {

  let navigation=useNavigate()

  let [user,setUser]=useState({
    emailAddress:'',
    password:''
  })
  let {emailAddress,password}=user

  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

  let {setLogin}=useContext(UserContext)
    async function handleSubmit(e){
        e.preventDefault()
        let result = await axios.post('http://localhost:3000/api/clientGetData',user)
        // console.log(result.data)
        if(result.data==true){
          navigation('/')
        }
        else{
          alert('enter your currect information')
        }
    }

  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[250px] h-auto p-5 border rounded'>
                <h1 className='text-center text-2xl mb-2 uppercase font-bold'>Signin Form</h1>
                <form action="" method="post">
                    <div className='mb-3'>
                    <label htmlFor="">Email ID</label>
                    <input type="text" id="" className='w-full border rounded ps-1' placeholder='Enter your email Address' 
                    name='emailAddress'
                    value={emailAddress}
                    onChange={handleChange}
                    />
                    
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" className='w-full border rounded ps-1' placeholder='Enter your password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                    <button type='submit' onClick={handleSubmit} className='bg-green-600 text-white uppercase px-3 py-1 mt-3 rounded font-semibold'>Signin</button>
                    <Link to='/signup' className='bg-yellow-600 text-white uppercase px-3 py-1 mt-3 rounded font-semibold '>Signup</Link>
                    </div>
                </form>
            </div>
      </div>
    </div>
  )
}
