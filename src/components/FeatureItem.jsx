import React from 'react';

const FeatureItem = ({icon, alt, title, text}) => {
  return (
    <div className='flex flex-col flex-1 p-10 gap-4'>
      <img src={icon} alt={alt} className='w-[150px] border-10 border-solid border-green2 rounded-[50%] p-4 mx-auto' />
      <h3 className='text-gray-dark text-1.25 font-bold'>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;