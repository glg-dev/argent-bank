import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import UserBanner from '../components/UserBanner';

const User = () => {

  const firstName = useSelector(state => state.login.firstName);
  const lastName = useSelector(state => state.login.lastName);

  return (
    <main className='flex-1 bg-dark-blue pb-1'>
      <UserBanner />
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
};

export default User;