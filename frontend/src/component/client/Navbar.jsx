import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='w-full h-16 bg-blue-950 text-white font-bold flex justify-evenly items-center fixed z-50'>
        <div>Logo</div>
        <ul className='flex gap-11'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div>
            <button className='px-3 py-1 bg-black text-white font-bold rounded-md hover:bg-white hover:text-black'>Login</button>
        </div>
      </nav>
    </div>
  )
}
