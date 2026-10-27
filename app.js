
import picocolors from "picocolors";
import { productos } from "./data/productos.js";
import { calcularTotalInventario, contarProductosAgotados, listarProductos } from "./services/inventario.js";
import { formatearPrecio } from "./util/formato.js";

// Mensaje inicial del proyecto.
console.log("Hola mundo desde Node.js");
console.log(picocolors.red("Este es el color rojo"));

// Mostramos un precio con formato de moneda.
console.log(formatearPrecio(1000000));

// Mostramos la información del inventario del negocio.
console.log("\n=== INVENTARIO DE LA TIENDA ===");
console.table(productos);
console.log("Total de productos:", listarProductos().length);
console.log("Productos agotados:", contarProductosAgotados());
console.log("Valor total del inventario:", formatearPrecio(calcularTotalInventario()));