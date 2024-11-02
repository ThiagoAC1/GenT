import React, { useContext } from 'react';
import './ProductList.css';  // Importa los estilos
import { ThemeContext } from '../contexts/ThemeContext';

const ProductList = () => {
  const { theme } = useContext(ThemeContext);
  const products = [
    { id: 1, name: 'Producto 1', price: '$10' },
    { id: 2, name: 'Producto 2', price: '$20' },
    { id: 3, name: 'Producto 3', price: '$30' },
  ];

  return (
    <div className={`product-list ${theme}`}>
      {products.map((product) => (
        <div key={product.id} className={`product-item ${theme}`}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
