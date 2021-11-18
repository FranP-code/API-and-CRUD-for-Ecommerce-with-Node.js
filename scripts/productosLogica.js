import traerProductosDeAPI from './traerProductosDeAPI.js'

export const productosLogica = async (activeCategory, globalProductos, enviarProductoAlCheckout, checkout, totalLogica, stylesLogica) => {

    definirProductos(globalProductos, activeCategory, enviarProductoAlCheckout, checkout, totalLogica, stylesLogica)
}

export const definirProductos = async (globalProductos, activeCategory, enviarProductoAlCheckout, checkout, totalLogica, stylesLogica) => {
    
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

    let productosDiv = document.getElementsByClassName('productos')[0]
    productosDiv.innerHTML = ''

    for (const object in await productsAPI) {
        
        const instanciaProducto = new product(productsAPI[object])
        
        instanciaProducto.agregarProductoAlHTML()
        globalProductos.push(instanciaProducto)
    }

    const productos = [...productosDiv.children]
    
    productos.forEach(producto => {
        
        producto.addEventListener('click', () => {
            
            enviarProductoAlCheckout(producto.id, checkout, globalProductos, totalLogica, stylesLogica)
        })
        
    })
}