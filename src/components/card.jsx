import React from 'react';

const Card = ({ busNumber, onClick }) => {
  return (
    <div className=' border border-gray-300  w-full h-[70%] shadow-md flex  items-center justify-center' onClick={onClick}>
      <p className='font-semibold text-xl'>{busNumber}</p>
    </div>
  );
};

export default Card;
