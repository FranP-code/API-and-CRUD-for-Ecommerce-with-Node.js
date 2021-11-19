const putOrderInHTML = (order) => {
    
    let totalPrice = 0

    const table = document.querySelector('.column.second-column table tbody')
    const documentFragment = document.createDocumentFragment()

    for (const element in order) {
        
        const product = order[element]
        
        const tr = document.createElement('tr')
        
        const orderData = {

            name: element,
            quantity: product.quantity,
            price: product.precioAcumulado,
        }
        
        for (const key in orderData) {
            
            const element = orderData[key];

            const td = document.createElement('td')
                  td.innerText = element

            if (key === 'name') {

                td.classList.add('name')
            }

            if (key === 'price') {

                totalPrice = totalPrice + element
            }

            tr.appendChild(td)
        }

        documentFragment.appendChild(tr)
        
    }

    table.appendChild(documentFragment)

    return totalPrice
}

export default putOrderInHTML
