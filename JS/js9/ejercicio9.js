// Función triplicador: Retorna el triple de un número
function triplicador(numero) {
    return numero * 3;
  }
  
  // Función multiplicador: Retorna el producto de dos números
  function multiplicador(num1, num2) {
    return num1 * num2;
  }
  
  // Función fizzBuzz2: Versión dinámica de FizzBuzz
  function fizzBuzz2(palabra1, palabra2, fizz_num, buzz_num, hasta) {
    let resultado = '';
  
    for (let i = 1; i <= hasta; i++) {
      if (i % fizz_num === 0 && i % buzz_num === 0) {
        resultado += palabra1 + palabra2;
      } else if (i % fizz_num === 0) {
        resultado += palabra1;
      } else if (i % buzz_num === 0) {
        resultado += palabra2;
      } else {
        resultado += i;
      }
  
      if (i < hasta) {
        resultado += ', ';
      }
    }
  
    return resultado;
  }
  
  // Funciones para manejar la interacción con la página
  
  function calcularTriplicador() {
    const numero = document.getElementById("triplicarInput").value;
    const resultado = triplicador(Number(numero));
    document.getElementById("triplicarResultado").innerText = "Resultado: " + resultado;
  }
  
  function calcularMultiplicador() {
    const num1 = document.getElementById("multiplicadorNum1").value;
    const num2 = document.getElementById("multiplicadorNum2").value;
    const resultado = multiplicador(Number(num1), Number(num2));
    document.getElementById("multiplicadorResultado").innerText = "Resultado: " + resultado;
  }
  
  function generarFizzBuzz() {
    const palabra1 = document.getElementById("palabra1").value;
    const palabra2 = document.getElementById("palabra2").value;
    const fizz_num = document.getElementById("fizzNum").value;
    const buzz_num = document.getElementById("buzzNum").value;
    const hasta = document.getElementById("hastaNum").value;
    const resultado = fizzBuzz2(palabra1, palabra2, Number(fizz_num), Number(buzz_num), Number(hasta));
    document.getElementById("fizzBuzzResultado").innerText = "Resultado: " + resultado;
  }
  