// =============================================================
//  MISIÓN 3 – app.js CON COMANDOS
//  Usa este archivo como GUÍA para reescribir tu app.js
// =============================================================
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
  // Ya está hecho como ejemplo
  console.table(productos);
}
// PASO 1: else if (comando === "agotados")  → AGOTADO: NOMBRE
// PASO 2: else if (comando === "buscar" && valor1 !== undefined)
//         → Encontrado: NOMBRE: $ PRECIO (quedan CANTIDAD)  o  No hay productos que contengan "TEXTO"
// PASO 3: else if (comando === "valor")  → Valor del inventario: $ 270.700
// PASO 4: else if (comando === "vender" && valor2 !== undefined)
//         → llama vender(Number(valor1), Number(valor2)) y muestra el mensaje
//           (en rojo con pc.red si empieza con "ERROR")
// PASO 5: else → muestra la lista de comandos disponibles
// Tu código aquí
