import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ClientSignup() {
  const navigation=useNavigate()
  let [userName,setUserName]=useState('')
  let [emailAddress,setEmailAddress]=useState('')
  let [password,setPassword]=useState('')
  let [image,setImage]=useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    let clientData=new FormData()
    clientData.append('userName',userName)
    clientData.append('emailAddress',emailAddress)
    clientData.append('password',password)
    clientData.append('image',image)

    await axios.post('http://localhost:3000/api/clientDataSave',clientData,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    navigation('/signin')
  }

  return (
    <div>
         <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[250px] h-auto p-5 border rounded'>
                <h1 className='text-center text-2xl mb-2 uppercase font-bold'>Signup Form</h1>
                <form action="#" method="post">
                    <div className='mb-3'>
                    <label htmlFor="">User Name</label>
                    <input type="text" id="" className='w-full border rounded ps-1' placeholder='Enter your username' 
                    name='userName'
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <input type="email" className='w-full border rounded ps-1' placeholder='Enter your email address'
                        name='emailAddress'
                        onChange={(e)=>setEmailAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" className='w-full border rounded ps-1' placeholder='Enter your password'
                        name='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Upload Image</label>
                        <input type="file" className='w-full border rounded ps-1'  
                        accept='image/*'
                        onChange={(e)=>setImage(e.target.files[0])}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                    <button type='submit' onClick={handleSubmit} className='bg-yellow-600 text-white uppercase px-3 py-1 mt-3 rounded font-semibold '>Signup</button>
                    <Link to='/signin' className='bg-green-600 text-white uppercase px-3 py-1 mt-3 rounded font-semibold'>Signin</Link>
                    </div>
                </form>
            </div>
      </div>
    </div>
  )
}
