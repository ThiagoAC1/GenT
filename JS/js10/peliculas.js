// Definición del arreglo de películas
const peliculas = [
    {
        titulo: "Búsqueda implacable",
        rating: 5,
        loHasVisto: true
    },
    {
        titulo: "Norbbit",
        rating: 3,
        loHasVisto: false
    },
    {
        titulo: "Mini espías",
        rating: 4,
        loHasVisto: true
    },
    {
        titulo: "La vida es bella",
        rating: 5,
        loHasVisto: false
    }
];

// Bucle para iterar sobre el arreglo e imprimir los resultados
for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
    const estadoVisto = pelicula.loHasVisto ? "Visto" : "No visto";
    const estrellas = "⭐".repeat(pelicula.rating);
    
    console.log(`${estadoVisto} "${pelicula.titulo}" - ${pelicula.rating} ${estrellas}`);
}