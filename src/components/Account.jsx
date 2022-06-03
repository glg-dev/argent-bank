import React from 'react';

const Account = ({ title, amount, description }) => {
  return (
    <section className="flex justify-between items-center border-[#000] bg-[#FFF] w-4/5 my-0 mx-auto flex-col p-6 box-border text-left mb-8 custom-720:flex-row">
    <div className="w-full flex-1">
      <h3 className="m-0 p-0 text-1 font-normal">{title}</h3>
      <p className="m-0 text-2.5 font-bold">{amount}</p>
      <p className="m-0">{description}</p>
    </div>
    <div className="custom-720:flex-grow-0 custom-720:flex-shrink-0">
      <button className="block w-full p-2 text-1.1 font-bold mt-4 border-green2 bg-green2 text-[#FFF] custom-720:w-[200px]">View transactions</button>
    </div>
  </section>
);
};

export default Account;