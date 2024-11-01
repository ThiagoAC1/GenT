let numeros = [2, 4, 5, 37, 0];

let numeros_duplicados = {};

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    
    numeros_duplicados[numero] = numero * 2;
}

console.log("Arreglo original:", numeros);
console.log("Objeto con números duplicados:", numeros_duplicados);


let resultado = Object.entries(numeros_duplicados).sort((a, b) => a[0] - b[0]);
console.log("Resultado ordenado:", resultado);