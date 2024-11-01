function calcularValorTotalProductos(productos) {

    let totalesPorProducto = {};

    productos.forEach(producto => {
        if (totalesPorProducto[producto.nombre]) {
            totalesPorProducto[producto.nombre] += producto.precio * producto.cantidad;
        } else {
            totalesPorProducto[producto.nombre] = producto.precio * producto.cantidad;
        }
    });

    let resultado = Object.entries(totalesPorProducto).map(([nombre, total]) => ({
        nombre: nombre,
        valorTotal: total
    }));

    return resultado;
}

const productosEcommerce = [
    { nombre: "Televisor", precio: 500, cantidad: 3 },
    { nombre: "Laptop", precio: 800, cantidad: 2 },
    { nombre: "Teléfono", precio: 200, cantidad: 5 },
    { nombre: "Televisor", precio: 500, cantidad: 2 },
    { nombre: "Tablet", precio: 300, cantidad: 4 }
];

const resultadoTotal = calcularValorTotalProductos(productosEcommerce);
console.log(resultadoTotal);

console.log("Lista de artículos con su valor total:");
resultadoTotal.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.valorTotal}`);
});