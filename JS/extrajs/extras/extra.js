// 1. ToTime
function toTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hora(s) y ${minutes} minuto(s)`;
}

// 2. Filterlist
function filterList(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    return numbers.length ? numbers : "lista de números vacía";
}

// 3. Findshort
function findShort(str) {
    if (str === '') return 0;
    return Math.min(...str.split(' ').map(word => word.length));
}

// 4. AbbrevName
function abbrevName(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('.');
}

// 5. sumEvenNumbers
function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

// 6. Gravity Flip
function flip(direction, arr) {
    return direction === 'ascendente' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}

// 7. getPlanetName
function getPlanetName(num) {
    const planets = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno'];
    return planets[num - 1] || 'Planeta no encontrado';
}

// 8. Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 9. Loop de pares
function loopDePares(num) {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
        if ((i + num) % 2 === 0) {
            console.log(`El número ${i + num} es par`);
        }
    }
}

// 10. Nuevo Arreglo
function nuevoArreglo(n) {
    return Array.from({length: n}, (_, i) => i + 1);
}

// 11. Única propiedad
function oneProperty(arr, prop) {
    return arr.map(obj => ({[prop]: obj[prop]}));
}

// 12. Sumatoria
function sumattion(num) {
    return (num * (num + 1)) / 2;
}

// 13. Caracter del medio
function middleCharacter(str) {
    const mid = Math.floor(str.length / 2);
    return str.length % 2 === 0 ? str.slice(mid - 1, mid + 1) : str[mid];
}

// 14. Validador de edad para votar
function isOldEnoughToVote(age) {
    return age >= 16;
}

// 15. Descuento tienda de autos
function descuento(marca, modelo) {
    if (marca.toLowerCase() === 'ford') {
        if (modelo.toLowerCase() === 'fiesta') return 0.05;
        if (modelo.toLowerCase() === 'focus') return 0.10;
    }
    return 0;
}

// 16. Winner
function winner(score1, score2) {
    if (score1 > score2) return "Jugador 1 ha ganado";
    if (score2 > score1) return "Jugador 2 ha ganado";
    return "Empate";
}

// Ejemplos de uso:
console.log(toTime(3665));  // "1 hora(s) y 1 minuto(s)"
console.log(filterList([1, 2, 'a', 'b']));  // [1, 2]
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));  // 3
console.log(abbrevName("Sam Harris"));  // "S.H"
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  // 12
console.log(flip('ascendente', [3, 2, 1, 2]));  // [1, 2, 2, 3]
console.log(getPlanetName(3));  // "Tierra"
console.log(factorial(5));  // 120
loopDePares(2);  // Imprime números y mensajes
console.log(nuevoArreglo(5));  // [1, 2, 3, 4, 5]
console.log(oneProperty([{a:1,b:2},{a:3,b:4}], 'b'));  // [{b:2},{b:4}]
console.log(sumattion(4));  // 10
console.log(middleCharacter("test"));  // "es"
console.log(isOldEnoughToVote(18));  // true
console.log(descuento("Ford", "Fiesta"));  // 0.05
console.log(winner(3, 2));  // "Jugador 1 ha ganado"