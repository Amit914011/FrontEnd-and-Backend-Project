import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/Usercontext'

export default function Navbar() {
  let {login} = useContext(UserContext)
  return (
    <div>
      <nav className='w-screen h-16 bg-indigo-700 text-white flex justify-evenly items-center font-bold'>
        <div>Logo</div>
        <div>
            <ul className='flex gap-8 '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={`${login?"block":"hidden"}`}>
            <Link to='/admin/addProduct' className='bg-green-600 px-5 py-1 rounded-md cursor-pointer hover:bg-green-800'>Add +</Link>
        </div>
      </nav>
    </div>
  )
}
