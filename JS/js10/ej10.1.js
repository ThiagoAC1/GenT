let capitales = {
    Argentina: 'Buenos Aires',
    Uruguay: 'Montevideo'
  };
  
  let lugar = 'Uruguay';

/* Resumen
capitales['lugar'] devuelve: undefined
capitales.lugar devuelve: undefined
capitales[lugar] (donde lugar es "Uruguay") devuelve: 'Montevideo'

Conclusiones
capitales['lugar'] y capitales.lugar devuelven: undefined
capitales[lugar] devuelve: 'Montevideo'
capitales['Argentina'] y capitales.Argentina devuelven: 'Buenos Aires'
capitales[Argentina] genera un error de referencia.*/