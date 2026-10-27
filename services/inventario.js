import { productos } from "../data/productos.js";

export const listarProductos = () => {
  return productos;
};

export const contarProductosAgotados = () => {
  return productos.filter((producto) => producto.cantidad === 0).length;
};

export const calcularTotalInventario = () => {
  let total = 0;

  for (const producto of productos) {
    total += producto.precio * producto.cantidad;
  }

  return total;
};
