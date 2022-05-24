import React from 'react';

const FeatureItem = ({icon, alt, title, text}) => {
  return (
    <div className='flex-1 p-10'>
      <img src={icon} alt={alt} className='w-100px border-10 border-solid border-green2 rounded-50 p-4' />
      <h3 className='text-gray-dark text-1.25 font-bold mb-2'>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;