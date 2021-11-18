const enviarProductoAlCheckout = (nombreProducto, checkout, globalProductos, registrarCambiosEnElTotal, checkearCantidadDeElementos) => {

    console.log(checkout)

    if (checkout.hasOwnProperty(nombreProducto)) {

        checkout[`${nombreProducto}`].quantity++

        const element = document.getElementById('row-' + nombreProducto)
        element.children[0].children[0].innerText = (parseInt(element.children[0].children[0].innerText) + 1)

        checkout[`${nombreProducto}`].precioAcumulado = checkout[`${nombreProducto}`].precioAcumulado + checkout[`${nombreProducto}`].precio

        element.children[3].innerText = checkout[`${nombreProducto}`].precioAcumulado

        registrarCambiosEnElTotal(checkout)
        checkearCantidadDeElementos(checkout)

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

                registrarCambiosEnElTotal(checkout)                
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
                
                registrarCambiosEnElTotal(checkout)                
                checkearCantidadDeElementos()

                return
            })

            const deleteButton = recentlyDocumentAdded.children[4]

            deleteButton.addEventListener('click', () => {

                const element = document.getElementById('row-' + nombreProducto)
                element.remove()

                delete checkout[`${nombreProducto}`]
                console.log(checkout)

                registrarCambiosEnElTotal(checkout)                
                checkearCantidadDeElementos()
            })
            console.log(recentlyDocumentAdded)
        }
    }

    registrarCambiosEnElTotal(checkout)
    checkearCantidadDeElementos()
}

export default enviarProductoAlCheckout
