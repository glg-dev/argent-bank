import React, { useState } from 'react'
import { userLogin } from '../services/api';


function SignInForm() {

  const [username, setUsername] = useState("tony@stark.com");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(false);
  const [token, setToken] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`username : "${username}" / password : "${password}"`);
    userLogin(username, password)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col text-left mb-4">
          <label htmlFor="username" className='font-bold'>Username</label>
          <input 
            type="email" 
            name="username" 
            id="username" 
            className='border-1 p-[5px] text-1.2'
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="flex flex-col text-left mb-4">
          <label htmlFor="password" className='font-bold'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className='border-1 p-5px text-1.2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="remember-me"
            className='mr-2'
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me" className='ml-1'>Remember me</label>
        </div>
        <button className='block w-full p-2 text-1.1 font-bold mt-4 border-green2 bg-green2 text-[#FFF] hover:bg-green'>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm