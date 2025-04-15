import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title} × {item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="flex justify-between mt-4 border-t pt-2 font-bold">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-6"
      >
        Confirm & Pay
      </button>
    </div>
  );
};

export default Checkout;