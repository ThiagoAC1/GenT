// App.js
import React from 'react';
import { CartProvider } from './componentes/CartContext';
import ProductList from './componentes/ProductList';
import Cart from './componentes/Cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <h1>Carrito de Compras</h1>
      <ProductList />
      <Cart />
    </CartProvider>
  );
};

export default App;
