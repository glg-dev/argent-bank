import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchToken, fetchUserProfile, login, rememberCheckbox, rememberEmail, rememberPassword } from '../feature/loginSlice';


function SignInForm() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const username = useSelector(state => state.login.email);
  const password_ = useSelector(state => state.login.password);

  // const logged = useSelector(state => state.login.loggedIn);
  const remember_ = useSelector(state => state.login.remember);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await dispatch(fetchToken(email, password))
    const request = await dispatch(fetchUserProfile(response.token))
    dispatch(login(true))
    navigate('/profile')
    remember && handleRemember()
  }

  function handleRemember() {
    dispatch(rememberCheckbox(true))
    dispatch(rememberEmail(username))
    setEmail(username)
    dispatch(rememberPassword(password_))
    setPassword(password_)
  }

  // useEffect(() => {
  //   console.log('login', logged);
  //   if (logged) {
  //     navigate('/user/profile')
  //   }
  // }, [logged, navigate])


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col text-left mb-4">
          <label htmlFor="email" className='font-bold'>Username</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className='border-1 p-[5px] text-1.2'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
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
            onChange={(e) => setRemember(e.target.checked)}
            value={remember_}
          />
          <label htmlFor="remember-me" className='ml-1'>Remember me</label>
        </div>
        <button className='block w-full p-2 text-1.1 font-bold mt-4 border-green2 bg-green2 text-[#FFF] hover:bg-green'>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm