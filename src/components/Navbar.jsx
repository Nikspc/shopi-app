import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">Shopi</Link>
      <div className="flex items-center ml-auto">
        <Link to="/cart" className="text-white flex items-center">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-2 text-xs">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;