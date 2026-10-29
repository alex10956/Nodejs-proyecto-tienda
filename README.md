# Proyecto de inventario en Node.js

Este proyecto sirve para practicar el uso de Node.js con módulos, archivos y lógica básica de negocio.

## ¿Qué hace?

La aplicación muestra:

- un mensaje inicial,
- el inventario de productos,
- cuántos productos están agotados,
- el subtotal del inventario,
- el IVA del 19%,
- el total final con IVA.

## Estructura

- app.js: punto de entrada de la aplicación.
- data/productos.js: contiene los productos del inventario.
- services/inventario.js: lógica para calcular inventario, IVA y agotados.
- util/formato.js: formato para mostrar precios.

## Requisitos

- Node.js instalado.
- npm instalado.

## Instalación

Desde la carpeta del proyecto, ejecuta:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación:

```bash
npm start
```

Para ejecutar en modo observador:

```bash
npm run dev
```

## Ejemplo de salida

```bash
Hola mundo desde Node.js
=== INVENTARIO DE LA TIENDA ===
Total de productos: 7
Productos agotados: 1
Valor subtotal del inventario: $ 270.700
Valor del IVA (19%): $ 51.433
Valor total del inventario con IVA: $ 322.133
```

## Observación

Este proyecto está pensado para aprender de forma sencilla y clara, con comentarios básicos y código fácil de seguir.
