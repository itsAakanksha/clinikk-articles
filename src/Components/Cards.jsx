import React from 'react';
import Card from './Card'; // Assuming Card is in the same directory

function Cards() {
  const cardCount = 10; // Number of cards to render
  const cardsArray = Array.from({ length: cardCount });

  return (
    <>
    <div>
    <div className="font-bold p-4 text-2xl md:my-12 my-6">
    All Article Posts
    </div>
    <div className='flex justify-evenly  gap-y-6 flex-wrap'>
      {cardsArray.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
    </div>
        </>
  );
}

export default Cards;
