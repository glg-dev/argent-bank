import React from 'react';
import FeatureItem from '../components/FeatureItem';
import chat from '../img/icon-chat.png';
import money from '../img/icon-money.png'
import security from '../img/icon-security.png';

const Home = () => {
  return (
    <main>
      <div className="bg-[url('../img/bank-tree.jpeg')] bg-hero bg-cover bg-no-repeat h-[300px] relative custom-920:h-[400px] custom-920:bg-hero2">
        <section className="relative top-8 w-[200px] bg-[#FFF] p-8 text-left my-0 mx-auto custom-920:absolute custom-920:top-[50px] custom-920:right-[50px] custom-920:w-[350px] custom-920:m-8 custom-920:text-1.5">
          <h2 className="sr-only">Promoted Content</h2>
          <p className='font-bold text-base m-0 leading-tight'>No fees.</p>
          <p className='font-bold text-base m-0 leading-tight'>No minimum deposit.</p>
          <p className='font-bold text-base m-0 leading-tight'>High interest rates.</p>
          <p className="mb-0 text-0.9 custom-920:text-1.2 mt-4 leading-tight">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className='flex flex-col custom-920:flex-row'>
        <h2 className="sr-only">Features</h2>
        <FeatureItem icon={chat} alt='Chat Icon' title='You are our #1 priority' text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
        <FeatureItem icon={money} alt='Money Icon' title='More savings means higher rates' text='The more you save with us, the higher your interest rate will be!' />
        <FeatureItem icon={security} alt='Security Icon' title='Security you can trust' text='We use top of the line encryption to make sure your data and money is always safe.' />
      </section>
    </main>
  );
};

export default Home;