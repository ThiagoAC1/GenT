// Vehiculo.js
import React from 'react';

const Vehiculo = ({ nombre, velocidadMaxima }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Velocidad Máxima: {velocidadMaxima} km/h</p>
    </div>
  );
};

export default Vehiculo;
