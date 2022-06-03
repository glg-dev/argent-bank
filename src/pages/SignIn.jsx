import React from 'react';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
  return (
    <main className='flex-1 bg-dark-blue pt-12 pb-4'>
      <section className='box-border bg-[#FFF] w-[300px] my-0 mx-auto p-8'>
        <i className='fa fa-user-circle'></i>
        <h1 className='font-bold text-1.5'>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  );
};

export default SignIn;