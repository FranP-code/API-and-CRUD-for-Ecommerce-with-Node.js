const logoLink = () => {
    
    const logo = document.querySelector('header .logo')

    logo.addEventListener('click', () => {

        window.location = '../'
    })

}

export default logoLink
