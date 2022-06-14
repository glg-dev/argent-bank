import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='flex flex-col justify-center items-center px-48 py-60 bg-dark-blue h-[80vw]'>
      <div className="flex flex-col justify-center items-center bg-[#FFF] h-full w-full">
        <h1>Error</h1>
        <h2>Oops !</h2>
        <p>This page doesn't exist.</p>
        <NavLink to='/' className="hover:underline font-bold">Go to home</NavLink>
      </div>
    </div>
  )
}

export default Error