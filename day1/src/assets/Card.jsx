import React from 'react';

const Card = () => {
  return (
    <div className="max-w-xs m-5 p-5 rounded-lg overflow-hidden shadow-lg">
      <img className="w-full rounded-lg" src="https://via.placeholder.com/150" alt="Card image" />
      <div className="px-6 py-4">
        <div className="text-xl font-sans mb-2 font-semibold">Snickers Off-White 2024</div>
        <p className="text-gray-400 text-base font-sans">
        NIKE
        </p>
        <p className='font-sans font-bold'>
            $38.00
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button className=" font-sans bg-black hover:bg-gray-500 text-white rounded-full font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
