// Array inicial de personas
let personas = [
    { nombre: "Alba", edad: 15 },
    { nombre: "Estrella", edad: 30 },
    { nombre: "Belén", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katharine", edad: 55 }
];

// Función para ordenar y asignar posiciones
function ordenarYAsignarPosiciones(arr) {
    // Ordenar el array por edad de menor a mayor
    arr.sort((a, b) => a.edad - b.edad);
    
    // Asignar la posición a cada persona
    return arr.map((persona, index) => ({
        ...persona,
        posicion: index
    }));
}

// Aplicar la función al array de personas
let personasOrdenadas = ordenarYAsignarPosiciones(personas);

// Mostrar el resultado
console.log(personasOrdenadas);