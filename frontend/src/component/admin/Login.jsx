import axios from 'axios';
import React, { useContext, useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/Usercontext';

export default function Login() {
    let [pass,setPass]=useState(false)

  let {setLogin} = useContext(UserContext)
    let [data,setData]=useState({
      userName:'',
      password:''
    })
    let {userName,password}=data

    let navigation=useNavigate()
    
    function handleChange(e){
      setData({...data,[e.target.name]:e.target.value})
    }
    async function handleSubmit(){
      let result = await axios.post('http://localhost:3000/api/adminLogin',data)
      if(result.data==true){
        setLogin(true)
        navigation('/admin')
      }else{
        alert('please enter your currect data')
      }
    }
  return (
    <div>
      <div className='w-full flex justify-center items-center flex-col my-5'>
        <h1 className='text-3xl font-bold mb-2'>Login Form</h1>
        <form action="" method="post">
            <label htmlFor="">User Name</label><br />
            <input className='border w-64 rounded-md mb-5 px-2' type="text" id=""placeholder='Enter Your User Name'
            name='userName'
            value={userName}
            onChange={handleChange}
            /><br />
            <label htmlFor="">Password</label><br />
            <input className='border w-64 rounded-md mb-5 px-2' type={pass?"text":"password"} id=""placeholder='Enter Your Password'
            name='password'
            value={password}
            onChange={handleChange}
            /><span className='absolute ' onClick={()=>setPass(!pass)}>{pass?<IoEyeSharp />:<IoEyeOffSharp />}</span>
            <br />
            <Link onClick={handleSubmit} className='bg-blue-700 px-5 py-2 rounded-md text-white font-bold text-xl'>Log in</Link>
        </form>
      </div>
    </div>
  )
}
