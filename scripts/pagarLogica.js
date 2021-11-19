const pagarLogica = (checkout) => {

    const pagarButton = document.getElementsByClassName('pagar button')[0]
    
    pagarButton.addEventListener('click', () => {

        if (JSON.stringify(checkout) === '{}') {
    
            alert('Por favor, agregue uno o mas productos.')
            return
        }
        
        let container = document.createElement('div')
            container.id = 'mensaje-compra-container'
        
        let mensajeCompra = document.createElement('div')
            mensajeCompra.id = 'mensaje-compra'

        let mensaje = document.createElement('h2')
            mensaje.innerText = 'Espere, será enviado a la pasarela de pagos en breve...'

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
