import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { ThemeContext } from '../contexts/ThemeContext';

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#121212', color: theme === 'light' ? '#000' : '#fff' }}>
      <Header />
      <ProductList />  {/* Aquí se utiliza el componente ProductList */}
    </div>
  );
};

export default MainPage;
