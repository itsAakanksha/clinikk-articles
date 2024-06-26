import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  const { id } = item;

  return (
    <Link to={`${id}`} className='w-[95vw] md:w-[384px] min-h-[456px] flex flex-col cursor-pointer mx-2'>
      <div className='h-[225px]'>
        <img 
          src={item.imageUrl} 
          className='h-full w-full object-cover rounded-t-3xl' 
          alt={item.alt} 
        />
      </div>
      <div className='flex flex-col gap-2 p-4 flex-grow'>
        <h3 className='text-2xl font-semibold'>{item.title}</h3>
        <p className='text-[#667085] line-clamp-6'>
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export default Card;
