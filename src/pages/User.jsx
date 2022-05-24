import React from 'react';
import Account from '../components/Account';

const User = () => {
  return (
    <main className='flex-1 bg-dark-blue pb-1'>
      <div className="text-[#FFF] mb-8">
        <h1>Welcome back <br /> Tony Jarvis!</h1>
        <button className="border-green2 bg-green2 font-bold p-10px">Edit name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
};

export default User;