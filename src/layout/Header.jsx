import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getToken, login } from '../feature/loginSlice';
import logo from '../img/argentBankLogo.png'

const Header = () => {

  const dispatch = useDispatch();

  const loggedIn = useSelector(state => state.login.isLoggedIn);
  const firstName = useSelector(state => state.login.firstName);

  const handleLogout = () => {
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
          <NavLink to={loggedIn ? '/profile' : '/login'} className='no-underline hover:underline font-bold text-grey-blue active:text-green mr-2'>
            <FontAwesomeIcon icon={faUserCircle} />
            <span> { loggedIn ? firstName : "Sign In"}</span>
          </NavLink>
          {
            loggedIn && 
            <Link to='/' className='no-underline hover:underline font-bold text-grey-blue active:text-green mr-2 ml-4' onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span> Sign Out</span>
            </Link>
          }
        </div>
      </nav>
    </div>
  );
};

export default Header;