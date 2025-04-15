import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p className="p-6">Your cart is empty</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
          <div>
            <h3>{item.title}</h3>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <button
            className="text-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
