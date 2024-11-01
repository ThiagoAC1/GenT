// Definición de la clase Persona
class Persona {
    constructor(nombre, edad, institucion) {
        this.nombre = nombre;
        this.edad = edad;
        this.institucion = institucion;
    }

    saludar() {
        console.log(`¡Hola! Mi nombre es ${this.nombre}`);
    }
}

// Definición de la clase Profesor que hereda de Persona
class Profesor extends Persona {
    constructor(nombre, edad, institucion, cursosACargo) {
        super(nombre, edad, institucion);
        this.cursosACargo = cursosACargo;
    }

    saludar() {
        console.log(`¡Hola! Mi nombre es ${this.nombre} y soy profesor en ${this.institucion}`);
    }

    informarCantidadDeCursos() {
        console.log(`Me encuentro dando ${this.cursosACargo} cursos en la institución ${this.institucion}`);
    }
}

// Definición de la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, institucion, cursoActual) {
        super(nombre, edad, institucion);
        this.cursoActual = cursoActual;
    }

    saludar() {
        console.log(`¡Hola! Mi nombre es ${this.nombre} y estoy haciendo ${this.cursoActual} en ${this.institucion}`);
    }
}

// Ejemplos de uso
let profesor = new Profesor("Román", 42, "Plataforma 5", 2);
profesor.saludar();
profesor.informarCantidadDeCursos();

let estudiante = new Estudiante("Gabriel", 24, "Plataforma 5", "Coding Bootcamp");
estudiante.saludar();