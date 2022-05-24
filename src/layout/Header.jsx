import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/argentBankLogo.png'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-5px px-20px'>
        <NavLink to='/' className='flex items-center font-bold text-grey-blue active:text-green'>
          <img src={logo} alt='Argent Bank Logo' className='w-48 max-w-full' />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to='/sign-in' className='no-underline hover:underline font-bold text-grey-blue active:text-green mr-2'>
            <i className="fa fa-user-circle"></i>
            <span> Sign In</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;