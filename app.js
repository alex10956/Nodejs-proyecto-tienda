
import pc from "picocolors";
import { productos } from "./data/productos.js";
import { formatearPrecio } from "./utils/formato.js";
import {
  listarAgotados,
  valorInventario,
  buscarPorNombre,
  vender
} from "./servicios/inventario.js";

const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

if (comando === "todos") {
  console.table(productos);
} else if (comando === "agotados") {
  const agotados = listarAgotados();

  if (agotados.length === 0) {
    console.log("No hay productos agotados.");
  } else {
    console.table(
      agotados.map((producto) => ({
        id: producto.id,
        nombre: producto.nombre,
        categoria: producto.categoria,
        cantidad: producto.cantidad
      }))
    );
  }
} else if (comando === "buscar" && valor1 !== undefined) {
  const encontrados = buscarPorNombre(valor1);

  if (encontrados.length === 0) {
    console.log(`No hay productos que contengan "${valor1}"`);
  } else {
    console.table(
      encontrados.map((producto) => ({
        nombre: producto.nombre,
        precio: formatearPrecio(producto.precio),
        quedan: producto.cantidad
      }))
    );
  }
} else if (comando === "valor") {
  console.log(`Valor del inventario: ${formatearPrecio(valorInventario())}`);
} else if (comando === "vender" && valor2 !== undefined) {
  const resultado = vender(Number(valor1), Number(valor2));

  if (resultado.startsWith("ERROR")) {
    console.log(pc.red(resultado));
  } else {
    console.log(resultado);
  }
} else {
  console.log("Comandos disponibles:");
  console.log("npm start -- todos");
  console.log("npm start -- agotados");
  console.log("npm start -- buscar leche");
  console.log("npm start -- valor");
  console.log("npm start -- vender 3 2");
}
