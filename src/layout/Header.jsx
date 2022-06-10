import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getFirstName, getLastName, getToken, login } from '../feature/loginSlice';
import logo from '../img/argentBankLogo.png'

const Header = () => {

  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.login.isLoggedIn);
  const firstName = useSelector(state => state.login.firstName);

  const handleLogout = () => {
    dispatch(getFirstName(""));
    dispatch(getLastName(""));
    dispatch(getToken(""));
    dispatch(login(false));
  }

  return (
    <div>
      <nav className='flex justify-between items-center py-[5px] px-[20px]'>
        <NavLink to='/' className='flex items-center font-bold text-grey-blue active:text-green'>
          <img src={logo} alt='Argent Bank Logo' className='w-48 max-w-full' />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to='/login' className='no-underline hover:underline font-bold text-grey-blue active:text-green mr-2'>
            <i className="fa fa-user-circle fa-lg"></i>
            <span> { firstName ? firstName : "Sign In"}</span>
          </NavLink>
          {
            loggedIn && 
            <Link to='/' className='no-underline hover:underline font-bold text-grey-blue active:text-green mr-2' onClick={handleLogout}>
              <i className="fa fa-right-from-bracket"></i>
              <span> Sign Out</span>
            </Link>
          }
        </div>
      </nav>
    </div>
  );
};

export default Header;