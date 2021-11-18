const registrarCambiosEnElTotal = (checkout) => {
    
    const total = document.getElementById('precio')
    let totalSumado = 0

    console.log(checkout)   

    for (const i in checkout) {

        const product = checkout[i];
            
        totalSumado = totalSumado + product.precioAcumulado
    }

    total.innerText = totalSumado
}

export default registrarCambiosEnElTotal