import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
