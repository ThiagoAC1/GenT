// Dinosaurio.js
import React from 'react';

const Dinosaurio = ({ nombre, dieta }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{dieta}</p>
    </div>
  );
};

export default Dinosaurio;
