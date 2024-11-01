// 1. Pedir la edad actual al usuario
let miEdad = prompt("¿Cuántos años tienes?");

// 2. Pedir la edad máxima estimada
let edadMaxima = prompt("¿Hasta qué edad te gustaría vivir?");

// 3. Pedir el nombre del snack favorito
let snackFavorito = prompt("¿Cuál es tu snack favorito?");

// 4. Pedir cuántos snacks comes por día
let snacksPorDia = prompt("¿Cuántos " + snackFavorito + "s comes al día?");

// 5. Calcular cuántos snacks te quedan por comer en el resto de tu vida
let snacksRestantes = (edadMaxima - miEdad) * 365 * snacksPorDia;

// 6. Mostrar el resultado en un alert
alert("Necesitarás " + snacksRestantes + " " + snackFavorito + "s para que te alcancen hasta los " + edadMaxima + " años.");

// 7. Pedir el precio por unidad del snack
let precioPorSnack = prompt("¿Cuál es el precio de un " + snackFavorito + "?");

// 8. Calcular el gasto total en snacks
let gastoTotal = snacksRestantes * precioPorSnack;

// 9. Mostrar el resultado del gasto total en un alert
alert("Vas a gastar aproximadamente $" + gastoTotal + " en " + snackFavorito + "s el resto de tu vida.");
