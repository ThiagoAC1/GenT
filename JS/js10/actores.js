
let peliculas = [];
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
};

let actoresPrincipales = Object.values(actoresPrincipalesPorPelicula);
let actoresVocales = actoresPrincipales.filter(actor => /^[aeiouAEIOU]/.test(actor));

console.log("Actores que comienzan con vocal:", actoresVocales);


console.log("Todos los actores principales:", actoresPrincipales);

peliculas = Object.keys(actoresPrincipalesPorPelicula);

console.log("Películas:", peliculas);

let peliculaPorActor = {};

for (let [pelicula, actor] of Object.entries(actoresPrincipalesPorPelicula)) {
    if (peliculaPorActor[actor]) {
        if (Array.isArray(peliculaPorActor[actor])) {
            peliculaPorActor[actor].push(pelicula);
        } else {
            peliculaPorActor[actor] = [peliculaPorActor[actor], pelicula];
        }
    } else {
        peliculaPorActor[actor] = pelicula;
    }
}

console.log("Películas por actor:", peliculaPorActor);

function agregarPeliculaActor(actor, pelicula) {
    if (peliculaPorActor[actor]) {
        if (Array.isArray(peliculaPorActor[actor])) {
            peliculaPorActor[actor].push(pelicula);
        } else {
            peliculaPorActor[actor] = [peliculaPorActor[actor], pelicula];
        }
    } else {
        peliculaPorActor[actor] = pelicula;
    }
}

agregarPeliculaActor("Leonardo DiCaprio", "El lobo de Wall Street");
agregarPeliculaActor("Al Pacino", "Scarface");

console.log("Películas por actor (actualizado):", peliculaPorActor);