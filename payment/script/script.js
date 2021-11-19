import logoLink from './logoLink.js'
logoLink()

import getOrderData from './getOrderData.js'
const order = getOrderData()

if (order === null || order === {}) {

    window.location = '../'
}

console.log(order)

import putOrderInHTML from './putOrderInHTML.js'
const totalPrice = putOrderInHTML(order)

import calculateTotal from './calculateTotal.js'
calculateTotal(totalPrice)