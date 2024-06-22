import React from 'react';
import { useNavigate } from 'react-router-dom';


function Card({ item }) {
  const navigate = useNavigate();
  const {id} = item
  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className='w-[384px] md:w-[384px] min-h-[456px] flex flex-col cursor-pointer mx-2' onClick={handleClick}>
      <div className='h-[225px]'>
        <img 
          src={item.imageUrl} 
          className='h-full w-full object-cover rounded-t-3xl' 
          alt="" 
        />
      </div>
      <div className='flex flex-col gap-2 p-4 flex-grow '>
       
        <h3 className='text-2xl font-semibold'>{item.title}</h3>
        <p className='text-[#667085] line-clamp-4'>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
