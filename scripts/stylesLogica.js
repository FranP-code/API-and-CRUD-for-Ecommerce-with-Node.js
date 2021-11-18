const checkearCantidadDeElementos = () => {
    
    const checkout = document.getElementsByClassName('checkout')[0]
    const table = document.getElementById('products-display-checkout')
    const tableContainer = table.parentElement

    if (document.querySelector('#products-display-checkout tbody').children.length > 5) {


        checkout.style.height = 'auto'
        table.style.height = 'auto'
        tableContainer.style.height = 'auto'
    }

    else {
        
        checkout.style.height = '62vh'
        table.style.height = 'auto'
        tableContainer.style.height = '50vh'

    }
}

export default checkearCantidadDeElementos