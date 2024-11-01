// 1. Pedir al usuario la cantidad de días que estará de viaje
let diasDeViaje = prompt("¿Cuántos días vas a estar de viaje?");

// 2. Pedir al usuario su presupuesto máximo para todo el viaje
let presupuestoMaximo = prompt("¿Cuál es tu presupuesto máximo para todo el viaje (en dinero)?");

// 3. Declarar la variable para comidas y pedir cuántas comidas tendrá cada día
let comidasPorDia = prompt("¿Cuántas comidas tienes por día?");

// 4. Calcular cuántas comidas tendrás durante todo el viaje
let totalComidas = comidasPorDia * diasDeViaje;

// 5. Calcular cuánto se puede gastar por comida
let gastoPorComida = presupuestoMaximo / totalComidas;

// 6. Mostrar el resultado en un alert
alert("Podés gastar $" + gastoPorComida.toFixed(2) + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
