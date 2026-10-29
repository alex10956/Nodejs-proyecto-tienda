export const formatearPrecio = (valor) => {
  if (typeof valor !== "number" || Number.isNaN(valor)) {
    return "$ 0";
  }

  return `$ ${valor.toLocaleString("es-CO")}`;
};

export const calcularIVA = (valor) => valor * 0.19;
export const totalConIVA = (valor) => valor + calcularIVA(valor);
