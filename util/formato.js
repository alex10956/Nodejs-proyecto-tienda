export const formatearPrecio = (valor) => {
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return "$ 0";
  }

  return `$ ${valor.toLocaleString("es-CO")}`;
};

export const formatearprecio2 = (valor) => {
  return `${valor}`;
};