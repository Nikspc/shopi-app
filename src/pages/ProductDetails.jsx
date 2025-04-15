import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/fakeStore';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={product.image} alt={product.title} className="h-64 object-contain mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-semibold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
