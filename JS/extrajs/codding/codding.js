// 1. Pares e Impares
function paresEimpares(num1, num2, palabra) {
    let pares = [];
    let impares = [];
    
    for (let i = 1; i <= num1; i++) {
        if (i % num2 === 0) {
            pares.push(palabra);
            impares.push(palabra);
        } else if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }
    
    console.log([...pares, ...impares].join(', '));
}

// 2. Index o Value
function min(arr, type) {
    let minValue = Math.min(...arr);
    if (type === "value") {
        console.log(minValue);
    } else if (type === "index") {
        console.log(arr.indexOf(minValue));
    }
}

// 3. Doble Filtro
function doubleFilter(paises, continente, poblacion) {
    return paises
        .filter(pais => pais.continente === continente && pais.poblacion >= poblacion)
        .map(pais => pais.nombre);
}

// 4. Doble Filtro II
function doubleFilterII(paises, continente, poblacion) {
    let filtrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    return {
        nombres: filtrados.map(pais => pais.nombre),
        'población total': filtrados.reduce((sum, pais) => sum + pais.poblacion, 0)
    };
}

// 5. Doble Filtro III
function doubleFilterIII(paises, continente, poblacion) {
    let filtrados = paises.filter(pais => pais.continente === continente && pais.poblacion >= poblacion);
    let result = {
        nombres: filtrados.map(pais => pais.nombre),
        'población total': filtrados.reduce((sum, pais) => sum + pais.poblacion, 0)
    };
    
    if (filtrados.length > 0) {
        let maxPob = Math.max(...filtrados.map(pais => pais.poblacion));
        let minPob = Math.min(...filtrados.map(pais => pais.poblacion));
        result.mayor = filtrados.find(pais => pais.poblacion === maxPob).nombre;
        result.menor = filtrados.find(pais => pais.poblacion === minPob).nombre;
    }
    
    return result;
}

// Ejemplos de uso:
console.log("1. Pares e Impares:");
paresEimpares(10, 3, "hola");

console.log("\n2. Index o Value:");
min([5, 8, 2, 3, 4, 9, 1, 18], "value");
min([5, 8, 2, 3, 4, 9, 1, 18], "index");

console.log("\n3. Doble Filtro:");
console.log(doubleFilter(paises, "europa", 30000000));

console.log("\n4. Doble Filtro II:");
console.log(doubleFilterII(paises, "europa", 30000000));

console.log("\n5. Doble Filtro III:");
console.log(doubleFilterIII(paises, "europa", 30000000));