//? GLOBAL

let activeCategory = 'BEBIDAS'
let checkout = {}
let globalProductos = []

const userName = document.getElementById('perfil-nombre')
      userName.innerText = userName.innerText.toUpperCase()

//! Productos Logica

import traerProductosDeAPI from './traerProductosDeAPI.js'

const traerData = async ()  => {
   
    return await traerProductosDeAPI()
}

const productsAPI = await traerData()

class product {

    constructor(productObject) {

        this.nombre = productObject.name
        this.precio = productObject.price
        this.img = productObject.img
        this.categoria = productObject.category
        this.cantidadAcumulada = 0
        this.precioAcumulado = 0
    }

    agregarProductoAlHTML() {

        if (activeCategory !== this.categoria.toUpperCase()) {

            return
        }

        let divContainer = document.createElement('div')
            divContainer.classList.add('producto')
            divContainer.classList.add('button')
            divContainer.id = this.nombre

        let img = document.createElement('img')
            img.src = this.img
            img.alt = this.nombre

        let divText = document.createElement('div')
            divText.classList.add('text')
        
        let name = document.createElement('span')
            name.classList.add('name')
            name.innerText = this.nombre.toUpperCase()
        
        let price = document.createElement('span')
            price.classList.add('price')
            price.innerText = this.precio + ' USD'

        divText.appendChild(name)
        divText.appendChild(price)

        divContainer.appendChild(img)
        divContainer.appendChild(divText)

        const productosDiv = document.getElementsByClassName('productos')[0]
        productosDiv.appendChild(divContainer)
    }
}

const definirProductos = () => {

    let productosDiv = document.getElementsByClassName('productos')[0]
        productosDiv.innerHTML = ''

    for (const object in productsAPI) {
        
        const instanciaProducto = new product(productsAPI[object])
        
        instanciaProducto.agregarProductoAlHTML()
        globalProductos.push(instanciaProducto)
    }

    const productos = [...productosDiv.children]

    productos.forEach(producto => {

        producto.addEventListener('click', () => {

            enviarProductoAlCheckout(producto.id)
        })

    })
}

definirProductos()

//! Navbar logica

const childrenNavbar = document.querySelectorAll('.exposicion-de-productos nav ul li.button')

childrenNavbar.forEach(children => {

    children.addEventListener('click', () => {

        activeCategory = children.innerText
        makeThisCategoryActive()
        definirProductos()
    })
})

const makeThisCategoryActive = () => {
    
    childrenNavbar.forEach(children => {

        if (!children.children[0]) {

            if (activeCategory === children.innerText) {
                
                children.classList.add('active')
            }
            
            else if (children.classList.contains('active')) {
                
                children.classList.remove('active')
            }
        }
    })
}

makeThisCategoryActive()

//! Checkout logica

const enviarProductoAlCheckout = (nombreProducto) => {

    if (checkout.hasOwnProperty(nombreProducto)) {

        checkout[`${nombreProducto}`].quantity++

        const element = document.getElementById('row-' + nombreProducto)
        element.children[0].children[0].innerText = (parseInt(element.children[0].children[0].innerText) + 1)

        checkout[`${nombreProducto}`].precioAcumulado = checkout[`${nombreProducto}`].precioAcumulado + checkout[`${nombreProducto}`].precio

        element.children[3].innerText = checkout[`${nombreProducto}`].precioAcumulado

        registrarCambiosEnElTotal()
        checkearCantidadDeElementos()

        return
    }
    
    for (const producto in globalProductos) {

        const objeto = globalProductos[producto];
        
        if (objeto.nombre  === nombreProducto) {
            
            checkout[`${nombreProducto}`] = {

                precio: objeto.precio,
                precioAcumulado: objeto.precio,
                quantity: 1
            }

            let row = document.createElement('tr')
                row.id = 'row-' + nombreProducto

            let td1 = document.createElement('td')
            let quantity = document.createElement('span')
                quantity.innerText = '1'

            let plusOne = document.createElement('button')
                plusOne.innerText = '+'
                plusOne.classList.add('button')
            
            let minusOne = document.createElement('button')
                minusOne.innerText = '-'
                minusOne.classList.add('button')

            td1.appendChild(quantity)
            td1.appendChild(plusOne)
            td1.appendChild(minusOne)
            
            let td2 = document.createElement('td')
                td2.innerText = objeto.nombre
            
            let td3 = document.createElement('td')
                td3.innerText = objeto.precio

            let td4 = document.createElement('td')
                td4.innerText = checkout[`${nombreProducto}`].precioAcumulado

            let td5 = document.createElement('td')
            let img = document.createElement('img')
                    img.src = './img/eliminar.png'
                    img.alt = 'trash-icon'
                    img.classList.add('button')
                td5.appendChild(img)

            row.appendChild(td1)
            row.appendChild(td2)
            row.appendChild(td3)
            row.appendChild(td4)
            row.appendChild(td5)

            const tableCheckout = document.querySelector('.checkout .table-container table tbody')
                tableCheckout.appendChild(row)

            const recentlyDocumentAdded = document.getElementById('row-' + nombreProducto)
            const buttons = recentlyDocumentAdded.children[0]

            const plusButton = buttons.children[1]
            
            plusButton.addEventListener('click', () => {

                
                checkout[`${nombreProducto}`].quantity++
                
                const element = document.getElementById('row-' + nombreProducto)
                element.children[0].children[0].innerText = (parseInt(element.children[0].children[0].innerText) + 1)
                
                checkout[`${nombreProducto}`].precioAcumulado = checkout[`${nombreProducto}`].precioAcumulado + checkout[`${nombreProducto}`].precio
                
                element.children[3].innerText = checkout[`${nombreProducto}`].precioAcumulado

                registrarCambiosEnElTotal()
                checkearCantidadDeElementos()

                return
            })

            const minusButton = buttons.children[2]

            minusButton.addEventListener('click', () => {

                
                if (checkout[`${nombreProducto}`].quantity === 1) {

                    return
                }

                checkout[`${nombreProducto}`].quantity--
                
                const element = document.getElementById('row-' + nombreProducto)
                element.children[0].children[0].innerText = (parseInt(element.children[0].children[0].innerText) - 1)
                
                checkout[`${nombreProducto}`].precioAcumulado = checkout[`${nombreProducto}`].precioAcumulado - checkout[`${nombreProducto}`].precio

                element.children[3].innerText = checkout[`${nombreProducto}`].precioAcumulado
                
                registrarCambiosEnElTotal()
                checkearCantidadDeElementos()

                return
            })

            const deleteButton = recentlyDocumentAdded.children[4]

            deleteButton.addEventListener('click', () => {

                const element = document.getElementById('row-' + nombreProducto)
                element.remove()

                delete checkout[`${nombreProducto}`]
                console.log(checkout)
            })
            console.log(recentlyDocumentAdded)
        }
    }

    registrarCambiosEnElTotal()
    checkearCantidadDeElementos()
}

//! Total Logica


const registrarCambiosEnElTotal = () => {
    
    const total = document.getElementById('precio')
    let totalSumado = 0

    console.log(checkout)   

    for (const i in checkout) {

        const product = checkout[i];
            
        totalSumado = totalSumado + product.precioAcumulado
    }

    total.innerText = totalSumado
}

//! styles Logica

const checkearCantidadDeElementos = () => {
    
    if (document.querySelector('#products-display-checkout tbody').children.length > 5) {


        const checkout = document.getElementsByClassName('checkout')[0]
        const table = document.getElementById('products-display-checkout')
        const tableContainer = table.parentElement

        checkout.style.height = 'auto'
        table.style.height = 'auto'
        tableContainer.style.height = 'auto'
    }
}

//! Pagar Logica

const pagarButton = document.getElementsByClassName('pagar button')[0]

pagarButton.addEventListener('click', () => {

    let container = document.createElement('div')
        container.id = 'mensaje-compra-container'
    
    let mensajeCompra = document.createElement('div')
        mensajeCompra.id = 'mensaje-compra'

    let mensaje = document.createElement('h2')
        mensaje.innerText = 'Espere, sera enviado a la pasarela de pagos en breve...'

    mensajeCompra.appendChild(mensaje)
    container.appendChild(mensajeCompra)

    const body = document.querySelector('body')

    body.appendChild(container)

    setTimeout(() => {

        window.location.reload(true)

    }, 3000)
})