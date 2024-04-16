import React from 'react';

const WishlistButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Add to Wishlist
    </button>
  );
};

const AddToCartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add to Cart
    </button>
  );
};

export { WishlistButton, AddToCartButton };
