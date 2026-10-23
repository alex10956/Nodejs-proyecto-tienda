
import picocolors from "picocolors";
import { formatearPrecio } from "./util/formato.js";


import pc from "picocolors"
console.log("Hola mundo desde Node.js");
console.log(pc.red("este es el color rojo"));

console.log(formatearPrecio(1000000));