import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>My E-Commerce</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </button>
    </header>
  );
};

export default Header;
