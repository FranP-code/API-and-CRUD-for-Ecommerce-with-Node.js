const traerProductosDeAPI = async () => {

    return await {

        product1: {
            name: 'Coca-Cola',
            price: 3.5,
            img: './img/cocacola-lata.jpg',
            category: 'bebidas'
        },

        product2: {
            name: 'Coca-Cola Zero',
            price: 3.5,
            img: './img/cocacola-zero.jpg',
            category: 'bebidas'
        },

        product3: {
            name: 'Manzana Post.',
            price: 3.5,
            img: './img/postobon-manzana-lata.jpg',
            category: 'bebidas'
        },

        product4: {
            name: 'Agua Natural',
            price: 3.5,
            img: './img/agua-500ml.jpg', 
            category: 'bebidas'
        },

        product5: {
            name: 'Naranja Post.',
            price: 3.5,
            img: './img/naranja-postobon.jpg',
            category: 'bebidas'
        },

        product6: {
            name: 'Tropical 2L',
            price: 3.5, 
            img: './img/tropical-ecuador-botella.jpg',
            category: 'bebidas'
        },

        product7: {
            name: 'Piña Postobon',
            price: 3.5,
            img: './img/postobon-pina.jpg',
            category: 'bebidas'
        }
    }
}

export default traerProductosDeAPI
