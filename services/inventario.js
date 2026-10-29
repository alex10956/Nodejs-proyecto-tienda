import { productos } from "../data/productos.js";

export const buscarPorId = (id) => {
  return productos.find((producto) => producto.id === Number(id)) || null;
};

export const listarAgotados = () => {
  return productos.filter((producto) => producto.cantidad === 0);
};

export const valorInventario = () => {
  return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
};

export const buscarPorNombre = (texto) => {
  const filtro = String(texto).trim().toLowerCase();

  if (!filtro) {
    return [];
  }

  return productos.filter((producto) => producto.nombre.toLowerCase().includes(filtro));
};

export const vender = (id, cantidad) => {
  const producto = buscarPorId(id);

  if (!producto) {
    return "ERROR: no existe el producto con ese id";
  }

  if (cantidad <= 0) {
    return "ERROR: la cantidad debe ser mayor que cero";
  }

  if (cantidad > producto.cantidad) {
    return `ERROR: solo quedan ${producto.cantidad} unidades de ${producto.nombre}`;
  }

  producto.cantidad -= cantidad;
  return `Se vendieron ${cantidad} unidades de ${producto.nombre}. Quedan ${producto.cantidad}.`;
};

