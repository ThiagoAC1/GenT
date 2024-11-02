// JuegoDeMesa.js
import React, { Component } from 'react';

class JuegoDeMesa extends Component {
  render() {
    const { nombre, mostrarAlerta } = this.props;

    return (
      <div>
        <h1>{nombre}</h1>
        <button onClick={() => mostrarAlerta(nombre)}>Mostrar Alerta</button>
      </div>
    );
  }
}

export default JuegoDeMesa;
