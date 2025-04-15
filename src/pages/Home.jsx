import { useEffect, useState } from 'react';
import { getProducts } from '../api/fakeStore';
import ProductCard from '../components/ProductCard';

const Home = ({ productsPerRow = 4, imageSize = 'h-40' }) => {  // Accept dynamic grid columns and image size
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  const gridClass = {
    2: 'sm:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <div className={`p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${gridClass[productsPerRow] || gridClass[4]}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} imageSize={imageSize} />
      ))}
    </div>
  );
};

export default Home;