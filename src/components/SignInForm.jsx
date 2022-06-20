import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchToken, fetchUserProfile, login, rememberCheckbox, rememberEmail, rememberPassword } from '../feature/loginSlice';


function SignInForm() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const username = useSelector(state => state.login.email);
  const password_ = useSelector(state => state.login.password);
  const remember_ = useSelector(state => state.login.remember);
  
  const [email, setEmail] = useState(remember_ ? username : "");
  const [password, setPassword] = useState(remember_ ? password_ : "");
  const [error, setError] = useState(false);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    remember_ && setEmail(username);
    remember_ && setPassword(password_)
    if (email.length > 0 && password.length > 0) {
      const response = await dispatch(fetchToken(email, password))
      const request = await dispatch(fetchUserProfile(response.token))
      dispatch(login(true))
      navigate('/profile')
      !remember_ && dispatch(rememberEmail(""))
      !remember_ && dispatch(rememberPassword(""))
      error && setError(false)
    } else {
      setError(true)
    }
  }


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
            value={remember_ ? username : email}
            onChange={(e) => remember_ ? dispatch(rememberEmail(e.target.value)) : setEmail(e.target.value)} 
          />
          {
            error && (
              email.length === 0 && <p className='text-error'>Please enter a valid email</p>
            )
          }
        </div>

        <div className="flex flex-col text-left mb-4">
          <label htmlFor="password" className='font-bold'>Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className='border-1 p-5px text-1.2'
            value={remember_ ? password_ : password}
            onChange={(e) => remember_ ? dispatch(rememberPassword(e.target.value)) : setPassword(e.target.value)}
          />
          {
            error && (
              password.length === 0 && <p className='text-error'>Please enter a valid password</p>
            )
          }
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="remember-me"
            className='mr-2'
            onChange={(e) => dispatch(rememberCheckbox(e.target.checked))}
            value={remember_}
            checked={remember_}
          />
          <label htmlFor="remember-me" className='ml-1'>Remember me</label>
        </div>

        <button className='block w-full p-2 text-1.1 font-bold mt-4 border-green2 bg-green2 text-[#FFF] hover:bg-green'>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm