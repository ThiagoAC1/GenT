
let personas = [
    { nombre: 'Ana', edad: '28' },
    { nombre: 'María', edad: '24' },
    { nombre: 'José', edad: '31' }
];


let personasConMasDe27 = personas.filter(persona => parseInt(persona.edad) > 27);

console.log(personasConMasDe27);

