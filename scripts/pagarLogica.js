const pagarLogica = (checkout) => {

    const pagarButton = document.getElementsByClassName('pagar button')[0]
    
    pagarButton.addEventListener('click', () => {

        if (JSON.stringify(checkout) === '{}') {
    
            alert('Please, add one or more products to buy.')
            return
        }
        
        let container = document.createElement('div')
            container.id = 'mensaje-compra-container'
        
        let mensajeCompra = document.createElement('div')
            mensajeCompra.id = 'mensaje-compra'

        let mensaje = document.createElement('h2')
            mensaje.innerText = 'Please wait, it will be sent to the payment gateway shortly...'

        mensajeCompra.appendChild(mensaje)
        container.appendChild(mensajeCompra)

        const body = document.querySelector('body')

        body.appendChild(container)

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        body.style.overflowY = 'hidden'

        sessionStorage.setItem('order', JSON.stringify(checkout))
        
        setTimeout(() => {

            window.location.href = './payment'

        }, 3000)
    })
}

export default pagarLogica
