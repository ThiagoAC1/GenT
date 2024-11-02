import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
