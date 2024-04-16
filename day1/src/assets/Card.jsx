import React from 'react';

const Card = () => {
  return (
    <div>
    <div className="max-w-xs m-5 p-5 rounded-lg overflow-hidden shadow-lg relative">
      <img className="w-full rounded-lg border-4 border-gray-200" src="image 2.png" alt="Card image" />
      <div className="flex justify-between items-center mt-4">
        <div className="px-6 py-4 space-y-3">
          <div className="text-l font-sans mb-2 font-semibold">Snickers Off-White 2024</div>
          <p className="text-gray-400 text-base font-sans text-l">NIKE</p>
          <p className="font-sans font-bold">$38.00</p>
        </div>
        <div className='grid grid-col space-y-6 '>
        <div className='flex items-center space-x-2'>
          <img className="w-6 h-6" src="Vector (1).png" alt="Icon 1" />
          <img className="w-6 h-6" src="Vector (2).png" alt="Icon 2" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white cursor-pointer"></div>
          <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-[#a3e635] border-2 border-white cursor-pointer"></div>
          {/* Add more color options as needed */}
        </div>
        </div>
      </div>
      
      <div className="px-6 py-2 space-x-auto flex">
        <button className="font-sans bg-black hover:bg-gray-500 text-white rounded-full font-bold py-2 px-4 rounded w-full">
          Buy Now
        </button>
        <img className="w-6 h-6  " src="Vector (3).png" alt="Icon 2" />
        <p>4.3</p>
      </div>
    </div>
    </div>


  );
};

export default Card;
