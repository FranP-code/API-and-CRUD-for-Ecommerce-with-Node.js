const navbarLogica = async (activeCategory, globalProductos, enviarProductoAlCheckout, checkout, totalLogica, stylesLogica, definirProductos) => {

    const childrenNavbar = document.querySelectorAll('.exposicion-de-productos nav ul li.button')

    childrenNavbar.forEach(children => {

        children.addEventListener('click', () => {

            globalProductos = []

            activeCategory = children.innerText
            makeThisCategoryActive()
            definirProductos(globalProductos, activeCategory, enviarProductoAlCheckout, checkout, totalLogica, stylesLogica)
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
}

export default navbarLogica