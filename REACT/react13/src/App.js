import React from 'react';
import ContadorAutomatico from './componentes/ContadorAutomatico';
import CalculadoraCuadrados from './componentes/CalculadoraCuadrados';
import PrecioTotalProductos from './componentes/PrecioTotalProductos';
import './componentes/App.css';

function App() {
  return (
    <div className="App">
      <ContadorAutomatico />
      <CalculadoraCuadrados />
      <PrecioTotalProductos />
    </div>
  );
}

export default App;
