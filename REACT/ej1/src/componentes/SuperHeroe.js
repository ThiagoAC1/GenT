// SuperHeroe.js
import React from 'react';

const SuperHeroe = ({ nombre, superpoder }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{superpoder}</p>
    </div>
  );
};

export default SuperHeroe;
