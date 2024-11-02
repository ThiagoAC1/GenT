// App.js
import React from 'react';
import SuperHeroe from './componentes/SuperHeroe';
import Dinosaurio from './componentes/Dinosaurio';
import Comida from './componentes/Comida';
import Vehiculo from './componentes/Vehiculo';
import JuegoDeMesa from './componentes/JuegoDeMesa';
import './componentes/App.css';  // Asegúrate de importar tu archivo de estilos

const mostrarAlerta = (nombre) => {
  alert(`Juego seleccionado: ${nombre}`);
};

function App() {
  return (
    <div className="container">
      <header>
        <h1>Componentes en React</h1>
      </header>
      <SuperHeroe nombre="Spider-Man" superpoder="Sentido arácnido" />
      <Dinosaurio nombre="Tyrannosaurus Rex" dieta="Carnívoro" />
      <Comida tipo="Pizza" ingredientes={["Harina", "Tomate", "Queso", "Pepperoni"]} />
      <Vehiculo nombre="Millennium Falcon" velocidadMaxima={1050} />
      <JuegoDeMesa nombre="Catan" mostrarAlerta={mostrarAlerta} />
      <footer>
        <p>Creado con React</p>
      </footer>
    </div>
  );
}

export default App;
