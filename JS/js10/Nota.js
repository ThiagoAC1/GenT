
let estudiantes = [
    { estudiante: 'Juan', nota: 6 },
    { estudiante: 'Mario', nota: 8 },
    { estudiante: 'Julia', nota: 10 },
    { estudiante: 'Sofía', nota: 2 }
];

function aumentarNotas(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota > 5) {
            estudiantes[i].nota = Math.min(estudiantes[i].nota + 2, 10);
        }
    }
}
aumentarNotas(estudiantes);

console.log(estudiantes);
