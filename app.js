
import picocolors from "picocolors";
import { productos } from "./data/productos.js";
import {
  calcularIva,
  calcularTotalConIva,
  calcularTotalInventario,
  contarProductosAgotados,
  listarProductos
} from "./services/inventario.js";
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

const subtotal = calcularTotalInventario();
const iva = calcularIva(subtotal);
const totalConIva = calcularTotalConIva();

console.log("Valor subtotal del inventario:", formatearPrecio(subtotal));
console.log("Valor del IVA (19%):", formatearPrecio(iva));
console.log("Valor total del inventario con IVA:", formatearPrecio(totalConIva));