const traerProductosDeAPI = async () => {

    return await {

        product1: {
            name: 'Coca-Cola',
            price: 3.5,
            img: './img/cocacola-lata.jpg',
            category: 'drinks'
        },

        product2: {
            name: 'Coca-Cola Zero',
            price: 3.5,
            img: './img/cocacola-zero.jpg',
            category: 'drinks'
        },

        product3: {
            name: 'Manzana Post.',
            price: 3.5,
            img: './img/postobon-manzana-lata.jpg',
            category: 'drinks'
        },

        product4: {
            name: 'Agua Natural',
            price: 3.5,
            img: './img/agua-500ml.jpg', 
            category: 'drinks'
        },

        product5: {
            name: 'Naranja Post.',
            price: 3.5,
            img: './img/naranja-postobon.jpg',
            category: 'drinks'
        },

        product6: {
            name: 'Tropical 2L',
            price: 3.5, 
            img: './img/tropical-ecuador-botella.jpg',
            category: 'drinks'
        },

        product7: {
            name: 'Piña Postobon',
            price: 3.5,
            img: './img/postobon-pina.jpg',
            category: 'drinks'
        },

        product8: {
            name: 'Asado',
            price: 15,
            img: './img/Asado.jpg',
            category: 'foods'

        },

        product9: {
            name: "Medialunas Dulces",
            price: 2,
            img: './img/Medialunas dulces.jpg',
            category: 'pastry and bakery'
        },

        product10: {

            name: 'Papas fritas congeladas',
            price: 5,
            img: './img/Papas fritas congeladas.jpg',
            category: 'refrigerated'
        }
    }
}

export default traerProductosDeAPI
