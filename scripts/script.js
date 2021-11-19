//? GLOBAL

let activeCategory = 'DRINKS'
let checkout = {}
let globalProductos = []

//! Total Logica

import totalLogica from './totalLogica.js' //? registrarCambiosEnElTotal

//? styles Logica

import stylesLogica from './stylesLogica.js' //? checkearCantidadDeElementos

//! Checkout logica

import checkoutLogica from './checkoutLogica.js' //? enviarProductoAlCheckout

//? Productos Logica

import {productosLogica, definirProductos} from './productosLogica.js'
await productosLogica(activeCategory, globalProductos, checkoutLogica, checkout, totalLogica, stylesLogica)

//! Navbar logica

import navbarLogica from './navbarLogica.js'
await navbarLogica(activeCategory, globalProductos, checkoutLogica, checkout, totalLogica, stylesLogica, definirProductos)

//? Pagar Logica

import pagarLogica from './pagarLogica.js'
pagarLogica(checkout)