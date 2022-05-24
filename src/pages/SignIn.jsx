import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <main className='flex-1 bg-dark-blue pt-12 pb-4'>
      <section className='box-border bg-[#FFF] w-300px my-0 mx-auto p-8'>
        <i className='fa fa-user-circle'></i>
        <h1 className='font-bold text-1.5'>Sign In</h1>
        <form>
          <div className="flex flex-col text-left mb-4">
            <label htmlFor="username" className='font-bold'>Username</label>
            <input type="text" name="username" id="username" className='border-1 p-5px text-1.2' />
          </div>
          <div className="flex flex-col text-left mb-4">
            <label htmlFor="password" className='font-bold'>Password</label>
            <input type="password" name="password" id="password" className='border-1 p-5px text-1.2' />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className='ml-1'>Remember me</label>
          </div>
          <NavLink to='/user' className='block w-full p-2 text-1.1 font-bold mt-4 border-green2 bg-green2 text-[#FFF]'>Sign In</NavLink>
        </form>
      </section>
    </main>
  );
};

export default SignIn;