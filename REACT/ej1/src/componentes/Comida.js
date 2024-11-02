// Comida.js
import React from 'react';

const Comida = ({ tipo, ingredientes }) => {
  return (
    <div>
      <h1>{tipo}</h1>
      <p>{ingredientes.join(', ')}</p>
    </div>
  );
};

export default Comida;
