import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import UserContext from '../../context/Usercontext';

export default function Navbar() {
let {cartList}=useContext(UserContext)

  return (
    <div>
      <nav className='w-full h-16 bg-blue-950 text-white font-bold flex justify-evenly items-center fixed z-50'>
        <div>Logo</div>
        <ul className='flex gap-11'>
            <Link to=''>Home</Link>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='flex gap-5 justify-center items-center relative'>
            <Link to='/signin' className='px-3 py-1 bg-black text-white font-bold rounded-md hover:bg-white hover:text-black'>Login</Link>
            <Link to='/cart'>
            <IoCartOutline className='text-[35px] bg-white text-black p-1 rounded-full cursor-pointer'/>
            <span className='absolute right-2 -top-2 text-red-800 text-[20px] cursor-pointer'>{cartList}</span>
            </Link>
            
        </div>
      </nav>
    </div>
  )
}
