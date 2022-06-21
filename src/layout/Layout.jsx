import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Error from '../pages/Error';
import { useSelector } from 'react-redux';


const Layout = () => {
  const loggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/profile' element={ loggedIn ? <User /> : <Error />}  />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      
    </>
  );
};

export default Layout;