import React, { useState, useEffect } from 'react';

const ContadorAutomatico = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(contador => contador + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div>
      <h1>Contador Automático: {contador}</h1>
    </div>
  );
};

export default ContadorAutomatico;
