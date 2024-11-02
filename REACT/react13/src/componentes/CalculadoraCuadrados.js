import React, { useState } from 'react';

const CalculadoraCuadrados = () => {
  const [numero, setNumero] = useState('');
  const [cuadrado, setCuadrado] = useState(null);

  const calcularCuadrado = (e) => {
    const valor = parseInt(e.target.value, 10);
    setNumero(valor);
    setCuadrado(valor * valor);
  };

  return (
    <div>
      <h1>Calculadora de Cuadrados</h1>
      <input
        type="number"
        value={numero}
        onChange={calcularCuadrado}
        placeholder="Ingresa un número"
      />
      {cuadrado !== null && <p>El cuadrado de {numero} es: {cuadrado}</p>}
    </div>
  );
};

export default CalculadoraCuadrados;
