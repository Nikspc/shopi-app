import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, imageSize = 'h-40' }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative">
      <img 
        src={product.image} 
        alt={product.title} 
        className={`${imageSize} w-full object-contain p-4`}
      />
      <div 
        className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full cursor-pointer" 
        onClick={() => addToCart(product)}
      >
        <FaPlus size={20} />
      </div>
      <div className="px-4 pb-4">
        <h3 className="font-medium truncate">{product.title}</h3>
        <p className="font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
